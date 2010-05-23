CORE.require('core.Tester');

var TEST_LOADER = function(TESTER){

    var tests = {};

    return {
        runTests : function(){
            TESTER.TestRunner(tests).test();
            return this;
        },
        addTests : function(moreTests){
            for (var testName in moreTests) {
                if (moreTests.hasOwnProperty(testName)){
                    tests[testName] = moreTests[testName];
                }
            }
            return this;
        }
    };

}(TESTER);