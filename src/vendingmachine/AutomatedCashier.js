var ACM = function(CURRENCY){

    var privateMakeAutomatedCashier = function(){

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
            coinReturn.each(function(coin){
                funds+=coin;
            });
            return (funds >= purchasePrice);
        };

        var getChangeDue = function(purchasePrice){
            var totalDeposited = coinReturn.reduce(function(coin, runningTotal){
                return coin + runningTotal;
            }, 0);
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

            buffer.each(function(coin){
                if (changeDue > 0 && coin <= changeDue){
                    changeDue -= coin;
                    coinReturn.push(coin);
                } else {
                    coins.push(coin);
                }
            });
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
            return privateMakeAutomatedCashier();
        }
    };

}(CURRENCY);