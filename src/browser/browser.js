// encapsulates specifics of browser, primarily IO
(function(CORE){

    CORE.require = function(toImport){
        //nothing to do
    };
    CORE.out = function(output){
        document.write('<br>'+output+'</br>');
    };

    return CORE;
}(CORE));

CORE.out('some sort of browser');