var TEST_LOADER = function(TESTER){

    var tests = {}

    var loader = {
        loadTests : function(){
            // TODO use params
            load('TestAutomatedCashier.js');
            return this;
        },
        runTests : function(){
            TESTER.TestRunner(tests).test();
            return this;
        },
        addTests : function(moreTests){
            for (testName in moreTests) {
                tests[testName] = moreTests[testName];
            }
            return this;
        }
    };

    return loader;

}(TESTER);


