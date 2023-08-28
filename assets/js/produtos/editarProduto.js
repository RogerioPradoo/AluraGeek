import { conectaApi } from "../conectaApi.js";
const form = document.querySelector("[data-formulario]");

const catAchado = window.location.search.slice(1).split('/')[0];
const idAchado = window.location.search.slice(1).split('/')[1];
const pegarItem = await conectaApi.listarUmProduto(catAchado, idAchado)

document.querySelector('[data-url]').value = pegarItem.img
document.querySelector('[data-nome]').value = pegarItem.nome
document.querySelector('[data-preco]').value = pegarItem.preco
document.querySelector('[data-desc]').value = pegarItem.descricao


async function editar() {
    const url = document.querySelector('[data-url]').value
    const nome = document.querySelector('[data-nome]').value
    const preco = document.querySelector('[data-preco]').value
    const desc = document.querySelector('[data-desc]').value

    try {
        await conectaApi.editarProduto(url, nome, preco, desc);

    } catch (error) {
        console.log(error);
    }
}


form.addEventListener("submit", async (event) => {
    event.preventDefault();
    editar()
});
