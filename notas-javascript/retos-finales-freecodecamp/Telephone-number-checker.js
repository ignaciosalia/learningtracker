function telephoneCheck(str) {

	let start1 = /^1/;
  let start5 = /^5/;
  let startSlash = /^-/;
	if(startSlash.test(str)){
  	//console.log("empieza con mamadas");
    return false;
  }
	let arr = str.split("");
  let str1 = str.replace(/(-)/g,"");
  let str2 = str1.replace(/\s/g,"");
 
  let parentesis = 0;
  
   str2 = str2.replace(/[\])}[{(]/g, '');
  //console.log(str2);
  if(start1.test(str2) || start5.test(str2)){
  	//console.log("es valido");
  for(let i in arr){
  	if(arr[i] == ")" || arr[i] == "("){
    	parentesis++;
    }
  }
 	// console.log(parentesis);
  if(parentesis == 0 || parentesis == 2){
  	
  	//console.log(str2);
		var myTest = /^([0-9]){9,11}$/;
 		// var myTest2 = /\([A-Z]{2}\)/;
 		// console.log(myTest2.test(str));
  	return(myTest.test(str2));
  }else{
  	return false;
  }
  }else{
  	return false;
  }
 
}
console.log(telephoneCheck("-1 (757) 622-7382"));//false
console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("(555)555-5555"));

console.log(telephoneCheck("1 555-555-5555")); //true
console.log(telephoneCheck("555-555-5555")); //true
console.log(telephoneCheck("1(555)555-5555")); //true
console.log(telephoneCheck("123**&!!asdf#")); //false
console.log(telephoneCheck("55555555"));      //false
console.log(telephoneCheck("1 555)555-5555"));//false*/