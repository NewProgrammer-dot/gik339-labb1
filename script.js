// uppgift 2
// let x = 5;
// var y = 10;
// const z = 15;

// console.log(x);
// console.log(y);
// console.log(z);

{
    // let x = 20;
    // var y = 30;
    // const z = 40;
    
    // console.log(x);
    // console.log(y);
    // console.log(z);
}

// console.log(x);
// console.log(y);
// console.log(z);

/*  
    1:
    Skillnaden mellan let, var och const är att var är en functionvariabel vilket betyder att den kan användas överallt i en funktion och inte bryr sig om blocket där den deklareras. 
    let är en lokal variabel som endast kan användas inom sitt scope, i detta fall inom blocket där den deklareras. 
    const är en konstant som inte kan ändras som också är skapad i sitt scope.


    2:
    console.log innan blocket skriver ut de värden som blivit tillgivna i det globala scopet.
    console.log inom blocket skriver ut de värden som blivit tillvigna inom blocket.
    console.log efter blocket skriver ut de värden som blivit tillgivna i det globala scopet
    dock så ändrar sig var variabeln eftersom att den blivit tillgiven ett annat värde i blocket.
*/

// uppgift 3
// const add = (num1, num2) => num1 + num2;

// console.log(add(5, 10));
/* 
    om man hade använt let istället för const så hade variabeln add kunnat
    ändrats till något annat senare i koden.

    function add(num1,num2)
    {
        return num1 + num2;
    }

    När en funktion returnerar innebär det att den skickar tillbaka ett värde
    som kan användas i andra delar av koden.
*/

// uppgift 4
// const add = (num1, num2) => 
// {
// console.log(num1 == 0);
// console.log(num2 === '0');
// console.log(num2 === 0);
// console.log(num1 == NaN);

// console.log(num1 ? "truthy" : "falsy");

// if (!(num1 == null || num2 == null) && !(num1 === undefined || num2 === undefined) &&
//     (typeof num1 === 'number' && typeof num2 === 'number'))
//     {
//     return num1 + num2;
//     }
// else {
//     console.log('Error: Invalid input. Please provide two numbers.');
// }
// };
//testar bara med olika inputs:
// console.log(add(5, 10));
// console.log(add(5, '10'));
// console.log(add(null, 3));
// console.log(add(undefined));
/* 
    en ternary operator är en förkortad version av en if/else sats, den skiljer sig från
    en vanlig if/else sats genom att den är mer kompakt och används för att tilldela ett värde baserat på ett villkor.

    skillnaden mellan == och === är att == jämför värdena och gör typkonvertering vid behov.
    === jämför både värdena och deras datatyper, vilket innebär att det inte sker någon typkonvertering.
*/