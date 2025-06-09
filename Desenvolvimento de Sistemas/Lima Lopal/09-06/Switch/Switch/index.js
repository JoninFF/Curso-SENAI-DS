function Processar(numero, opcao){
    document.getElementById('resultado').innerHTML = ""; 

    if (numero === "" || opcao === ""){
        alert("Adicione um numero e uma opcao");
    }    
    
    switch (opcao) {
            case 1:
                Parimpar(numero);
                break;
            case 2:
                Divisores(numero);
                break;
            case 3:
                Tabuada(numero);
                break;
            case 4:
                Parimpar(numero);
                Divisores(numero);
                Tabuada(numero);
                break;
            default:
                document.getElementById('resultado').innerHTML = "Escolha uma opção válida.";
                break;
        }
    }



function Parimpar(numero){
    if (numero % 2 === 0) {
        document.getElementById('resultado').innerHTML += ("O numero " + numero + " é par" + "<br>" + "<br>");
    } else {
        document.getElementById('resultado').innerHTML += ("O numero " + numero + " é impar" + "<br>" + "<br>");
    }
}

function Divisores(numero){
    let divisores = [];
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            divisores.push(i);
        }
    }
    document.getElementById('resultado').innerHTML += ("Os divisores de " + numero + " são: " + divisores.join(", ") + "<br>" + "<br>");
}

function Tabuada(numero){
    let tabuada = "";
    for (let i = 1; i <= 10; i++) {
        tabuada += numero + " x " + i + " = " + (numero * i) + "<br>"; 
    }
    document.getElementById('resultado').innerHTML += ("A tabuada de " + numero + " é:<br>" + tabuada);
}

