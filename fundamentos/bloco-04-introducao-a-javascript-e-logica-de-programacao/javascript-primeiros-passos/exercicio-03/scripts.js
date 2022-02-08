const nota = 70;
let state;

if (nota >= 80) {
    console.log("Parabéns! Você foi aprovado.");
    state = "aprovado";
}
else if (nota < 80 && nota >= 60) {
    console.log("Você está em nossa lista de espera");
    state = "lista";
}
else {
    console.log("Você foi reprovado");
    state = "Reprovado"
}

switch (state) {
    case "aprovado":
        state = "Aprovado";
        break;
    case "lista":
        state = "Fila de espera";
        break;
    case "Reprovado":
        state = "Infelizmente, reprovado";
        break;
}

console.log(state);

