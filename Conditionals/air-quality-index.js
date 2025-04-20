//Air Quality Index (AQI) program
let  aqi = 250;
let result ="";
if (aqi === 0 || aqi <= 50){
    result = "Good";
}else if (aqi === 51 || aqi <=100 ){
    result = "Moderate";
}else if (aqi === 101 || aqi <=150 ) {
    result = "Unhealthy (Sensitive Groups)";
}else if (aqi === 151 || aqi <=200 ) {
    result = "Unhealthy";
}else if (aqi === 201 || aqi <=300 ) {
    result = "Very Unhealthy";
}else{
    result = "Hazardous";
}
console.log(`The Air Quality Index its ${aqi},So is means ${result}`);
