// encapsulates specifics of Rhino engine, primarily IO
load('src/core/core.js');

(function(CORE){

    var dotToSlash = function(toImport){
        // replace JDK String with JS String
        return new String(toImport).replace(/\./g, '/');
    };

    CORE.require = function(toImport){
        try {
            load('src/'+dotToSlash(toImport)+'.js');
        } catch (e){
            load('testsrc/'+dotToSlash(toImport)+'.js');
        }
    };
    CORE.out = function(output){
        print(output);
    };

    return CORE;
})(CORE);

CORE.out('\nrhino engine detected ' + arguments.length + ' args');

for (i in arguments) {
    if (arguments.hasOwnProperty(i)){
        CORE.out('\nrhino attempting to load arg['+i+'] ' + arguments[i] );
        CORE.require(arguments[i]);
    }
}
CORE.out('\n\n');
