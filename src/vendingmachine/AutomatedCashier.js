var ACM = function(CURRENCY){

    var _makeAutomatedCashier = function(){

        var coinReturn = [];
        var coins = [];

        var doPurchase = function(purchasePrice){
            if (ifSufficientFunds(purchasePrice)){
                var changeDue = getChangeDue(purchasePrice);
                transferFunds();
                makeChange(changeDue);
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

        var getChangeDue = function(purchasePrice){
            // TODO reduce()
            var totalDeposited = 0;
            for (var i=0; i<coinReturn.length; i++){
                totalDeposited+=coinReturn[i];
            }
            return totalDeposited - purchasePrice;
        };

        var transferFunds = function(){
            coins = coins.concat(coinReturn);
            coinReturn = [];
        };

        var makeChange = function(changeDue){
            coins.sort(function(a,b){
                return b-a;
            });

            var buffer = coins.concat();
            coins = [];
            //TODO each()
            for (var i=0; i<buffer.length; i++){
                if (changeDue > 0 && buffer[i] <= changeDue){
                    changeDue -= buffer[i];
                    coinReturn.push(buffer[i]);
                } else {
                    coins.push(buffer[i]);
                }
            }
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