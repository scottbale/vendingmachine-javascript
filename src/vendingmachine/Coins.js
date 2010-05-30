var COINS = {
    NICKEL : 5,
    DIME : 10,
    QUARTER : 25,
    isCoin : function(cents){
        return [COINS.NICKEL, COINS.DIME, COINS.QUARTER].contains(cents);
    }
};