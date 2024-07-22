let SignupData = JSON.parse(localStorage.getItem("userdata"));
const [username] = SignupData
let image = document.getElementById('userimage')
let ID = document.getElementById('username')

let Imagefind = SignupData.find((item)=>{

    return item.username && item.userPic 

})

if(Imagefind){

    image.src = Imagefind.userPic
    ID.innerText= Imagefind.username

}
else{
    console.log('not found')
}
let userinfo= document.getElementById('UserInfo')
let admin= document.getElementById('admin')

userinfo.innerHTML=""
SignupData.forEach(user => {
    let userInfoHTML = `
        <h1>${user.username}</h1>
        <details>
            <ul>
                <li>Email: ${user.useremail}</li>
                <li>Password: ${user.userpassword}</li>
                <li><img src="${user.userPic}" alt="${user.username}'s image" width="100"></li>
            </ul>
        </details>
    `;
    userinfo.innerHTML += userInfoHTML;
});
let adminname = SignupData.find((item)=>{
       return item.username
})
if(adminname){
   admin.innerText = adminname.username
}








