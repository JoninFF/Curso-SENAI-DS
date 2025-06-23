function validarPesagem(resultado, pesoA, pesoB, sexo) {
    if (pesoA === "" || pesoB === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }
    switch (sexo) {
        case "M":
            if (pesoA > "90" && pesoB > "90") {
                alert("Luta justa.");

                return;
            }
            else if (pesoA <= "90" && pesoB <= "90" && pesoA > "70" && pesoB > "70") {
                alert("Luta justa.")

                return;
            }
            else if (pesoA <= "70" && pesoB <= "70") {
                alert("Luta justa.");
                return;
            }

            else {
                alert("Luta Injusta!");
                return;
            }
            break
        case "F":
            if (pesoA > "75" && pesoB > "75") {
                alert("Luta justa.");

                return;
            }
            else if (pesoA <= "75" && pesoB <= "75" && pesoA > "60" && pesoB > "60") {
                alert("Luta justa.")
                    ;
                return;
            }
            else if (pesoA <= "60" && pesoB <= "60") {
                alert("Luta justa.")
                    ;
                return;
            }
            else {
                alert("Luta Injusta!");
                return;
            }
            break

    }

}