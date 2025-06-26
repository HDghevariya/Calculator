function sum(){
    let no1 =  parseInt(document.getElementById('fno').value);
    let no2 =  parseInt(document.getElementById('sno').value);
    let sum1 = no1 + no2;
    document.getElementById("display").value = sum1;
 }
 
 function sub(){
   // parseFloat - point ma value joti hoy tyare
   // parseInt - string num ne int ma convert kare
    let no1 =  parseInt(document.getElementById('fno').value);
    let no2 =  parseInt(document.getElementById('sno').value);
    let sum1 = no1 - no2;
    document.getElementById("display").value = sum1;
 }
 
 function multi(){
    let no1 =  parseInt(document.getElementById('fno').value);
    let no2 =  parseInt(document.getElementById('sno').value);
    let sum1 = no1 * no2;
    document.getElementById("display").value = sum1;
 }
 
 function div(){
    let no1 =  parseInt(document.getElementById('fno').value);
    let no2 =  parseInt(document.getElementById('sno').value);
    let sum1 = no1 / no2;
    document.getElementById("display").value = sum1;
 }