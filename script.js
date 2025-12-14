const form = document.getElementById("calcForm");
const error = document.getElementById("error");
const result = document.getElementById("result");
const historyList = document.getElementById("history");

let historique = [];

form.addEventListener("submit", function(e) {
    e.preventDefault();

    error.textContent = "";
    result.textContent = "";

    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let op = document.getElementById("operation").value;

    // Validation
    if (a === "" || b === "") {
        error.textContent = "Les champs ne doivent pas être vides.";
        return;
    }

    a = Number(a);
    b = Number(b);

    if (op === "/" && b === 0) {
        error.textContent = "Erreur : division par zéro interdite.";
        return;
    }

    // Calcul
    let res;
    switch (op) {
        case "+": res = a + b; break;
        case "-": res = a - b; break;
        case "*": res = a * b; break;
        case "/": res = a / b; break;
    }

    result.textContent = "Résultat : " + res;

    // Ajouter à l'historique
    let entry = `${a} ${op} ${b} = ${res}`;
    historique.push(entry);

    updateHistory();
});

// Mise à jour de l'historique dans le DOM
function updateHistory() {
    historyList.innerHTML = "";
    historique.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        historyList.appendChild(li);
    });
}
