// Code your solution in this file!
const hq = 42;

function distanceFromHqInBlocks(block){
    
    if (block >= 42) {
        return block - hq;
    } else {
        return hq - block;
    }
}


function distanceFromHqInFeet(feet){

    if (feet >= 42) {
        return (feet-42)*264;
    } else {
        return (42-feet)*264;
    }
}

function distanceTravelledInFeet(dest1, dest2){
    
    if (dest1 > dest2) {
        return (dest1-dest2)*264;
    } else {
        return (dest2-dest1)*264;
    }
}

function calculatesFarePrice(start, destination) {
    distanceFromHqInFeet(start, destination);

    let distance = Math.abs(start - destination) * 264;

    if (distance <= 400) {
        return 0;
    }
    else if (distance >= 401 && distance <= 2000){
        return (distance - 400) * 0.02;
    }
    else if (distance >= 2001 && distance <= 2500){
        return 25;
    }
    else{
        return 'cannot travel that far';
    }
}
