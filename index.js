// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    let blockValue = Math.abs(someValue-42);
    return blockValue;
}

function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(someValue1, someValue2) {
    return Math.abs((distanceFromHqInFeet(someValue1)-distanceFromHqInFeet(someValue2)));
}

function calculatesFarePrice(someValue1, someValue2) {
    let result = 0;
    if (distanceTravelledInFeet(someValue1, someValue2)>400 && distanceTravelledInFeet(someValue1, someValue2) <=2000) {
        return Math.abs((distanceTravelledInFeet(someValue1, someValue2) -400 )* 0.02);
    } else if (distanceTravelledInFeet(someValue1, someValue2) > 2000 && distanceTravelledInFeet(someValue1, someValue2) <=2500){
        result = 25;
        return result;
    } else if (distanceTravelledInFeet(someValue1, someValue2) <= 400) {
        return result;
    } else {
        return "cannot travel that far"
    }
}