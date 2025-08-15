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
            category.style.color = "red";
            bmiValue.style.color = "red";
            break;

        case (bmi >= 18.5 && bmi <= 24.9):
            result = "Normal Weight";
            category.style.color = "green";
            bmiValue.style.color = "green";
            break;

        case (bmi >= 25 && bmi <= 29.9):
            result = "OverWeight";
            category.style.color = "red";
            bmiValue.style.color = "red";
            break;

        case (bmi >= 30):
            result = "Obesity";
            category.style.color = "maroon";
            bmiValue.style.color = "maroon";
            break;    
            
        default:
            console.log("Invalid Entry!");
            break;
    }

    category.innerText = result;
})