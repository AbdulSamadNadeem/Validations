let formFeild = document.querySelectorAll("form input");

const [loginEmail, loginPassword] = formFeild;

const data = JSON.parse(localStorage.getItem("userdata"));

const [username , useremail , userpassword , userPic , admin]= data

let error = document.getElementById('error')

let loginData=JSON.parse(localStorage.getItem("LoginData")) || []

const Login=()=>{
 
    event.preventDefault()


    if(loginEmail.value ==='' || loginPassword.value ===''){
        error.innerText ='Please Fill Out All Fields'
        setTimeout(clearError,2000)
    }

    else{
        let isAdmin = data.find((item)=>{
            return item.useremail === loginEmail.value && item.userpassword === loginPassword.value && item.admin === true
        })
    
        if(isAdmin){
            let logininfo={
                "loginemail":loginEmail.value,
                "loginPass":loginPassword.value,
                "admin":true      
            }
            loginData.push(logininfo)
            localStorage.setItem("LoginData",JSON.stringify(loginData))
            error.innerText='Login Succesfully'
            setTimeout(clearError,1000)
            setTimeout(()=>{
                window.location.href='../Admin/admin.html'
            },2000)
            return;
        }
        let authenticate = data.find((item)=>{
            return item.useremail === loginEmail.value && item.userpassword === loginPassword.value
        })
        if(authenticate){
            let logininfo={
                "loginemail":loginEmail.value,
                "loginPass":loginPassword.value,      
            }
            loginData.push(logininfo)
            localStorage.setItem("LoginData",JSON.stringify(loginData))
            error.innerText='Login Succesfully'
            setTimeout(clearError,1000)
            setTimeout(()=>{
                window.location.href='../dashboard/dashboard.html'
            },2000)
            return;
        }

        else{
            error.innerText='Incorrect Username Or Password'
            setTimeout(clearError,2000)
        }
    }

    
    
}
const clearError = ()=>{
    error.innerText=''
}
