const q1answer = document.querySelectorAll("input[name='q1']");
const q2answer = document.querySelectorAll("input[name='q2']");
const q3answer = document.querySelectorAll("input[name='q3']");
const q4answer = document.querySelectorAll("input[name='q4']");

let grid = document.getElementById("grid");
let svarGrid = document.getElementById("svar-grid");
let svarLåda = document.getElementById("resultat");

const resultButton = document.querySelector(".show-results");
resultButton.addEventListener("click", checkResults);

const result = document.getElementById("svar");

function checkQuestion(q) {
    let points = 0;
    for (let index = 0; index < q.length; index++) {
        if (q[index].checked) {
            points += parseInt(q[index].value, 10);
        }
    }
    return points;
}

function checkResults() {
    let poeng = 0;
    poeng += checkQuestion(q1answer);
    poeng += checkQuestion(q2answer);
    poeng += checkQuestion(q3answer);
    poeng += checkQuestion(q4answer);
    let pointsAverage = poeng;
    
    if (pointsAverage == 8 || pointsAverage == 7) {
        result.innerHTML = "Du är definintivt en typisk Lutz schnitzel";
    }
    
    if (pointsAverage == 6 || pointsAverage == 5) {
        result.innerHTML = "Du är definintivt en typisk Jesper schnitzel";
    }
    

    if (pointsAverage == 4 || pointsAverage == 3 ) {
        result.innerHTML = "Du är definintivt en typisk Cyka schnitzel";
    }
        
    if (pointsAverage == 2 || pointsAverage == 1 ) {
        result.innerHTML = "Du är definitivt en Ica basic scheiser schnitzel"
    }

    if (pointsAverage == 0) {
        result.innerHTML = "Du är definitivt den Sunkigaste scheiser schnitzeln någonsin"
    }

grid.style.display="none";
svarLåda.style.display="block";
svarGrid.style.gridTemplateRows="7rem auto";
resultButton.innerHTML = "Gör om Quiz genom att ladda om sidan";
}