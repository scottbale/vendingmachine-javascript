// encapsulates specifics of Rhino engine, primarily IO
load('src/core/core.js');

(function(CORE){

//    var dotToSlash = function(toImport){
//        toImport.replace(/\./g, '/');
//    }

    CORE.require = function(toImport){
        try {
            load('src/'+toImport+'.js');
        } catch (e){
            load('testsrc/'+toImport+'.js');
        }
    };
    CORE.out = function(output){
        print(output);
    };

    return CORE;
})(CORE);

CORE.out('\nrhino engine detected ' + arguments.length + ' args');

for (i in arguments) {
    CORE.out('\narg['+i+'] ' + arguments[i]);
}
CORE.out('\n\n');


for (i in arguments) {
    CORE.out('\nrhino attempting to load arg['+i+'] ' + arguments[i] + '\n');
    CORE.require(arguments[i]);
}
CORE.out('\n\n');
