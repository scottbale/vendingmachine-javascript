var TESTER = function(CORE){

    var makeTestRunner = function(test){

        var testResults = {
            ran : 0,
            success : 0,
            failure : 0,
            error : 0,
            failedTests : [],
            failedMsgs : [],
            errorTests : [],
            errors : []
        };

        var runTestsRecursive = function(prefix, aTest){
            for (var prop in aTest){
                if (typeof aTest[prop] === 'function' && prop.indexOf("test")>-1){
                    attemptTest(prefix+prop, aTest[prop]);
                } else if (typeof aTest[prop] === 'object'){
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
                    testResults.errorTests.push(testName);
                    testResults.errors.push(e);
                }
            }
        };

        var printResults = function(){
            CORE.out("----------------------------------------------------");
            CORE.out("tests:   " + testResults.ran );
            CORE.out("success: " + testResults.success );
            CORE.out("failure: " + testResults.failure );
            CORE.out("error:   " + testResults.error );

            var i=0;
            for(i=0;i < testResults.failure; i+=1){
                if (i===0){
                    CORE.out("----------------------------------------------------");
                    CORE.out("FAILED");
                }
                CORE.out("----------------------------------------------------");
                CORE.out("" + testResults.failedTests[i] + " message: " + testResults.failedMsgs[i]);
            }
            for(i=0;i < testResults.error; i+=1){
                if (i===0){
                    CORE.out("----------------------------------------------------");
                    CORE.out("ERROR");
                }
                CORE.out("----------------------------------------------------");
                CORE.out("" + testResults.errorTests[i] + " error: " + testResults.errors[i]);
            }
            CORE.out("----------------------------------------------------\n\n");
        };

        return testRunner;
    };

    return {

        TestRunner : function(test){
            return makeTestRunner(test);
        },

        assertEquals : function(expected, actual) {
            if (expected !== actual) {
                throw {
                    name : "assertEquals",
                    message : "expected " + expected + " !== actual " + actual
                };
            }
        },

        assertTrue : function(booleanExpression){
            if (!booleanExpression){
                throw {
                    name : "assertTrue",
                    message : "boolean expression " + booleanExpression + " is false"
                };
            }
        },

        assertFalse : function(booleanExpression){
            if (booleanExpression){
                throw {
                    name : "assertFalse",
                    message : "boolean expression " + booleanExpression + " is true"
                };
            }
        },

        assertArrayEquals : function(expected, actual){
            try {
                this.assertEquals(expected.length, actual.length);
                for(var i=0; i<expected.length; i+=1){
                    this.assertEquals(expected[i], actual[i]);
                }
            } catch (e) {
                throw {
                    name : "assertArrayEquals",
                    message : "expected array " + expected + " !== actual " + actual + "\nnested exception: " + e.message
                };
            }

        }
    };

}(CORE);