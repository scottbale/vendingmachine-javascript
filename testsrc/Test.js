load('../src/Currency.js');
load('../src/AutomatedCashier.js');
load('Tester.js');

TESTER.TestRunner({

    testNickel : function(){
      TESTER.assertEquals(5, CURRENCY.NICKEL);
    },
    testNickel2 : function(){
      TESTER.assertEquals(4, CURRENCY.NICKEL);
    }


}).test();



