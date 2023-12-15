console.log("javascript regular expression")
 
const str1 = "greatest of all time";
const str2 = "goats";
const str3 = `ronaldo is the 
goats`;

const regexp1 = /l/;
const result1 = regexp1.test(str1);//check if str1 contains letter 'l'
console.log(result1);


const regexp2 = /L/i;
const result2 = regexp2.test(str1);//check if str1 contains letter 'l'and performs case-insenstive search
console.log(result2);

const regexp3 = /al/;
const result3 = regexp3.test(str1);//check if str1 contains letter 'lg'
console.log(result3);


//[] - represent range

const regexp4 = /[ga]l/;
const result4 = regexp4.test(str1);//check if str1 contains letter 'g' 'a' beafoe 'l'
console.log(result4);

const regexp5 = /[a-z]l/i;
const result5 = regexp5.test(str1);//check if str1 contains any letters in between 'a' 'z' before 'a' represent case insensitive search
console.log(result5);


const regexp6 = /[a-z0-9]l/i;
const result6 = regexp6.test(str1);//check if str1 contains any letters in between 'a' 'z' or any digit 0 to 9 before l
console.log(result6);

//^represent start of a string
const regexp7 = /^ronaldo/i;
const result7 = regexp7.test(str2);//check if str2 containser  start with ronaldo
console.log(result7);

const regexp8 = /goat$/i;
const result8 = regexp8.test(str3);//check if str3 end with 'goat' 
console.log(result8);

const regexp9 = /^ronaldo/im; //m-flag represent multiline matching
const result9 = regexp9.test(str3);//check if str3 end with 'goat' 
console.log(result9);

const regexp10 = /goat$/im;
const result10 = regexp10.test(str3);//check if str3 end with 'goat' 
console.log(result10);

const regexp11 = /goats?/im; // word before '?' is optional for matching
const result11 = regexp11.test(str3);// it matches both goats and goat 's' is optional
console.log(result11);

const regexp12 = /goat(s)?/im; // word before '?' is optional for matching  ()represent groups
const result12 = regexp12.test(str3);// it matches both goats and goat 's' is optional
console.log(result12);

const regexp13 = /goats*$/i; // the ;etter before '*'can occur multiple times in a string
const result13 = regexp13.test(str3);// it matches  goats, goatssss
console.log(result11);

const regexp14 = /goat+$/i; // thw letter before ' +' also can occur multiple times in a string,but atleast one ocurense is required
const result14 = regexp14.test(str3);// it matches both goats and goat 's' is optional
console.log(result14);

const regexp15 = /goat.$/i; // word before '?' is optional for matching
const result15 = regexp15.test(str3);// it matches both goats and goat 's' is optional
console.log(result15);


const regexp16 = /goat.*$/i; // here it matches goat,goats,goatsss,....
const result16 = regexp16.test(str3);// since due to '*' multiple character are matched




//15-12-23


const regexinp =/^[a-z][a-z0-9_]/i;

function checkresult  (value){
    const result = regexinp.test(value);
    if(result){
       return'valid string'
    }else{
        return'invalid string'
    }
}
const value = "adfeu3 _f"

let check_result = checkresult(value);
console.log("result :",check_result);


function onchange(arg){
    let validation_result = checkresult(arg.value);
    let label = document.getElementById('error');
    if(validation_result){
        label.innerHTML = validation_result;

    }else{
        label.innerHTML = validation_result;
    }
}



//string replace using regular expression
let str5= "a-b-c-d";

let replacedstring1 = str5.replace(/-/,':');//replace first '-' with ':'
console.log("replacedstring1 : ",replacedstring1);


let replacedstring2 = str5.replace(/-/,':');//replace all '-' with ':'
console.log("replacedstring2 : ",replacedstring2);
  
let dateStr = '12-10-04' ;
let dateStrReplaced = dateStr.replace(/(\d{2})$/,'20$1');// gets '04' from datastr and replace it as '2004' $1 will get the value of the first capture group ie within '()' brackets
console.log("datastrreplaced :",dateStrReplaced);