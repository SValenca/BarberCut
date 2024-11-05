validateName()
validateRequired()

function validateName() {
    const element = document.querySelector("#nameInput")
    const message = document.querySelector("#nameHelp")
    element.addEventListener('blur', (e) => {
        const value = e.target.value
        console.log(value)
        if (value == '') {
            message.innerHTML = '<span class="text-danger"> Valor invalido </span>'
        }
        else {
            message.innerHTML = ''
        }
    })
}

function validateEmail() {
    const element = document.querySelector("#nameEmail")
    const message = document.querySelector("#nameEmail")
    element.addEventListener('keyup', (e) => {
        const value = e.target.value
        console.log(value)
        if (value == '') {
            message.innerHTML = 'Valor invalido'
        }
        else {
            message.innerHTML = ''
        }
    })
}




function validateRequired() {
    const elements = document.querySelectorAll("[required]")
    console.log(elements)
    //const message = document.querySelector("#nameHelp")
} 