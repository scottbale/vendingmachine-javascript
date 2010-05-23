CORE.require('vendingmachine.Currency');

(function(testLoader){

    testLoader.addTests({
        TestCurrency : {
            testNickel : function(){
              TESTER.assertEquals(5, CURRENCY.NICKEL);
            },
            testDime : function(){
              TESTER.assertEquals(10, CURRENCY.DIME);
            },
            testQuarter : function(){
              TESTER.assertEquals(25, CURRENCY.QUARTER);
            }
        }
    });

}(TEST_LOADER));








