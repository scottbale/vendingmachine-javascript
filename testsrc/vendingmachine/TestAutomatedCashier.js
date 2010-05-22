CORE.require('vendingmachine/Currency');
CORE.require('vendingmachine/AutomatedCashier');

(function(testLoader){

    testLoader.addTests({
        TestAutomatedCashier : {
            testBogusFail : function(){
              TESTER.assertEquals(4, CURRENCY.NICKEL);
            },
            testCoinReturnIsEmpty : function(){
                var acm = ACM.makeAutomatedCashier();
                TESTER.assertEquals(acm.returnCoins().length(), 0);
            }
        }
    });


}(TEST_LOADER));








