var TESTER = function(CORE){

    var tester = {

        TestRunner : function(test){

            var testFunctions = [];
            var testResults = {
                ran : 0,
                success : 0,
                failure : 0,
                error : 0,
                failedTests : [],
                failedMsgs : []
            }


            var loadFunctions = function(test){
                for (prop in test){
                    if (typeof test[prop] == 'function'){
                        if (prop.indexOf("test")>-1){
                            testFunctions.push(test[prop]);
                        }
                    } else if (typeof test[prop] == 'object'){
                        loadFunctions(test[prop]);
                    }
                }
            };

            loadFunctions(test);


            var testRunner = {
                test : function(){
                    for(i=0;i < testFunctions.length; i+=1){
                        attemptTest(testFunctions[i]);
                    }
                    printResults();
                }
            };


            var attemptTest = function(testFunction){
                testResults.ran += 1;
                try {
                    testFunction();
                    testResults.success += 1;
                } catch (e) {
                    if (e.name.indexOf("assert") > -1){
                        testResults.failure += 1;
                        testResults.failedTests.push(testFunction);
                        testResults.failedMsgs.push(e.message);
                    } else {
                        testResults.error += 1;
                    }
                }
            }

            var printResults = function(){
                CORE.out("\n----------------------------------------------------");
                CORE.out("\ntests:   " + testResults.ran );
                CORE.out("\nsuccess: " + testResults.success );
                CORE.out("\nfailure: " + testResults.failure );
                CORE.out("\nerror:   " + testResults.error );

                for(i=0;i < testResults.failure; i+=1){
                    CORE.out("\n----------------------------------------------------");
                    CORE.out("" + testResults.failedTests[i] );
                    CORE.out("message: " + testResults.failedMsgs[i] );
                }

                CORE.out("\n----------------------------------------------------\n\n");
            }

            return testRunner;
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