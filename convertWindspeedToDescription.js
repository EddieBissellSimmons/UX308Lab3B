//function that **converts** windspeed to a *description* using *miles* and *knots*

function convertWindspeedToDescription(miles, knots){
    let description;
    if (miles >= 0 && miles <= 1 && knots >= 0 && knots <= 1){
        description = "calm";
    }else if (miles >= 1 && miles <= 3 && knots >= 1 && knots <= 3){
        description = "light air";
    }else if (miles >= 4 && miles <= 7 && knots >= 4 && knots <= 6){
        description = "light breeze";
    }else if (miles >= 8 && miles <= 12 && knots >= 7 && knots <= 10){
        description = "gentle breeze";
    }else if (miles >= 13 && miles <= 18 && knots >= 11 && knots <= 16){
        description = "moderate breeze";
    }else if (miles >= 19 && miles <= 24 && knots >= 17 && knots <= 21){
        description = "fresh breeze";
    }else if (miles >= 25 && miles <= 31 && knots >= 22 && knots <= 27){
        description = "strong breeze";
    }else if (miles >= 32 && miles <= 38 && knots >= 28 && knots <= 33){
        description = "near gale";
    }else if (miles >= 39 && miles <= 46 && knots >= 34 && knots <= 40){
        description = "gale";
    }else if (miles >= 47 && miles <= 54 && knots >= 41 && knots <= 47){
        description = "severe gale";
    }else if (miles >= 55 && miles <= 63 && knots >= 48 && knots <= 55){
        description = "storm";
    }else if (miles >= 64 && miles <= 72 && knots >= 56 && knots <= 63){
        description = "violent storm";
    }else if (miles >= 72 && miles <= 83 && knots >= 64 && knots <= 71){
        description = "hurricane";
    }

    return description;
}

export {convertWindspeedToDescription}