export function cardComponent() {
    const localTemplate = 'components/card-component/card-component.html'
    const localStyle = 'components/card-component/card-component.css'

    const element = document.getElementById('card-component')
    element.innerHTML = ''
    element.innerHTML += `<link rel="stylesheet" href="${localStyle}">`

    fetch(localTemplate)
        .then((res) => res.text())
        .then((nav) => {
            element.innerHTML += nav
        })
        .catch((error) => {
            console.error("Erro ao montar a navbar: ", error);
        })
}