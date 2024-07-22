let SignupData = JSON.parse(localStorage.getItem("userdata"));
let LoginData =JSON.parse(localStorage.getItem('LoginData'))
let image = document.getElementById('userimage')
let ID = document.getElementById('username')

let Imagefind = SignupData.find((item)=>{

    return item.username && item.userPic 

})
let ProtectrToute = LoginData.find((item)=>{
    return item.islogin
})
if(Imagefind){

    image.src = Imagefind.userPic
    ID.innerText= Imagefind.username

}
if(LoginData.islogin === false){
    window.location.href='../dashboard/dashboard.html'
}

else{
    console.log('not found')
}

