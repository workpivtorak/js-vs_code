1. Написать скриптик, который сосчитает и выведет результат от возведения 
   2 в степень 10, начиная со степени 1
      let x = 2;
    let n = 10;
    for (i = 1; i <= n; i++ ) {
    res = (x ** i);
    console.log ("number =", x , "in degree =", i, "have =", res )
    }

1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2
      const functionOfDegrees = (n) =>{
    let x = 2
    for (i = 1; i <= n; i++ ) {
    res = (x ** i);
    console.log ("number =", x , "in degree =", i, "have =", res )
    }
    }
    functionOfDegrees(5);

2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
   Пример в консоли:
   :)
   :):)
   :):):)
   :):):):)
   :):):):):)
   
    let resultSmile = ""; // пуста стрічка яку будемо повторювти
    let haha = ":)"; // змінна яку будемо виводити
    let n = 5; // кількість повторень
    for (i = 1; i <=n; i++) { // цикл, зазначаємо кількість ітерацій та умову повторення
    resultSmile = resultSmile + haha; // процес додавання змінних
    console.log (resultSmile); // виведення результату в термінал
    }


2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
    e.g. function printSmile(stroka, numberOfRows)
    
    result = ""; // пуста стрічка яку будемо повторювти
    function printText (stroka, numberOfRows) { // означення 
    for (i = 1; i <=numberOfRows; i++ ) { // // цикл, зазначаємо кількість ітерацій та умову повторення
    result = result + stroka; // // процес додавання змінних
    console.log (result); // // виведення результату в термінал
    }
    }
    printText("Hello, World!", 5); // виклик функції



3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
    e.g. function getWordStructure(word)
    В консоли: 
    Слово (word) состоит из  (число) гласных и (число) согласных букв

   Проверки: 'case', 'Case', 'Check-list'

    function getWordStructure(word) {
    word = word.toLowerCase().split('');

    let listOfVowels = ['a', 'e', 'i', 'o', 'u']; 
    let listOfConc = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
    let countV = 0;
    let countC = 0;

     word.forEach(el => {
    if (listOfVowels.includes(el)) countV ++
    else if (listOfConc.includes(el)) countC ++
     })
    console.log(`Слово ${word.join('')} складається з ${countV} голосних букв та ${countC} приголосних букв`);
    }
  
    getWordStructure("Hello, World!");
    getWordStructure('case'); 
    getWordStructure('Case'); 
    getWordStructure('Check-list');
