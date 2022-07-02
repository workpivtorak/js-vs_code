const checkAge = function(age) {
    let age_2 = 18
    let age_3 = 61
    if (age && !isNaN(age)) { // age покаже чи дані взагалі є "і" чи вони не string
            if (age < age_2) {
               console.log ("You don't have access cause your age is " + age + " " + "It's less then")
            } else if (age >= age_2 , age < age_3) {
               console.log("Welcome !")
            } else if (age > age_3) {
               console.log("Keep calm and look Culture channel")
            } else {
               console.log("Tehnical work")    
            }
    } else { // якщо дані не числові то виводимо в консоль
         console.log (" Age must been Number ")  
         }}
checkAge() // підставляємо різні дані
