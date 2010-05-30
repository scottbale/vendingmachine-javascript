CORE.require('vendingmachine.Coins');

(function(testLoader){

    testLoader.addTests({
        TestCoins : {
            testNickel : function(){
              TESTER.assertEquals(5, COINS.NICKEL);
            },
            testDime : function(){
              TESTER.assertEquals(10, COINS.DIME);
            },
            testQuarter : function(){
              TESTER.assertEquals(25, COINS.QUARTER);
            }
        }
    });

}(TEST_LOADER));