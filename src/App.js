import { QuantumStories } from "quantum-stories"

class App {
    constructor() {
        this.rootElement = document.getElementById('app')
        this.render()
    }

    render() {
        this.rootElement.innerHTML = `
            <div data-slider style="display: none!important" class="slider">

                <div data-stories>
                    <div data-stories-item data-order="0">
                        <div data-author="Autor 1"></div>
                        <div data-avatar="http://via.placeholder.com/50"></div>
                        <div data-dataposted="2022-01-18T12:30:00"></div>
                        <div data-image="https://cdn.pixabay.com/photo/2018/12/18/17/39/sunset-3882741_1280.jpg"></div>
                    </div>
                    <div data-stories-item data-order="1">
                        <div data-author="Autor 1"></div>
                        <div data-avatar="http://via.placeholder.com/50"></div>
                        <div data-dataposted="2022-01-19T09:45:00"></div>
                        <div
                        data-image="https://th.bing.com/th/id/R.6c0c010e7d1e270368c5da9900e8f246?rik=FrSkl9ydy4oZ7A&riu=http%3a%2f%2fcdn11.overnature.net%2f1366%2f143-paisagem-foto-hd-inebriante-sol-amanhecer.jpg&ehk=Y7kb%2b0SUAHTTIEE%2fc9nBNfqL7FndBN5x9pnE2%2bkx3b8%3d&risl=&pid=ImgRaw&r=0">
                        </div>
                    </div>
                    <div data-stories-item data-order="2">
                        <div data-author="Autor 1"></div>
                        <div data-avatar="http://via.placeholder.com/50"></div>
                        <div data-dataposted="2022-01-19T09:45:00"></div>
                        <div data-image="https://th.bing.com/th/id/R.6af6fd9c37f0de4abb34ea0fd20acce3?rik=55mqMmrTutVR0Q&pid=ImgRaw&r=0">
                        </div>
                    </div>
                    <div data-stories-item data-order="2">
                        <div data-author="Autor 1"></div>
                        <div data-avatar="http://via.placeholder.com/50"></div>
                        <div data-dataposted="2022-01-19T09:45:00"></div>
                        <div data-image="https://i.pinimg.com/originals/dc/ac/21/dcac218d25adaed57221a8ae129854be.jpg"></div>
                    </div>
                    <div data-stories-item data-order="2">
                        <div data-author="Autor 1"></div>
                        <div data-avatar="http://via.placeholder.com/50"></div>
                        <div data-dataposted="2022-01-19T09:45:00"></div>
                        <div
                        data-image="https://th.bing.com/th/id/R.000ad18e01de8b1025ac73c7e121ed2f?rik=Z1piN5uJDNZ93g&riu=http%3a%2f%2f3.bp.blogspot.com%2f-Imm-FWSuu5w%2fUWud4Z6NfRI%2fAAAAAAAAAZo%2faQgN__3L2TE%2fs1600%2fquadros-de-cachoeiras-9.jpg&ehk=XCQclSe4YEzPFXtl4yRbiZAzgIWTypGbn4Q0SBbo38M%3d&risl=&pid=ImgRaw&r=0">
                        </div>
                    </div>
                    <div data-stories-item data-order="2">
                        <div data-author="Autor 1"></div>
                        <div data-avatar="http://via.placeholder.com/50"></div>
                        <div data-dataposted="2022-01-19T09:45:00"></div>
                        <div data-image="https://i.pinimg.com/originals/dc/ac/21/dcac218d25adaed57221a8ae129854be.jpg"></div>
                    </div>
                </div>
            
                <div data-stories>
                    <div data-stories-item data-order="0">
                        <div data-author="Autor 2"></div>
                        <div data-avatar="http://via.placeholder.com/50"></div>
                        <div data-dataposted="2022-01-18T12:30:00"></div>
                        <div data-image="https://services.meteored.com/img/article/inteligencia-artificial-aprende-a-reconstruir-imagens-vistas-por-pessoas-ciencia-fotos-1679175318563_1280.jpg"></div>
                    </div>
                    <div data-stories-item data-order="1">
                        <div data-author="Autor 2"></div>
                        <div data-avatar="http://via.placeholder.com/50"></div>
                        <div data-dataposted="2022-01-19T09:45:00"></div>
                        <div
                        data-image="https://static.vecteezy.com/ti/fotos-gratis/t1/9273868-imagem-conceito-do-aquecimento-global-mostrando-os-efeitos-da-terra-seca-no-ambiente-em-mudanca-gratis-foto.jpg"></div>
                    </div>
                    <div data-stories-item data-order="2">
                        <div data-author="Autor 2"></div>
                        <div data-avatar="http://via.placeholder.com/50"></div>
                        <div data-dataposted="2022-01-19T09:45:00"></div>
                        <div data-image="https://t.ctcdn.com.br/JlHwiRHyv0mTD7GfRkIlgO6eQX8=/640x360/smart/i257652.jpeg">
                        </div>
                    </div>
                    <div data-stories-item data-order="2">
                        <div data-author="Autor 2"></div>
                        <div data-avatar="http://via.placeholder.com/50"></div>
                        <div data-dataposted="2022-01-19T09:45:00"></div>
                        <div
                        data-image="https://static.vecteezy.com/ti/fotos-gratis/t1/9273868-imagem-conceito-do-aquecimento-global-mostrando-os-efeitos-da-terra-seca-no-ambiente-em-mudanca-gratis-foto.jpg">
                        </div>
                    </div>
                    <div data-stories-item data-order="2">
                        <div data-author="Autor 2"></div>
                        <div data-avatar="http://via.placeholder.com/50"></div>
                        <div data-dataposted="2022-01-19T09:45:00"></div>
                        <div
                        data-image="https://static.vecteezy.com/ti/fotos-gratis/t2/22653879-fantasia-ilha-com-cachoeiras-3d-ilustracao-elementos-do-isto-imagem-mobiliado-de-nasa-generativo-ai-gratis-foto.jpg">
                        </div>
                    </div>
                    <div data-stories-item data-order="2">
                        <div data-author="Autor 2"></div>
                        <div data-avatar="http://via.placeholder.com/50"></div>
                        <div data-dataposted="2022-01-19T09:45:00"></div>
                        <div data-image="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg">
                        </div>
                    </div>
                </div>
            </div>
        `

        const slider = new QuantumStories(".slider")
    }
}

const app = new App()
