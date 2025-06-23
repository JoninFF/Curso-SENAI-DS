function Login(email, senha){


if(email.value == "" || senha.value == "") {
    alert("Preencha todos os campos!");
    return false;
 }

 if(email.value == "aluno@gmail" || senha.value == "1234") {
    alert("Login realizado com sucesso!");
    window.location.href = "pag2.html";
 }
else{ alert("Email ou senha incorretos!");}
 


}