function convertToRoman(num) {

let strNum = num.toString();
let miles = strNum.split("");
let res ="";
//console.log(miles.length);
/*for(let i in miles){
		console.log(i);
    if(i == 3){
    	if(miles[i] < 4){
      let mil = miles[i];
      do{
      	res += "M";
        mil--;
      }while(mil > 0);
      	
      }else if(miles[i] === 4){
      	res += "MV";
      }else if(miles[i] === 5){
      	res += "V";
      }else if(miles[i] > 5 && miles[i] < 9){
      	res += 'V';
        let mil = miles[i];
      	do{
      		res += "M";
        	mil--;
      	}while(mil > 0);
      }else if(miles[i] == 9){
      	res += "CM";
      }
    }else if(i == 2){
    	if(miles[i] < 4){
      let mil = miles[i];
      do{
      	res += "C";
        mil--;
      }while(mil > 0)
      	
      }else if(miles[i] === 4){
      	res += "CD";
      }else if(miles[i] === 5){
      	res += "D";
      }else if(miles[i] > 5 && miles[i] < 9){
      	res += 'D';
        let mil = miles[i] - 5;
      	do{
      		res += "C";
        	mil--;
      	}while(mil > 0)
      }else if(miles[i] == 9){
      	res += "CM";
      }
    }else if(i == 1){
    	if(miles[i] < 4){
      let mil = miles[i];
      do{
      	res += "X";
        mil--;
      }while(mil > 0)
      	
      }else if(miles[i] === 4){
      	res += "XL";
      }else if(miles[i] === 5){
      	res += "L";
      }else if(miles[i] > 5 && miles[i] < 9){
      	res += 'L';
        let mil = miles[i] - 5;
      	do{
      		res += "X";
        	mil--;
      	}while(mil > 0)
      }else if(miles[i] == 9){
      	res += "XC";
      }
    }else if(i == 0){
    	if(miles[i] < 4){
      let mil = miles[i];
      do{
      	res += "I";
        mil--;
      }while(mil > 0)
      	
      }else if(miles[i] === 4){
      	res += "IV";
      }else if(miles[i] === 5){
      	res += "V";
      }else if(miles[i] > 5 && miles[i] < 9){
      	res += 'V';
        let mil = miles[i] - 5;
      	do{
      		res += "I";
        	mil--;
      	}while(mil > 0)
      }else if(miles[i] == 9){
      	res += "IX";
      }
    }
}*/
for(let i = miles.length; i > 0; i--){
	console.log(i + " " + miles[miles.length - i]);
  console.log(res);
    if(i == 4){
    	if(miles[miles.length - i] < 4 && miles[miles.length - i] > 0){
      let mil = miles[miles.length - i];
      do{
      	res += "M";
        mil--;
      }while(mil > 0)
      	
      }else if(miles[miles.length - i] === 4){
      	res += "MV";
      }else if(miles[miles.length - i] === 5){
      	res += "V";
      }else if(miles[miles.length - i] > 5 && miles[i] < 9){
      	res += 'V';
        let mil = miles[miles.length - i];
      	do{
      		res += "M";
        	mil--;
      	}while(mil > 0);
      }else if(miles[miles.length - i] == 9){
      	res += "CM";
      }
    }else if(i == 3){
    	if(miles[miles.length - i] < 4 && miles[miles.length - i] > 0){
      let mil = miles[miles.length - i];
      do{
      	res += "C";
        mil--;
      }while(mil > 0)
      	
      }else if(miles[miles.length - i] == 4){
      	res += "CD";
      }else if(miles[miles.length - i] == 5){
      	res += "D";
      }      else if(miles[i] === 5){
      	res += "D";
      }else if(miles[miles.length - i] > 5 && miles[miles.length - i] < 9){
      	res += 'D';
        let mil = miles[miles.length - i] - 5;
      	do{
      		res += "C";
        	mil--;
      	}while(mil > 0)
      }else if(miles[miles.length - i] == 9){
      	res += "CM";
      }
    }else if(i == 2){
    	if(miles[miles.length - i] < 4 && miles[miles.length - i] > 0){
      let mil = miles[miles.length - i];
      do{
      	res += "X";
        mil--;
      }while(mil > 0);
      	
      }else if(miles[miles.length - i] == 4){
      	res += "XL";
      }else if(miles[miles.length - i] == 5){
      	res += "L";
      }else if(miles[miles.length - i] > 5 && miles[miles.length - i] < 9){
      	res += 'L';
        let mil = miles[miles.length - i] - 5;
      	do{
      		res += "X";
        	mil--;
      	}while(mil > 0)
      }else if(miles[miles.length - i] == 9){
      	res += "XC";
      }
    }else if(i == 1){
    console.log(miles[miles.length - i]);
    	if(miles[miles.length - i] < 4 && miles[miles.length - i] > 0){
      let mil = miles[miles.length - i];
      do{
      	res += "I";
        mil--;
      }while(mil > 0);
      	
      }else if(miles[miles.length - i] == 4){
      	res += "IV";
      }else if(miles[miles.length - i] == 5){
      	res += "V";
      }else if(miles[miles.length - i] > 5 && miles[miles.length - i] < 9){
      console.log(miles[miles.length - i]);
      	res += 'V';
        let mil = miles[miles.length - i] - 5;
      	do{
      		res += "I";
        	mil--;
      	}while(mil > 0)
      }else if(miles[miles.length - i] == 9 && miles[miles.length - i] != 0){
      	res += "IX";
      }
    }
}
console.log(res);
 
 return res ;
}
//console.log(convertToRoman(2));
console.log(convertToRoman(501));
//console.log(convertToRoman(5));
//console.log(convertToRoman(36));
//console.log(convertToRoman(29));
//console.log(convertToRoman(798));
//console.log(convertToRoman(3999));
