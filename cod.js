document.getElementById("doacaosangue").addEventListener("submit", function (e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let peso = document.getElementById("peso").value;
    let idade = document.getElementById("idade").value;
    let cidade = document.getElementById("cidade").value;
    let estado = document.getElementById("estado").value;
    let sangue = document.getElementById("sangue").value;
    let termo = document.querySelector('input[name="termo"]:checked');

    
     if (nome.trim().split(/\s+/).filter(p => p.length >= 2).length < 2) {
        document.getElementById("resultado").innerHTML = "Nome inválido! Informe nome e sobrenome.";
        return;

    }
    if (!email.includes("@")) {
        document.getElementById("resultado").innerHTML = " Email inválido! Deve conter @.";
        return;
    }
    if (!/^\d+$/.test(telefone)) {
    document.getElementById("resultado").innerHTML = "Telefone inválido! Use apenas números.";
    return;
}
    if (telefone.length < 8) {
        alert("Número inválido");
        return;
    }
    if (peso < 50) {
        alert("Idade mínima é 50KG");
        return;
    }
    if (idade < 16) {
        alert("Idade mínima é 16 anos");
        return;
    }
    if (cidade.trim() === "") {
        document.getElementById("resultado").innerHTML = "Obrigatório responder";
        return;
    }

    if (nome.trim() === "") {
        document.getElementById("resultado").innerHTML = "Obrigatório responder ";
        return;
    }
    if (email.trim() === "") {
        document.getElementById("resultado").innerHTML = "Obrigatório responder ";
        return;
    }
    if (idade.trim() === "") {
        document.getElementById("resultado").innerHTML = "Obrigatório responder ";
        return;
    }
    if (peso.trim() === "") {
        document.getElementById("resultado").innerHTML = "Obrigatório responder ";
        return;
    }
    if (sangue.trim() === "") {
        document.getElementById("resultado").innerHTML = "Obrigatório responder ";
        return;
    }
    if (telefone.trim() === "") {
        document.getElementById("resultado").innerHTML = "Obrigatório responder ";
        return;
    }
    if (estado.trim() === "") {
        document.getElementById("resultado").innerHTML = "Obrigatório responder ";
        return;
    }
    
    
    if (termo.trim() === "") {
        document.getElementById("resultado").innerHTML = "Obrigatório responder ";
        return;

        document.getElementById("resultado").innerHTML = "Cadastro realizado com sucesso!<br>" + "Nome: " +
            nome;

    }
}
);
