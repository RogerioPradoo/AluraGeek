async function recebeAPI() {
    const endpointAPI = await fetch(
        "https://64e90cee99cf45b15fe071fd.mockapi.io/prod"
    );
    const listaAPI = await endpointAPI.json();
    console.log(listaAPI)

    return listaAPI;
}

export { recebeAPI };