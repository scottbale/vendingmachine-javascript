// CORE module, abstracts environment-specifics
var CORE = function(){

    var namespaces = {};

    /*
     * blatantly ripped off from Douglas Crockford
     */
    var modifyLanguage = function(){
        Function.prototype.method = function (name, func) {
            if (!this.prototype[name]){
                this.prototype[name] = func;
                return this;
            }
        };

        Array.method('each', function(f, index){
            for (var i=0; i<this.length; i++){
                f(this[i], i);
            }
        });

        Array.method('reduce', function(f, value){
            for (var i=0; i<this.length; i++){
                value = f(this[i], value);
            }

            return value;
        });
    };

    modifyLanguage();

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