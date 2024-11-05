let dateInput = document.querySelector('[type="date"]');
dateInput.max = new Date().toISOString().split("T")[0];
let calculateBtn = document.querySelector("button");
calculateBtn.addEventListener("click", () => {
    let birthDate = new Date(dateInput.value);
    let userY = birthDate.getFullYear();
    let userM = birthDate.getMonth() + 1;
    let userD = birthDate.getDate();

    let todayDate = new Date();
    let todayY = todayDate.getFullYear();
    let todayM = todayDate.getMonth() + 1;
    let todayD = todayDate.getDate();
    
    // let ageY = todayD - userY;
    // let ageM = todayM - userM;
    // let ageD = todayD - userD;
    

})
