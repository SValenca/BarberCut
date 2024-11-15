
import { validateName, validateTel, validateEmail, validateSenha, confimacaoSenha } from './service/validator.js'
import { navBarComponentTemplate } from "./../components/nav-component/nav-component.js"
import{cardComponent}from "./../components/card-components/card-component.js"
navBarComponentTemplate()
cardComponent()
validateName()
validateTel()
validateEmail()
validateSenha()
confimacaoSenha()
//Função para pegar os elementos
function getElement(elementSelector) {
    return document.querySelector(elementSelector)
}

//Função para preencher do conteúdo do elemento
function setContentElement(elementSelector, content) {
    const element = getElement(elementSelector)
    if (element) {
        element.innerHTML = content
    }
}