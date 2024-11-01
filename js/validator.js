validateName()
//validateRequired()
validateEmail()
validateTel()
function validateName() {
    const element = document.querySelector("#nameInput")
    const message = document.querySelector("#nameHelp")
    element.addEventListener('blur', (e) => {
        const value = e.target.value
        console.log(value)
        if (value == '') {
            message.innerHTML = '<span class="text-danger"> Nome invalido </span>'
        }
        else {
            message.innerHTML = ''
        }
    })
}

function validateEmail() {
    const element = document.querySelector("#emailInput")
    const message = document.querySelector("#emailHelp")
    element.addEventListener('keyup', (e) => {
        const value = e.target.value
        console.log(value)
        let error = ''
        const regexEmail = (/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{3}$/i);     
        if (!regexEmail.test(value)) {
            error= 'Email invalido'
        }
            message.innerHTML = error ;
        
    })
}

function validateTel(){
    const element = document.querySelector('#telInput')
    const message = document.querySelector('#telHelp')
    element.addEventListener('keyup',(e) =>{
        element.setAttribute('maxlenght','15')
        const value = e.target.value
        console.log(value)
        let error = ''
        const regexTel=(/^\([0-9]{2,3}\)\s[0-9]{5}-[0-9]{4}$/g);
        if(!regexTel.test(value)){
            error = 'Telefone invalido. Formato:"(999) 99999-9999"'
        }
    message.innerHTML = error;
    })
}

function validateRequired() {
    const elements = document.querySelectorAll("[required]")
    console.log(elements)
    //const message = document.querySelector("#nameHelp")
} 