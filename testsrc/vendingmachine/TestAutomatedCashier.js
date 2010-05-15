load('../src/Currency.js');
load('../src/AutomatedCashier.js');

var TEST_AUTOMATED_CASHIER = function(){

    var module = {
        tests : {
            testNickel : function(){
              TESTER.assertEquals(5, CURRENCY.NICKEL);
            },
            testNickel2 : function(){
              TESTER.assertEquals(4, CURRENCY.NICKEL);
            }
        }
    };
    
    TEST_LOADER.addTests(module.tests);

    return module;

}(TEST_LOADER);








