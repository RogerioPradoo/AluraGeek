async function listarTodos(cate) {
    const conexao = await fetch(`http://localhost:3000/${cate}`)
    const conexaoConvertida = await conexao.json()

    return conexaoConvertida
}

async function listarUmProduto(cate, id) {
    const conexao = await fetch(`http://localhost:3000/${cate}/${id}`)
    const conexaoConvertida = await conexao.json()

    return conexaoConvertida
}


async function addProduto(img, cate, nome, preco, descricao) {
    const conexao = await fetch(`http://localhost:3000/${cate}`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            cate: cate,
            img: img,
            preco: preco,
            descricao: descricao
        })
    });

    if (!conexao.ok) {
        throw new Error("Não foi possível enviar o vídeo. ");
    }

    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function editarProduto(img, nome, preco, descricao) {
    const catAchado = window.location.search.slice(1).split('/')[0];
    const idAchado = window.location.search.slice(1).split('/')[1];

    const conexao = await fetch(`http://localhost:3000/${catAchado}/${idAchado}`, {
        method: "PATCH",
        body: JSON.stringify({
            nome: nome,
            img: img,
            preco: preco,
            descricao: descricao
        }),
        headers: {
            "Content-type": "application/json"
        }
    })

    if (!conexao.ok) {
        throw new Error("Não foi possível enviar o vídeo. ");
    }

    const conexaoConvertida = await conexao.json();
    alert("Produto atualizado com sucesso")

    return conexaoConvertida;
}

async function excluirProduto(cate, id) {
    const conexao = await fetch(`http://localhost:3000/${cate}/${id}`, {
        method: 'DELETE',
    })
        .then(response => response.json())
        .then(data => {
            if (data.status != 200) {
                alert("Houve um erro na solicitação")
            }
        })
}

// async function buscaVideo(termoDeBusca) {
//     const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`)
//     const conexaoConvertida = await conexao.json();

//     return conexaoConvertida
// }

export const conectaApi = {
    addProduto,
    editarProduto,
    excluirProduto,
    listarUmProduto,
    listarTodos
    // buscaVideo
}