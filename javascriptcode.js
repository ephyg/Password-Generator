
var upperletter = "QWERTYUIOPASDFGHJKLZXCVBNM"
var lowerletter = "qwertyuiopasdfghjklzxcvbnm"
var numbers = "1234567890"
var characters = "!@#$%&*/"


// checkbox for upper letter
document.querySelector('#alpha-bet').addEventListener('click', function () {
    if (document.querySelector('#alpha-bet').value == 0) {
        document.querySelector('#alpha-bet').value = 1
    }
    else {
        document.querySelector('#alpha-bet').value = 0
    }
})

// checkbox for lower letter
document.querySelector('#alpha-low').addEventListener('click', function () {
    if (document.querySelector('#alpha-low').value == 0) {
        document.querySelector('#alpha-low').value = 1
    }
    else {
        document.querySelector('#alpha-low').value = 0
    }
})

// checkbox for number
document.querySelector('#num-ber').addEventListener('click',function(){
    if(document.querySelector('#num-ber').value==0){
        document.querySelector('#num-ber').value=1
    }
    else{
        document.querySelector('#num-ber').value=0
    }
})
// checkbox for character
document.querySelector('#char-acter').addEventListener('click',function(){
    if(document.querySelector('#char-acter').value==0){
        document.querySelector('#char-acter').value=1
    }
    else{
        document.querySelector('#char-acter').value=0
    }
})

// generate button
document.querySelector('#btn').addEventListener('click', function () {
    var selectedPassword=""
    if (document.querySelector('#alpha-bet').value==1){
        selectedPassword+=upperletter
    }
    if(document.querySelector('#alpha-low').value==1){
        selectedPassword+=lowerletter
    }
    if(document.querySelector('#num-ber').value==1){
        selectedPassword+=numbers
    }
    if(document.querySelector('#char-acter').value==1){
        selectedPassword+=characters
    }
    var Generated_password=""
    for(i=0;i<Number(document.querySelector('#pass-word').value);i++){
        Generated_password+=selectedPassword.charAt(Math.floor(Math.random()*selectedPassword.length))
    }
    document.querySelector('#Result').value=Generated_password
    //copy the password
    var password_=document.querySelector('#Result')
    document.querySelector('#copy').addEventListener('click',function(){
    password_.select();
    navigator.clipboard.writeText(password_.value);
    
    // copied popup
    document.querySelector(".pass-copy").classList.add("active")
    setTimeout(function(){
    document.querySelector(".pass-copy").classList.remove("active")},500)
   


})
})
