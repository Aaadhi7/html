{
    let reg = document.getElementById('reg');
    console.log("form",reg);
var datas = {};
let arr = [];

    reg.addEventListener('submit',function (e){
        e.preventDefault();
          let fname = document.getElementById('fname');
          let fname_value = fname.value;
          console.log("firstname :",fname_value);

          let lname = document.getElementById('lname');
          let lname_value = lname.value;
          console.log("lastname :",lname_value);

          let uname = document.getElementById('uname');
          let uname_value = uname.value;
          console.log("username :",uname_value);

          let email = document.getElementById('email')
          let email_value = email.value;
          console.log("email:",email_value);  

          let password = document.getElementById('password');
          let password_value = password.value;
          console.log("password :",password_value);

          let age = document.getElementById('age');
          let age_value = age.value;
          console.log("age :",age_value); 

          let place = document.getElementById('place');
          let place_value = place.value;
          console.log("place :",place_value); 

        let phone = document.getElementById('phone');
        let phone_value = phone.value;
        console.log("phone :",phone_value);

        datas.fname= fname_value;
        datas.lname = lname_value;
        datas.uname = uname_value;
        datas.email = email_value;
        datas.password = password_value;
        datas.age = age_value;
        datas.place = place_value;
        datas.phone = phone_value;

         console.log("datas :",datas);
        // handleDatas(datas);

    });
    function handleDatas(datas){
        console.log("datas :",datas);
        let message = document.getElementById('message');


        //validation
        if (arr.length > 0 ){
            for (let i = 0 ; i<arr.length;i++){
                if (arr[i].email == datas.email){
                    message.innerHTML = "Email is already found";
                    return;
                }
            }
        }
    }
    arr.push(datas);
    message.innerHTML = "sucess";
    console.log("arr :",arr);

}