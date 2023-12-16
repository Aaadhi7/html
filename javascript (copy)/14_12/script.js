console.log("javascript regular expression")
 
const str1 = "greatest of all time";
const str2 = "goats";
const str3 = `ronaldo is the 
goats`;

const str5 = "hello kjm";

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
console.log("result" ,regexp16)

const regexp17 = /[kjm]/i;
const result17 = regexp17.test(str5);//if there is a 'k' or 'j' or 'm' then it will be true 
console.log("result17",regexp17);

const regexp18 = /[^kjm]/i;
const result18 = regexp18.test(str5);//if there is no 'k' or 'j' or 'm' then it will be true 
console.log("result18",regexp18);

const regexp19 = /[H+]/i;
const result19 = regexp19.test(str5);//atleast one 'H' is required
console.log("result19 :",regexp19);

const regexp23 = /0?$/i; // string  ends with'0' 
const result23 = regexp23.test(str5);
console.log("result23 :",regexp23);


const regexp20 = /0?$/i; //'0' in string ending is optional
const result20 = regexp20.test(str5);
console.log("result20 :",regexp20);

const regexp21 = /0+$/i; // atleast one'0' is requird inthe string ending
const result21 = regexp21.test(str5);
console.log("result21 :",regexp21);

//{} - indicates the number of charters ,a{2} means "aa" ,ie 2 a is required
const regexp22 = /L{2}o$/i; //'o' should be exactly after 2 L's
const result22 = regexp22.test(str5);
console.log("result22 :",regexp22);


const regexp24 = /L{2,4}o$/i; //'o' should be exactly after  between 2 to 4 L's
const result24 = regexp24.test(str5);
console.log("result24 :",regexp24);

const regexp26 = /HEL{2,4}o$/i; //'o' should be exactly after BETWEEN 2 , 4 L'sAND 'O' is required
const result26 = regexp26.test(str5);
console.log("result26 :",regexp26);

const regexp25 = /HEL{2,}o$/i; //2 or ,ore 'L' is required
const result25 = regexp25.test(str5);
console.log("result25 :",regexp25);

// \- indicates escape charater ,used for matching any charater whivh was special meaning
const regexp27 = /\d/i; //' if there is any ditigs ,it will be true,if there is only digits it will be false
const result27 = regexp27.test(str5);
console.log("result27 :",regexp27);

//suppose we want to match '.' in a string, since'.' has a special meaning in regular expression

const regexp28 = /\D/i; 
const result28 = regexp28.test(str5);
console.log("result28 :",regexp28);

const regexp29 = /./i; 
const result29 = regexp29.test(str5);
console.log("result29 :",regexp29);

//so we cam write it as
const regexp30 = /./i; //if there is any '.' in the string it match , else it will be false
const result30 = regexp30.test(str5);
console.log("result30 :",regexp30);

//so  \ (backslash) is used to special characters


//1
const regexpForDates1 =/^\d{1,2}-\d{1,2}-\d{4}$/i;

// | - indicates or case 0 | 1 means either 1 or 0
const regexpForDates2 = /^([012]?\D|3[01])-([0]\D|[1][012])-(\D{4})$/;

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
let str6= "a-b-c-d";

let replacedstring1 = str6.replace(/-/,':');//replace first '-' with ':'
console.log("replacedstring1 : ",replacedstring1);


let replacedstring2 = str6.replace(/-/,':');//replace all '-' with ':'
console.log("replacedstring2 : ",replacedstring2);
  
let dateStr = '12-10-04' ;
let dateStrReplaced = dateStr.replace(/(\d{2})$/,'20$1');// gets '04' from datastr and replace it as '2004' $1 will get the value of the first capture group ie within '()' brackets
console.log("datastrreplaced :",dateStrReplaced);



