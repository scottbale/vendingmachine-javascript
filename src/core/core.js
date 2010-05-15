// CORE module, abstracts environment-specifics
var CORE = function(){

    var namespaces = {};

    var core = {

        out : function(output){
            //implemented by env
        },

        require : function(toImport){
            core.out("'require' not implemented!");
        },

        namespace : function(namespace){

        }
    };

    return core;
}();