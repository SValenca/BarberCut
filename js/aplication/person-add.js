import { validateName, validateTel, validateEmail, validateSenha, confimacaoSenha } from '../service/validator.js'
import {Person} from "../domain/person.js"

validateName()
validateTel()
validateEmail()
validateSenha()
confimacaoSenha()

submitForm()

function getFormPerson(){
    const person = new Person()
    person.name = document.querySelector("#nameInput").value
    person.email = document.querySelector("#emailInput").value
    person.phone = document.querySelector("#telInput").value
    person.password = document.querySelector("#passwordInput").value
    return person
}

function submitForm(){
    const butonSubmit = document.querySelector("#submitForm")
    butonSubmit.addEventListener("click", () =>{
        const person = getFormPerson()
        console.log(person)
    })

}