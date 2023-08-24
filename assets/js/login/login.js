function logar() {
    const email = document.getElementById("email");
    const password = document.getElementById("password")

    if (email.value == "adm@hotmail.com" && password.value == "adm") {
        localStorage.setItem("acesso", true);

    } else {

        alert(
            "Erro ao fazer login, por favor tente email: adm@hotmail.com  password: adm")
    }
}


document.getElementById("myButton").addEventListener("click", logar);