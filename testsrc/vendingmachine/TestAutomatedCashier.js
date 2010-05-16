CORE.require('vendingmachine/Currency');
CORE.require('vendingmachine/AutomatedCashier');

(function(testLoader){

    testLoader.addTests({
        TestAutomatedCashier : {
            testNickel : function(){
              TESTER.assertEquals(5, CURRENCY.NICKEL);
            },
            testNickel2 : function(){
              TESTER.assertEquals(4, CURRENCY.NICKEL);
            }
        }
    });


}(TEST_LOADER));








