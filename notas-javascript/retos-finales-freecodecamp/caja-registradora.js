function checkCashRegister(price, cash, cid) {
    var change = {status: "", change: []};
   let dineroCaja = 0;
   let diferencia = cash - price;
   let diferenciaR = diferencia.toFixed(2);
   let losVeintes = 0;
   let losDiez = 0;
   
   console.log(diferenciaR);
   for(let i in cid){
     dineroCaja += cid[i][1];
   }
   if(diferenciaR >  dineroCaja){
       change.status= "INSUFFICIENT_FUNDS";
     change.change= [];
     //console.log(change);
     return change;
   }else {
       change.status = "OPEN";
     //console.log(diferenciaR);
       if(diferencia >= 20 && cid[7][1] != 0){
       let div20 = cid[7][1] / 20; 
       do{
         losVeintes += 20;
       div20--;
     }while(div20 > 0);
     
     change.status = "OPEN";
     change.change.push(cid[7]);
    
     diferenciaR = diferenciaR - losVeintes;
     //console.log(change);
     
   }
   if(diferenciaR > 10 && cid[6][1] != 0){
    
       let div10 = cid[6][1] / 10;
     let losDiez = 0;
     
     do{
         losDiez += 10;
         div10--;
     }while(div10 > 0);
     //console.log(cid[6]);
     change.change.push(cid[6]);
     //console.log(change);
    // cid[6][1] = cid[6][1] - losDiez;
     diferenciaR = diferenciaR - losDiez;
    //console.log(diferenciaR + "*");
     //console.log(change);
   }
   if(diferenciaR >= 5 && cid[5][1] > 0){
       let div5 = cid[5][1] / 10;
     let losCinco = 0;
     
     while(div5 > 0 &&  Math.floor(diferenciaR) > 5){
         losCinco += 5;
       diferenciaR -=5;
         div5--;
     }
     cid[5][1] = losCinco;
     //console.log(cid[5]);
     change.change.push(cid[5]);
     //console.log(change);
    // cid[6][1] = cid[6][1] - losDiez;
     //console.log(diferenciaR + "*");
     //console.log(change);
   }
   if(diferenciaR >= 1 && cid[4][1] > 0){
       let div1 = cid[4][1] / 1;
     let losUno = 0;
     
     while(div1 > 0 && losUno < Math.floor(diferenciaR)){
         losUno += 1;
       diferenciaR -= 1;
         div1--;
     }
     cid[4][1] = losUno;
     //console.log(cid[4]);
     change.change.push(cid[4]);
     //console.log(change);
    // cid[6][1] = cid[6][1] - losDiez;
     //diferencia = diferencia - losDiez;
     //console.log(diferenciaR + "**");
     //console.log(change);
   }
   if(diferenciaR >= 0.25 && cid[3][1] > 0){
       let div25 = cid[3][1] / 0.25;
     let losCuarto = 0;
     let resta = 0;
     resta = diferenciaR;
     console.log(diferenciaR - 0.25);
     while(div25 != 0 && losCuarto < resta){
         losCuarto += 0.25;
       diferenciaR -= 0.25;
         div25--;
     }
     cid[3][1] = losCuarto;
    // console.log(cid[3]);
     change.change.push(cid[3]);
     //console.log(change);
    // cid[6][1] = cid[6][1] - losDiez;
     //diferencia = diferencia - losDiez;
     console.log(diferenciaR + "**");
     //console.log(change);
   }
    if(diferenciaR >= 0.1 && cid[2][1] > 0){
       let div25 = cid[2][1] / 0.1;
     let losCuarto = 0;
     
     while(div25 > 0 && losCuarto < diferenciaR){
         losCuarto += 0.1;
       diferenciaR -= 0.1;
         div25--;
     }
     cid[2][1] = losCuarto;
     change.change.push(cid[2]);
   } if(diferenciaR >= 0.05 && cid[1][1] > 0){
       let div25 = cid[1][1] / 0.05;
     let losCuarto = 0;
     
     while(div25 > 0 && losCuarto < diferenciaR){
         losCuarto += 0.05;
       diferenciaR -= 0.05;
         div25--;
     }
     cid[1][1] = losCuarto;
     //console.log(cid[1]);
     change.change.push(cid[1]);
     //console.log(change);
    // cid[6][1] = cid[6][1] - losDiez;
     //diferencia = diferencia - losDiez;
     //console.log(diferenciaR + "**");
     //console.log(change);
   }
   if(diferenciaR >= 0.01 && cid[0][1] > 0){
       let div25 = cid[0][1] / 0.01;
     let losCuarto = 0;
     
     while(div25 > 0 && losCuarto < diferenciaR){
         losCuarto += 0.01;
       diferenciaR -= 0.01;
         div25--;
     }
     cid[0][1] = losCuarto;
    // console.log(cid[0]);
     change.change.push(cid[0]);
    // console.log(change);
    // cid[6][1] = cid[6][1] - losDiez;
     //diferencia = diferencia - losDiez;
     //console.log(diferenciaR + "**");
     //console.log(change);
   }
     
       diferencia--;
   } 
   return change;
 }
 
 console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
 //console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
 console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));