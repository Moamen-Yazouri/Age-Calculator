let container = document.querySelector(".container");
let dateInput = document.querySelector('[type="date"]');
dateInput.max = new Date().toISOString().split("T")[0];
let calculateBtn = document.querySelector("button");
calculateBtn.addEventListener("click", () => {
    // Remove any existing result before creating a new one
    let existingResult = document.querySelector(".result");
    if (existingResult) {
        existingResult.remove();
    }
    let birthDate = new Date(dateInput.value);
    let userY = birthDate.getFullYear();
    let userM = birthDate.getMonth() + 1;

    let todayDate = new Date();
    let todayY = todayDate.getFullYear();
    let todayM = todayDate.getMonth() + 1;
    
    
    let todayBirthDate = new Date(todayDate.getFullYear(), birthDate.getMonth(), birthDate.getDay());

    if(todayBirthDate > todayDate) {
         todayBirthDate.setFullYear(todayDate.getFullYear() - 1);
    }
    // Calculations
    let diffInMs = todayDate - todayBirthDate;
    let diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    let diffInMonths = Math.abs(todayM - userM);
    let diffInYears = todayY - userY;
    // Add the new result
    let agecont = document.createElement("div");
    agecont.className = "result";
    agecont.innerHTML = `You are <span>${diffInYears}</span> Years, <span>${diffInMonths}</span> months and <span>${diffInDays}</span> days old`;
    container.appendChild(agecont);
    
})
