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
                        <div data-image="https://imgs.search.brave.com/f7GVUkOr8VlJFRNuxrZ4guIOOJLxlPmA99kD2lgN0s8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tYWNt/YWdhemluZS5jb20u/YnIvd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMTAvMzEtd2Fs/bHBhcGVyLWlwaG9u/ZS0xMi01ODJ4MTI2/MC5qcGc"></div>
                    </div>
                    <div data-stories-item data-order="1">
                        <div data-author="Autor 1"></div>
                        <div data-avatar="http://via.placeholder.com/50"></div>
                        <div data-dataposted="2022-01-19T09:45:00"></div>
                        <div
                        data-image="https://imgs.search.brave.com/ofA-EWvuzls3fy-_UiE2ZHhUi5CHCpJ6KSCm6aopfK8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvaXBob25lLTEx/LTE5anlhaGJ0djdl/cGRpNTcuanBn">
                        </div>
                    </div>
                    <div data-stories-item data-order="2">
                        <div data-author="Autor 1"></div>
                        <div data-avatar="http://via.placeholder.com/50"></div>
                        <div data-dataposted="2022-01-19T09:45:00"></div>
                        <div data-image="https://imgs.search.brave.com/eUXeYC0jnjyEKroKp3h7CaZwif-LyLzfRZytddioMOE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzU2LzBm/LzI0LzU2MGYyNDQ5/YjM0YTkxN2RkM2Zm/ZDAxNGFkN2RlMjRk/LmpwZw">
                        </div>
                    </div>
                    <div data-stories-item data-order="2">
                        <div data-author="Autor 1"></div>
                        <div data-avatar="http://via.placeholder.com/50"></div>
                        <div data-dataposted="2022-01-19T09:45:00"></div>
                        <div data-image="https://imgs.search.brave.com/ppJMO8y7jOut7lCaCvbAt7sZyedmCF5iLvUCtB8teVs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vYXJ0aXN0/aHVlLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMC8xMi9V/bmtub3dubW1tLXNj/YWxlZC5qcGc_Zml0/PTQ3MywxMDI0JnNz/bD0x"></div>
                    </div>
                    <div data-stories-item data-order="2">
                        <div data-author="Autor 1"></div>
                        <div data-avatar="http://via.placeholder.com/50"></div>
                        <div data-dataposted="2022-01-19T09:45:00"></div>
                        <div
                        data-image="https://imgs.search.brave.com/FbkkcQkpSv_Z8eMex7JikjW6JeO6e15nR6OW5TzKOac/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvaXBob25lLTEy/LXozMDdwbHJoMXE2/NWdia3kuanBn">
                        </div>
                    </div>
                    <div data-stories-item data-order="2">
                        <div data-author="Autor 1"></div>
                        <div data-avatar="http://via.placeholder.com/50"></div>
                        <div data-dataposted="2022-01-19T09:45:00"></div>
                        <div data-image="https://imgs.search.brave.com/MN4eCVUbG6yGgcXXHQiEEGLyHnSSOEhG5ArT-ziOWtI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMTI2/MTQuanBn"></div>
                    </div>
                </div>
            
                <div data-stories>
                    <div data-stories-item data-order="0">
                        <div data-author="Autor 2"></div>
                        <div data-avatar="http://via.placeholder.com/50"></div>
                        <div data-dataposted="2022-01-18T12:30:00"></div>
                        <div data-image="https://imgs.search.brave.com/YMcPJM-FYQrr7hui91AX0cscJYLdFaq0dQKEIGhJT-g/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vYXJ0aXN0/aHVlLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMC8xMi9V/bmtub3duLmpwZz9m/aXQ9NTY4LDEwMjQm/c3NsPTE"></div>
                    </div>
                    <div data-stories-item data-order="1">
                        <div data-author="Autor 2"></div>
                        <div data-avatar="http://via.placeholder.com/50"></div>
                        <div data-dataposted="2022-01-19T09:45:00"></div>
                        <div
                        data-image="https://imgs.search.brave.com/dxopXbixsRuzEeEso1hfTmodmJNpGcUhU93Mni-E66Q/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvaXBob25lLTEz/LXVmdjZqb2t0Z2p6/eTlubDMuanBn"></div>
                    </div>
                    <div data-stories-item data-order="2">
                        <div data-author="Autor 2"></div>
                        <div data-avatar="http://via.placeholder.com/50"></div>
                        <div data-dataposted="2022-01-19T09:45:00"></div>
                        <div data-image="https://imgs.search.brave.com/ZfVz-l69HfGyqr2lRzvhwKwvuVBgH18L2_dUhNViFUg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vYXJ0aXN0/aHVlLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMC8xMi9V/bmtuZGNkc2Rzb3du/LmpwZz9maXQ9NTc2/LDEwMjQmc3NsPTE">
                        </div>
                    </div>
                    <div data-stories-item data-order="2">
                        <div data-author="Autor 2"></div>
                        <div data-avatar="http://via.placeholder.com/50"></div>
                        <div data-dataposted="2022-01-19T09:45:00"></div>
                        <div
                        data-image="https://imgs.search.brave.com/Y98Yffc7--gKDVFnky7th03JJgbu-3PI_Gj96jexeIw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly85dG81/bWFjLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvc2l0ZXMvNi8y/MDE5LzA5L0JsYWNr/LUxpZ2h0LmpwZz9x/dWFsaXR5PTgyJnN0/cmlwPWFsbA">
                        </div>
                    </div>
                    <div data-stories-item data-order="2">
                        <div data-author="Autor 2"></div>
                        <div data-avatar="http://via.placeholder.com/50"></div>
                        <div data-dataposted="2022-01-19T09:45:00"></div>
                        <div
                        data-image="https://imgs.search.brave.com/raUCW9PPTJh6meoE1CMyX3xgHmhsO0G2qb00uW2huko/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/bHJ4ZHZlY3I1cGNj/MS5qcGVnP3dpZHRo/PTY0MCZjcm9wPXNt/YXJ0JmF1dG89d2Vi/cCZzPWYxZTZlNDk1/MDkxMzQ0Y2I1MGZj/OWUzYzgwYjZmM2Ji/YjYxYjQ4MWU">
                        </div>
                    </div>
                    <div data-stories-item data-order="2">
                        <div data-author="Autor 2"></div>
                        <div data-avatar="http://via.placeholder.com/50"></div>
                        <div data-dataposted="2022-01-19T09:45:00"></div>
                        <div data-image="https://imgs.search.brave.com/XlIQpDFe1a3fmSgUPdhVtD_X6TJCXMjUw8dVYwGw4DA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvaXBob25lLXgt/MHB1N3FqYmdydnZw/YWoxMy5qcGc">
                        </div>
                    </div>
                </div>
            </div>
        `

        const slider = new QuantumStories(".slider")
    }
}

const app = new App()
