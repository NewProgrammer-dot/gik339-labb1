let x = 5;
var y = 10;
const z = 15;

// console.log(x);
// console.log(y);
// console.log(z);

{
    let x = 20;
    var y = 30;
    const z = 40;
    
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

const add = (num1, num2) => num1 + num2;

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