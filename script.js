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
    1.
    om man hade använt let istället för const så hade variabeln add kunnat
    ändrats till något annat senare i koden.

    2.
    function add(num1,num2)
    {
        return num1 + num2;
    }

    3.
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
    1.
    en ternary operator är en förkortad version av en if/else sats, den skiljer sig från
    en vanlig if/else sats genom att den är mer kompakt och används för att tilldela ett värde baserat på ett villkor.

    2.
    skillnaden mellan == och === är att == jämför värdena och gör typkonvertering vid behov.
    === jämför både värdena och deras datatyper, vilket innebär att det inte sker någon typkonvertering.
*/

// uppgift 5
// const num1 = 0;
// let arg1;
// let sum = false;

// console.log(add(sum, 1))
// console.log(add("0", 3))
// console.log(add(3, "num1"))
// console.log(add(-5, num1))
// console.log(add(arg1, 7))
// console.log(add())

// console.log(num1)
// console.log(sum)

/* 
    1. skillnaden mellan parameter, argument och variabel är
    att parameter är en platshållare som används i en funktiondefinition för
    att representera ett värde som kommer att skickas in när funktionen anropas.

    argument är det faktiska värdet som skickas in till en funktion 
    när den anropas, och kan vara ett värde, variabel eller uttryck.

    Variabel är den generella lagringen av data som kan ändras under programmets gång.

    2. Outputen som vi får från num1 är 0
    eftersom att variabeln är en const och inte kan ändras.

    3. console.log(add(sum, 1)) 
    sum är false, som är en boolean och inte en siffra. Villkoret
    typeof num1 === 'number' blir falskt, så else körs och skriver ut
    felmeddelandet. Funktionen returnerar inget, därför skriver
    console.log ut undefined.

    console.log(add("0", 3))
    "0" står inom citattecken och är därför en sträng, inte en siffra.
    Villkoret blir falskt, else skriver ut felmeddelandet och
    console.log skriver ut undefined.

    console.log(add(3, "num1"))
    "num1" är en sträng med texten num1, inte variabeln num1.
    Villkoret blir falskt, felmeddelande och sedan undefined.

    console.log(add(-5, num1))
    num1 utan citattecken är variabeln, som har värdet 0. Båda
    argumenten är siffror och inget är null eller undefined, så
    villkoret blir sant och funktionen returnerar -5 + 0 = -5.

    console.log(add(arg1, 7))
    arg1 deklarerades utan värde och är därför undefined. Villkoret
    blir falskt, felmeddelande och sedan undefined.

    console.log(add())
    Inga argument skickas, så både num1 och num2 blir undefined.
    Villkoret blir falskt, felmeddelande och sedan undefined.

    console.log(num1)
    num1 är en const och har värdet 0, så console.log skriver ut 0.

    console.log(sum)
    sum är en let variabel som har värdet false, så console.log skriver ut false.
*/