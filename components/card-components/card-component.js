export async function cardComponent() {
    const localTemplate = 'components/card-component/card-component.html'
    const localStyle = 'components/card-component/card-component.css'
    const element = document.getElementById('card-component')
    if (!element) return
    element.innerHTML = ''
    element.innerHTML += `<link rel="stylesheet" href="${localStyle}">`
//Dados
const services = await getService()
console.log('>>> services', services);

//Template -> HTML
    fetch(localTemplate)
        .then((res) => res.text())
        .then((component) => {
            element. innerHTML = mountService(services, component)
            //style -> css
            element. innerHTML += `<link rel="stylesheet" href="${localStyle}">`
        })
        .catch((error) => {
            console.error("Erro ao montar o component: ", error);
        })
}
function mountService(dados, template){
    let result= ""
    for(let i = 0; i < dados.lengt; i++){
        let newTmplate = template
        result += newTmplate
        .replace('{{fotos}}', dados[i].fotos)
        .replace('{{nome}}', dados[i].nome)
        .replace('{{descricao}}', dados[i].descricao)
    }
    return result
}
function getService() {
    let result = []
    fetch('mock/service.json')
        .then((res) => res.text())
        .then((data) => {
            result = data 
        })
        .catch((error) => {
            console.error("Erro ao pegar os dados: ", error);
        })
    return result
}