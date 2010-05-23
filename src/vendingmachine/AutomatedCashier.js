var ACM = function(CURRENCY){

    var _makeAutomatedCashier = function(){

        var coinReturn = [];
        var coins = [];

        var doPurchase = function(purchasePrice){
            if (ifSufficientFunds(purchasePrice)){
                transferFunds();
                return true;
            }
            return false;
        };

        var ifSufficientFunds = function(purchasePrice){
            var funds = 0;
            // TODO each()
            for (var i=0; i<coinReturn.length; i++){
                funds+=coinReturn[i];
            }
            return (funds >= purchasePrice);
        };

        var transferFunds = function(){
            coins = coins.concat(coinReturn);
            coinReturn = [];
        };


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
            },
            purchase : function(purchasePriceInCents){
                return doPurchase(purchasePriceInCents);
            }
        };
    };

    return {
        makeAutomatedCashier : function(){
            return _makeAutomatedCashier();
        }
    };

}(CURRENCY);