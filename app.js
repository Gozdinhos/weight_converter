var pounds = document.getElementById("pound");
var grams= document.getElementById("gram");
var kilograms = document.getElementById("kilogram");
var ounces = document.getElementById("ounce");
var toKg = 0;
var toPound = 0;
var toOunce = 0;
var toGr = 0;
var toKgm = 0;
var toGrm = 0;
var toOuncem = 0;
var toGrs = 0;
var toPounds = 0;
var toOunces = 0;
var toGrk = 0;
var toPoundk = 0;
var toKgk = 0;




function grToall(gram) {
  console.log("fonksiyonuna girildi.");
  if (gram != "")
  {
     toKg = (parseFloat(gram) * (0.001)).toString();
     toPound = (parseFloat(gram)* (0.002205)).toString();
     toOunce = (parseFloat(gram)* (0.03527396195)).toString();

     kilograms.value = toKg;
     pounds.value = toPound;
     ounces.value = toOunce;
     console.log("gram is   " + toKg);
      console.log("Pound is   " + toPound);
       console.log("Ounce is   " + toOunce);
  } else {
          kilograms.value = "";
          pounds.value =  "";
          ounces.value =  "";
        }
}


function poundToall (pound) {
  console.log("fonksiyonuna girildi.");
  if (pound != "") {
     toKgm = (parseFloat(pound * (0.453592))).toString();
     toGrm = (parseFloat(pound * (453.592))).toString();
     toOuncem = (parseFloat(pound * (16))).toString();

     kilograms.value = toKgm;
     grams.value = toGrm;
     ounces.value = toOuncem;
} else {
  kilograms.value = "";
  grams.value = "";
  ounces.value =  "";
}}

function kgToall (kilogram) {
  console.log("fonksiyonuna girildi.");
  if (kilogram != "") {
     toGrs = (parseFloat(kilogram * (1000))).toString();
     toPounds = (parseFloat(kilogram * (2.20462))).toString();
     toOunces = (parseFloat(kilogram * (35.274))).toString();

     pounds.value = toPounds;
     grams.value = toGrs;
     ounces.value = toOunces;

} else {
  pounds.value = "";
  grams.value = "";
  ounces.value =  "";
}}

function ounceToall (ounce) {
  console.log("fonksiyonuna girildi.");
  if (ounce != "") {
     toGrk = (parseFloat(ounce * (28.3495))).toString();
     toPoundk = (parseFloat(ounce * (0.0625))).toString();
     toKgk = (parseFloat(ounce * (0.0283495))).toString();

     pounds.value = toPoundk;
     grams.value = toGrk;
     kilograms.value = toKgk;

} else {
  pounds.value = "";
  grams.value = "";
  kilograms.value = "";
}}

function main() {

  gram.addEventListener('input',function() {
    console.log((grams.value));
      //console.log((grams.value).toString());
    //console.log(parseFloat(grams.value));
    grToall(grams.value);
  })

  pound.addEventListener('input',function() {
  poundToall(pounds.value);
  })



  kilogram.addEventListener('input',function() {

  kgToall(kilograms.value);
  })

  ounce.addEventListener('input',function() {

  ounceToall(ounces.value);
  })
}

main();
