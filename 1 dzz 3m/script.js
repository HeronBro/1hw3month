let url = document.getElementById('url')
let email = document.getElementById('email')
let btn = document.getElementById('btn')
function check() {
    if(url.value.includes('http://') || url.value.includes('https://') || url.value.includes('.')){
        url.style.border = '10px solid green'
    }else{
        url.style.border = '10px solid red'
    } 
    if(email.value.includes('@') && email.value.includes('.')){
        email.style.border = '10px solid green'
    }else{
        email.style.border = '10px solid red'
    }
}
