var ACM = function(CURRENCY){

    var _makeAutomatedCashier = function(){

        

        var cashier = {
            returnCoins : function(){
                return [];
            }
        };


        return cashier;
    };




    var module = {
        makeAutomatedCashier : function(){
            return _makeAutomatedCashier();
        }
    };


    return module;

}(CURRENCY);