function checkCashRegister(price, cash, cid) {
   
 var denom = [
  [ "PENNY", 0.01 ],
  [ "NICKEL", 0.05 ],
  [ "DIME", 0.1 ],
  [ "QUARTER", 0.25 ]  ,
  ["ONE", 1.0]  ,
  ["FIVE", 5.0],
  [ "TEN", 10.0 ],
  [ "TWENTY", 20.0 ],
  [ "ONE HUNDRED", 100.0 ]
];
   var change = {status: "", change: []};
   let dineroCaja = 0, diferencia = cash - price;
   let vuelto = 0;
   for(let i in cid){
    dineroCaja += cid[i][1];
  }
   diferencia = Math.round(diferencia * 100) / 100;
  
   dineroCaja = Math.round(dineroCaja * 100)/100;
  
  if(dineroCaja < (cash - price)){
  	change.status = "INSUFFICIENT_FUNDS";
    change.change = [];
    return change
  }else{ 
  	 for(let i = cid.length - 1; i >= 0; i--){
     dineroCaja -= cid[i][1];
     //dineroCaja = Math.round(dineroCaja * 100) /100;
      if(diferencia >= denom[i][1] && cid[i][1] != 0){ // se necita un arreglo con los valores de los billetes que compara la denominaci[on con lo que se tiene en la caja]
  			let div20 = cid[i][1] / denom[i][1]; 
        let val = 0;
        while(cid[i][1] > 0 && diferencia >= denom[i][1]){
        	val += denom[i][1];
          diferencia -= denom[i][1];
          cid[i][1] -= denom[i][1];
          diferencia = Math.round(diferencia * 100) / 100;
        }
        vuelto += val;
        cid[i][1] = Math.round(val * 100) / 100;
    		change.status = "OPEN";
    		change.change.push(cid[i]);
  		} 
  	}
  }
 
 console.log(dineroCaja);
  if(Math.round(vuelto) != Math.round(cash - price)){
  	change.status = "INSUFFICIENT_FUNDS";
    change.change = [];
    return change
  }
  if(dineroCaja == 0){
   change.status = "CLOSED";
  	for(let i in cid){
    	if(cid[i][1] == 0){
      	console.log(cid[i]);
        change.change.push(cid[i]);
      }
    	
    }
    return change;
  }
  
  //queda resolver el caso cuando el valor de la caja es igual al del cambia y ya no queda m[as] dinero en caja
  
   
  return change;
 }
 
 console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
 //console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
 console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
