export class DZNavbar extends HTMLElement {

    constructor() {

        super();

    }

    connectedCallback() {
        this.innerHTML = `<nav class="navbar navbar-expand-sm">
            <div class="container-fluid">
                <a class="navbar-brand" href="./index.html">DZ</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul class="navbar-nav ms-auto gap-2">

                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="./index.html">Home</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="./sobrenos.html">Sobre mim</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="./contato.html">Contato</a>
                        </li>

                          <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="./contato.html">projetos</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>`
    }
}