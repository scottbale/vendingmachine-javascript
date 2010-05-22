var ACM = function(CURRENCY){

    var _makeAutomatedCashier = function(){

        var coinReturn = [];

        var cashier = {
            returnCoins : function(){
                var coinsToReturn = coinReturn;
                coinReturn = [];
                return coinsToReturn;
            },
            deposit : function(coin){
                coinReturn.push(coin);
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