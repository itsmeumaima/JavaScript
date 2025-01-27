const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const res = document.querySelector(".result");

    res.classList.remove("show");

    if (height == '' || height <= 0 || isNaN(height)) {
        res.innerHTML = `Please give a valid Height`;
        res.classList.add("show"); // Apply the show class for visibility
        
    } else if (weight == '' || weight <= 0 || isNaN(weight)) {
        res.innerHTML = `Please give a valid Weight`;
        res.classList.add("show"); // Apply the show class for visibility
        
    } else {
        const ans = (weight / ((height * height) / 10000)).toFixed(2);
        let message = `<span>Your BMI is: ${ans}</span>`;

        if (ans < 18.6) {
            message += `<br><span style="color: #ff6347;">Underweight</span>`;
        } else if (ans >= 18.6 && ans <= 24.9) {
            message += `<br><span style="color: #32cd32;">Normal Range</span>`;
        } else {
            message += `<br><span style="color: #ff4500;">Overweight</span>`;
        }

        res.innerHTML = message;
        res.classList.add("show"); 
        console.log(ans);
    }
});
