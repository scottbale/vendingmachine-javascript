CORE.require('vendingmachine.Coins');
CORE.require('vendingmachine.AutomatedCashier');

(function(testLoader, TESTER, ACM, COINS){

    testLoader.addTests({
        TestAutomatedCashier : {
            testCoinReturnIsEmpty : function(){
                var acm = ACM.makeAutomatedCashier();
                TESTER.assertArrayEquals([], acm.returnCoins());
            },
            testDepositOneCoinThenReturn : function(){
                var acm = ACM.makeAutomatedCashier();
                acm.deposit(COINS.NICKEL);
                var coinsReturned = acm.returnCoins();
                TESTER.assertArrayEquals([COINS.NICKEL], coinsReturned);
            },
            testDepositMultipleCoinsThenReturn : function(){
                var acm = ACM.makeAutomatedCashier();
                acm.deposit(COINS.NICKEL);
                acm.deposit(COINS.DIME);
                var coinsReturned = acm.returnCoins();
                TESTER.assertArrayEquals([COINS.NICKEL, COINS.DIME], coinsReturned);
            },
            testMaintenanceLoadCoins : function(){
                var acm = ACM.makeAutomatedCashier();
                TESTER.assertEquals(0, acm.maintenanceGet().length);
                acm.maintenanceLoad(COINS.NICKEL);
                acm.maintenanceLoad(COINS.DIME);
                TESTER.assertEquals(0, acm.returnCoins().length);
                var acmCoins = acm.maintenanceGet();
                TESTER.assertEquals(2, acmCoins.length);
                TESTER.assertEquals(COINS.NICKEL, acmCoins[0]);
                TESTER.assertEquals(COINS.DIME, acmCoins[1]);
            },
            testPurchaseWithInsufficientFunds : function(){
                var acm = ACM.makeAutomatedCashier();
                acm.deposit(COINS.NICKEL);
                acm.deposit(COINS.DIME);
                TESTER.assertTrue(!acm.purchase(85));
                TESTER.assertArrayEquals([COINS.NICKEL, COINS.DIME], acm.returnCoins());
            },
            testPurchaseExactChange : function(){
                var acm = ACM.makeAutomatedCashier();
                acm.maintenanceLoad(COINS.NICKEL);
                acm.deposit(COINS.QUARTER);
                acm.deposit(COINS.DIME);
                acm.deposit(COINS.QUARTER);
                TESTER.assertTrue(acm.purchase(60));
                TESTER.assertArrayEquals([], acm.returnCoins());
                TESTER.assertArrayEquals([COINS.QUARTER, COINS.QUARTER, COINS.DIME, COINS.NICKEL], acm.maintenanceGet());
            },
            testPurchaseChangeNeededButNotAvailable : function(){
                var acm = ACM.makeAutomatedCashier();
                acm.deposit(COINS.QUARTER);
                acm.deposit(COINS.QUARTER);
                acm.deposit(COINS.QUARTER);
                TESTER.assertTrue(acm.purchase(60));
                TESTER.assertArrayEquals([], acm.returnCoins());
            },
            testPurchaseChangeNeeded : function(){
                var acm = ACM.makeAutomatedCashier();
                acm.maintenanceLoad(COINS.DIME);
                acm.maintenanceLoad(COINS.NICKEL);
                acm.maintenanceLoad(COINS.QUARTER);
                acm.deposit(COINS.QUARTER);
                acm.deposit(COINS.QUARTER);
                acm.deposit(COINS.QUARTER);
                TESTER.assertTrue(acm.purchase(60));
                TESTER.assertArrayEquals([COINS.DIME, COINS.NICKEL], acm.returnCoins());
                TESTER.assertArrayEquals([COINS.QUARTER, COINS.QUARTER, COINS.QUARTER, COINS.QUARTER], acm.maintenanceGet());
            }
        }
    });


}(TEST_LOADER, TESTER, ACM, COINS));








