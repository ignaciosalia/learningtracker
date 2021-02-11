function palindrome(str) {
  let str1 = str.replace(/[/.,;)(:_-]/g,"");//remueve caracteres especiales
  let str2 = str1.replace(/\s/g,"").toLowerCase();//remueve los espacios
	//console.log(str2);
	let arr = str2.split("");//arreglo con los caracteres de lacadena original
	//console.log(arr);
  let jMenos = arr.length - 1;
  let maybeTrue = 0
  //console.log(jMenos);
  for(let i in arr){
    //console.log(arr[i] + " " + arr[jMenos]);
    if(arr[i] === arr[jMenos]){
    	maybeTrue++;
    }
    jMenos--;
  }
  //console.log(maybeTrue + " " + arr.length);
  return maybeTrue == arr.length  ? true : false;
}



console.log(palindrome("eye"));//should be true
console.log(palindrome("A man, a plan, a canal. Panama"));//should be true
console.log(palindrome("0_0 (: /-\ :) 0-0")); //should be true
console.log(palindrome("1 eye for of 1 eye.")); //should be false
console.log(palindrome("My age is 0, 0 si ega ym."));//should be true