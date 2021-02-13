//el abecedario en caso uppercase comienza en 65 = A
//y la letra N es el 78,
//para el cifrado ROT13 mapea el caracter 65 = al 78 y viceversa
function rot13(str) {
	let arr = str.split(" ");
  let subArr = [];
  str = "";
  
  for(let i in arr){
  	subArr = arr[i].split('');
   // console.log(subArr);
    for(let j = 0; j < subArr.length; j++){
    	//console.log(subArr[j].charCodeAt(0));
      if(subArr[j].charCodeAt(0) < 65){
      	str += subArr[j];
      }else if(subArr[j].charCodeAt(0) >= 78){
      	str += String.fromCharCode(subArr[j].charCodeAt(0) - 13);
       // console.log(str);
      }else if(subArr[j].charCodeAt(0) < 78){
      	str += String.fromCharCode(subArr[j].charCodeAt(0) + 13);
        //console.log(str);
      }
    }
    str += " ";
  }
  
  
  return str.slice(0, -1);
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));