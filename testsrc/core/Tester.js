var TESTER = function(CORE){

    var makeTestRunner = function(test){

        var testResults = {
            ran : 0,
            success : 0,
            failure : 0,
            error : 0,
            failedTests : [],
            failedMsgs : []
        };

        var runTestsRecursive = function(prefix, aTest){
            for (prop in aTest){
                if (typeof aTest[prop] == 'function' && prop.indexOf("test")>-1){
                    attemptTest(prefix+prop, aTest[prop]);
                } else if (typeof aTest[prop] == 'object'){
                    runTestsRecursive(prop+".", aTest[prop]);
                }
            }
        };

        var testRunner = {
            test : function(){
                runTestsRecursive("",test);
                printResults();
            }
        };


        var attemptTest = function(testName, testFunction){
            testResults.ran += 1;
            try {
                testFunction();
                testResults.success += 1;
            } catch (e) {
                if (e.name.indexOf("assert") > -1){
                    testResults.failure += 1;
                    testResults.failedTests.push(testName);
                    testResults.failedMsgs.push(e.message);
                } else {
                    testResults.error += 1;
                }
            }
        };

        var printResults = function(){
            CORE.out("\n----------------------------------------------------");
            CORE.out("\ntests:   " + testResults.ran );
            CORE.out("\nsuccess: " + testResults.success );
            CORE.out("\nfailure: " + testResults.failure );
            CORE.out("\nerror:   " + testResults.error );

            for(i=0;i < testResults.failure; i+=1){
                CORE.out("\n----------------------------------------------------");
                CORE.out("\n" + testResults.failedTests[i] );
                CORE.out("message: " + testResults.failedMsgs[i] );
            }

            CORE.out("\n----------------------------------------------------\n\n");
        };

        return testRunner;
    }

    var tester = {

        TestRunner : function(test){
            return makeTestRunner(test);
        },

        assertEquals : function(oneArg, otherArg) {
            if (oneArg !== otherArg) {
                throw {
                    name : "assertEquals",
                    message : "arg " + oneArg + " !== " + otherArg
                }
            }
        }
    }

    return tester;

}(CORE);