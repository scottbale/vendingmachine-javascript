CORE.require('vendingmachine.Currency');
CORE.require('vendingmachine.AutomatedCashier');

(function(testLoader, TESTER, ACM, CURRENCY){

    testLoader.addTests({
        TestAutomatedCashier : {
            testCoinReturnIsEmpty : function(){
                var acm = ACM.makeAutomatedCashier();
                TESTER.assertArrayEquals([], acm.returnCoins());
            },
            testDepositOneCoinThenReturn : function(){
                var acm = ACM.makeAutomatedCashier();
                acm.deposit(CURRENCY.NICKEL);
                var coinsReturned = acm.returnCoins();
                TESTER.assertArrayEquals([CURRENCY.NICKEL], coinsReturned);
            },
            testDepositMultipleCoinsThenReturn : function(){
                var acm = ACM.makeAutomatedCashier();
                acm.deposit(CURRENCY.NICKEL);
                acm.deposit(CURRENCY.DIME);
                var coinsReturned = acm.returnCoins();
                TESTER.assertArrayEquals([CURRENCY.NICKEL, CURRENCY.DIME], coinsReturned);
            },
            testMaintenanceLoadCoins : function(){
                var acm = ACM.makeAutomatedCashier();
                TESTER.assertEquals(0, acm.maintenanceGet().length);
                acm.maintenanceLoad(CURRENCY.NICKEL);
                acm.maintenanceLoad(CURRENCY.DIME);
                TESTER.assertEquals(0, acm.returnCoins().length);
                var acmCoins = acm.maintenanceGet();
                TESTER.assertEquals(2, acmCoins.length);
                TESTER.assertEquals(CURRENCY.NICKEL, acmCoins[0]);
                TESTER.assertEquals(CURRENCY.DIME, acmCoins[1]);
            },
            testPurchaseWithInsufficientFunds : function(){
                var acm = ACM.makeAutomatedCashier();
                acm.deposit(CURRENCY.NICKEL);
                acm.deposit(CURRENCY.DIME);
                TESTER.assertTrue(!acm.purchase(85));
                TESTER.assertArrayEquals([CURRENCY.NICKEL, CURRENCY.DIME], acm.returnCoins());
            },
            testPurchaseExactChange : function(){
                var acm = ACM.makeAutomatedCashier();
                acm.maintenanceLoad(CURRENCY.NICKEL);
                acm.deposit(CURRENCY.QUARTER);
                acm.deposit(CURRENCY.DIME);
                acm.deposit(CURRENCY.QUARTER);
                TESTER.assertTrue(acm.purchase(60));
                TESTER.assertArrayEquals([], acm.returnCoins());
                TESTER.assertArrayEquals([CURRENCY.NICKEL, CURRENCY.QUARTER, CURRENCY.DIME, CURRENCY.QUARTER], acm.maintenanceGet());
            }
        }
    });


}(TEST_LOADER, TESTER, ACM, CURRENCY));








