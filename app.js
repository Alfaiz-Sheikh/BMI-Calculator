const submitBtn = document.querySelector("#submitBtn");
const bmiValue = document.querySelector("#bmiValue");
const category = document.querySelector("#category");
const bmiForm = document.querySelector("#bmiForm");

bmiForm.addEventListener("submit", function(e) {
    e.preventDefault();
    let weight = document.querySelector("#weight").value;
    let height = document.querySelector("#height").value/100;

    let bmi = weight / (height * height);

    bmiValue.innerText = `BMI Value: ${bmi.toFixed(2)}`;
})