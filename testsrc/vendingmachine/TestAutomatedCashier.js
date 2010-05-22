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
            }
        }
    });


}(TEST_LOADER));








