var COINS = {
    NICKEL : 5,
    DIME : 10,
    QUARTER : 25,
    isCoin : function(cents){
        return [this.NICKEL, this.DIME, this.QUARTER].contains(cents);
    }
};