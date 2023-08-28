import { conectaApi } from '../conectaApi.js';
const form = document.querySelector("[data-formulario]")


async function criarVideo(e) {
    e.preventDefault();

    const url = document.querySelector('[data-url]').value
    const categoria = document.querySelector('[data-categoria]').value
    const nome = document.querySelector('[data-nome]').value
    const preco = document.querySelector('[data-preco]').value
    const desc = document.querySelector('[data-desc]').value

    try {
        await conectaApi.addProduto(url, categoria, nome, preco, desc);
    } catch (error) {
        alert(error);
    }
}

form.addEventListener("submit", e => criarVideo(e))