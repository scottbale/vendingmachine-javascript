var ACM = function(CURRENCY){

    var _makeAutomatedCashier = function(){

        var coinReturn = [];
        var coins = [];

        return {
            returnCoins : function(){
                var coinsToReturn = coinReturn;
                coinReturn = [];
                return coinsToReturn;
            },
            deposit : function(coin){
                coinReturn.push(coin);
            },
            maintenanceLoad : function(coin){
                coins.push(coin);
            },
            maintenanceGet : function(){
                return coins;
            }
        };
    };

    return {
        makeAutomatedCashier : function(){
            return _makeAutomatedCashier();
        }
    };

}(CURRENCY);