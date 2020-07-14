
/**This is for single output. we can use it if we need several results but it will take this action every single time. which means we have to write var inch's value and then divide this value with 12 or something eles. */
var inch = 156;
var feet = inch / 12;
console.log(feet);
console.log(feet);


/**we will use this so that we dont have to use multiple varient */
function inchToFeet(inch){
    var feet = inch / 12;
    return feet;
}
var nanaFeet = inchToFeet(256);
console.log(nanaFeet);
var naniFeet = inchToFeet(600);
console.log(naniFeet);
var dadaFeet = inchToFeet(300);
console.log(dadaFeet);
var dadiFeet = inchToFeet(900);
console.log(dadiFeet);