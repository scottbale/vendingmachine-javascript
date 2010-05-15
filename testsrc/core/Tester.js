var TESTER = {

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

        for (prop in test){
            if (prop.indexOf("test")>-1){
                testFunctions.push(test[prop]);
            }
        }

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
            print("\n----------------------------------------------------");
            print("\ntests:   " + testResults.ran );
            print("\nsuccess: " + testResults.success );
            print("\nfailure: " + testResults.failure );
            print("\nerror:   " + testResults.error );

            for(i=0;i < testResults.failure; i+=1){
                print("\n----------------------------------------------------");
                print("" + testResults.failedTests[i] );
                print("message: " + testResults.failedMsgs[i] );
            }            

            print("\n----------------------------------------------------\n\n");
        }


        return testRunner;
        
    },


    assertEquals : function(oneArg, otherArg){
        if (oneArg !== otherArg){
            throw {
                name : "assertEquals",
                message : "arg " + oneArg + " !== " + otherArg
            }
        }
    }

}