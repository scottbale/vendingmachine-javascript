CORE.require('vendingmachine/Currency');
CORE.require('vendingmachine/AutomatedCashier');

(function(testLoader){

    testLoader.addTests({
        TestAutomatedCashier : {
            testCoinReturnIsEmpty : function(){
                var acm = ACM.makeAutomatedCashier();
                TESTER.assertEquals(0, acm.returnCoins().length);
            },
            testDepositOneCoinThenReturn : function(){
                var acm = ACM.makeAutomatedCashier();
                acm.deposit(CURRENCY.NICKEL);
                var coinsReturned = acm.returnCoins();
                TESTER.assertEquals(1, coinsReturned.length);
                TESTER.assertEquals(CURRENCY.NICKEL, coinsReturned[0]);
            },
            testDepositMultipleCoinsThenReturn : function(){
                var acm = ACM.makeAutomatedCashier();
                acm.deposit(CURRENCY.NICKEL);
                acm.deposit(CURRENCY.DIME);
                var coinsReturned = acm.returnCoins();
                TESTER.assertEquals(2, coinsReturned.length);
                TESTER.assertEquals(CURRENCY.NICKEL, coinsReturned[0]);
                TESTER.assertEquals(CURRENCY.DIME, coinsReturned[1]);
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
            }
        }
    });


}(TEST_LOADER));








