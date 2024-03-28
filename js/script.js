//Raccolta dati
let userKm = prompt("Ciao! Quanti Km devi percorrere?"); // string
if (userKm < 0 || userKm.length === 0) {
    userKm = prompt("Hai inserito un valore non valido, quanti Km devi percorrere??"); // string
}
let userAge = prompt("Quanti anni hai?"); // string
if (userAge < 0 || userAge.length === 0) {
    userAge = prompt("Hai inserito un valore non valido, quanti anni hai?"); // string
}
const systemKM = 0.21; //number
userAge = parseInt(userAge);// number
userKm = parseInt(userKm);// number

//calcolo prezzo
let userPrize = userKm*systemKM; //number
let userDiscount = 0; //number
let prize = userPrize;
let userDiscountNum = 0;

if(userAge<18){
    userDiscount=userPrize*0.20;
    userDiscountNum = 20;
}else if (userAge>65){
    userDiscount=userPrize*0.40;
    userDiscountNum = 40;
}else{
    userDiscount=0;
}

userPrize= userPrize-userDiscount;
userPrize=userPrize*100;
userPrize=Math.round(userPrize);
userPrize=userPrize/100;
userDiscount=userDiscount*100;
userDiscount=Math.round(userDiscount);
userDiscount=userDiscount/100;

//verifica dati
console.log(userKm, typeof userKm,);
console.log(userAge, typeof userAge,);
console.log(systemKM, typeof systemKM,);
console.log(userPrize, typeof userPrize,);
console.log(userDiscount, typeof userDiscount,);
//stampa risultato
document.getElementById("km").innerHTML = userKm;
document.getElementById("prize").innerHTML = prize;
document.getElementById("discountnumber").innerHTML = userDiscountNum;
document.getElementById("discountprize").innerHTML = userDiscount;
document.getElementById("userprize").innerHTML = userPrize; 