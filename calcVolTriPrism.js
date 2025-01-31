//function that **calculates** the *volume* of an equilateral triangular prism using the length of one side of the triangle and the height of the prism

function calcVolTriPrism(length,height){
    let volume = (Math.sqrt(3)/4)*(length*length)*height;
    return volume;
}

export {calcVolTriPrism}