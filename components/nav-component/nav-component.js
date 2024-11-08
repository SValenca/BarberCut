export function navBarComponent() {

    const element = document.getElementById(`navbar-component`)
    const navbar = `
    <nav class="navbar navbar-expand-lg ">
    <div class="container fluid">
    <!-- <a class="navbar-brand" href="#">Navbar</a> -->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
    <li class="nav-item">
    <a class="nav-link" href="index.html">Início</a>
    </li>
    <li class="nav-item">
    <a class="nav-link" href="#services">Serviços</a>
    </li>
    <li class="nav-item">
    <a class="nav-link" href="#about">Sobre Nós</a>
    </li>
    <li class="nav-item">
    <a class="nav-link" href="#contact">Contato</a>
    </li>
    <li class="nav-item">
    <a class="nav-link" href="login.html">Login</a>
    </li>
    </ul>
    </div>
    </div>
    </nav>
    `
    element.innerHTML = navbar
}
export function navBarComponentTemplate() {
    const localTemplate = 'components/nav-component/nav-component.html'
    const localStyle = 'components/nav-component/nav-component.css'

    const element = document.getElementById('navbar-component')
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