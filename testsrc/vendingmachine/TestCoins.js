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
            },
            testIsCoin : function(){
                TESTER.assertTrue(COINS.isCoin(5));
                TESTER.assertFalse(COINS.isCoin(3));
            }
        }
    });

}(TEST_LOADER));