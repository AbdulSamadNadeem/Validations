let userinfo = document.querySelectorAll('#userdata input')
const [username , useremail , userpass , userpic ] = userinfo
let error = document.getElementById('error')

let UserData=JSON.parse(localStorage.getItem("userdata"))||[]
let profile;
let isAdmin = document.getElementById('isadmin')
const signup = ()=>{
event.preventDefault()


const emptyError=()=>{

    error.innerText=''
}

setTimeout(emptyError,2000)
if(username!=='' && useremail!=='' && userpass!==''){
    let AccExist = UserData.find((item)=>{
        return item.useremail === useremail.value && item.userpassword === userpass.value
    })
    if(AccExist){
        error.innerText='Account Already Exist'
        setTimeout(()=>{
            window.location.href='../dashboard/dashboard.html'
        },3000)
        return;
    }
}
else if(isAdmin.checked && username!=='' && useremail!=='' && userpass!==''){
    let AdminExist = UserData.find((item)=>{
         return item.useremail === useremail.value && item.userpassword === userpass.value && item.admin.checked
       })
       if(AdminExist){
           error.innerText='Account Already Exist'
           setTimeout(()=>{
               window.location.href='../Admin/admin.html'
           },3000)
           return;
       }
  }   
if(username.value === "" || useremail.value === "" || userpass.value === "" || userpic.value === ""){

    error.innerText= "please fill out all fields"
    return;
}
else{

    let userSign={
        "username":username.value,
        "useremail":useremail.value,
        "userpassword":userpass.value,
        "userPic":profile,
        "admin":isAdmin.checked
    }
    UserData.push(userSign)
    localStorage.setItem("userdata", JSON.stringify(UserData))

    error.innerText='SignUp Succesfully'
    
}
    
if(isAdmin.checked){
error.innerText='SignUp Succesfully'
 setTimeout(()=>{
     window.location.href='../login/login.html'
    },2000)
    return;
}  
else{
  
    redirect()
}
   }


const redirect = ()=>{
   
    setTimeout(()=>{
        window.location.href='../login/login.html'
    },3000)
}

const uploadimg = ()=>{
    let image = userpic.files[0]

    let fileread = new FileReader()
    fileread.onload = ()=>{
        profile = fileread.result
        console.log(fileread.result)
    }
    fileread.readAsDataURL(image)}