const submitBtn = document.querySelector("#submitBtn");
const bmiValue = document.querySelector("#bmiValue");
const category = document.querySelector("#category");
const bmiForm = document.querySelector("#bmiForm");

bmiForm.addEventListener("submit", function(e) {
    e.preventDefault();
    let weight = document.querySelector("#weight").value;
    let height = document.querySelector("#height").value/100;

    let bmi = weight / (height * height);

    bmiValue.innerText = bmi.toFixed(2);

    let result = "";

    switch(true){
        case (bmi < 18.5):
            result = "UnderWeight";
            break;

        case (bmi >= 18.5 && bmi <= 24.9):
            result = "Normal Weight";
            break;

        case (bmi >= 25 && bmi <= 29.9):
            result = "OverWeight";
            break;

        case (bmi >= 30):
            result = "Obesity";
            break;    
            
        default:
            console.log("Invalid Entry!");
            break;
    }

    category.innerText = result;
})