function checkCashRegister(price, cash, cid) {
    var denom = [
  [ "ONE HUNDRED", 100.0 ],
  [ "TWENTY", 20.0 ],
  [ "TEN", 10.0 ]  ,
  ["FIVE", 5.0]  ,
  ["ONE", 1.0],
  [ "QUARTER", 0.25 ],
  [ "DIME", 0.1 ],
  [ "NICKEL", 0.05 ],
  [ "PENNY", 0.01 ]
];
   var change = {status: "", change: []};
   let dineroCaja = 0, diferencia = cash - price;
   for(let i in cid){
    console.log(denom[i][1])
    dineroCaja += cid[i][1];
  }
   diferencia = Math.round(diferencia * 100) / 100;
   console.log(diferencia);
   dineroCaja = Math.round(dineroCaja * 100)/100;
  console.log(dineroCaja);
  if(dineroCaja < (cash - price)){
  	change.status = "INSUFFICIENT_FUNDS";
    return change
  }
  for(let i = cid.length - 1; i > 0; i--){
  	console.log(cid[i][1]);
    console.log(denom[i][1]);
     /* if(diferencia >= denom[i][1] && cid[i][1] != 0){ // se necita un arreglo con los valores de los billetes que compara la denominaci[on con lo que se tiene en la caja]
      console.log(cid[i][1] +"*");
      console.log(denom[i][1] +"denom");
  			let div20 = cid[i][1] / denom[i][1]; 
        let val = 0
  			do{
    			val += 0.25;
   			   div20--;
    		}while(div20 > 0);
    
    		change.status = "OPEN";
    		change.change.push(cid[i]);
    		diferencia = diferencia - val;
       
    		console.log(change);
  		}*/
  }
   return change;
 }
 
 console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
 //console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
 console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
