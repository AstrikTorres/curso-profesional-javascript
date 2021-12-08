// Boolean: Valor verdadero o falso.
let muted: boolean = true;
muted = false;
/* Si intentamos asignar un dato de otro tipo que
no sea booleano a muted nos daría error:
muted = "callado"; 
*/

// Number: Números.
let numerador: number = 42;
let denominador: number = 6;
let resultado = numerador / denominador;

// Sring: Cadenas de texto.
let nombre: string = "Richard";
let saludo = `Me llamo ${nombre}`;

// Arreglos
/* En Ts podemos decidir si nuestros arreglos son de un solo tipo
de dato, si permiten todos los tipos de datos o una combinación en especial */

// string[]. Arreglo del tipo cadena de texto.
let people: string[] = [];
people = ["Isabel", "Nicole", "Raul"];
/* Si agregamos un dato de tipo number nos da error
people.push(9000) */

// Array. Arreglo multi-tipo, acepta cadenas de texto o números.
let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push("Ricardo");
peopleAndNumbers.push(9000);

// Enum: Es un tipo especial llamado enumeración.
enum Color {
  Rojo, // 0
  Verde, // 1
  Azul, // 2
}
let favoriteColor: Color = Color.Azul;
console.log(`Mi color favorito es ${favoriteColor}`); // input: 2

enum Color2 {
  Rojo = "Rojo",
  Verde = "Verde", 
  Azul = "Azul", 
}
let favoriteColor2: Color2 = Color2.Azul;
console.log(`Mi color favorito es ${favoriteColor2}`); // input: Azul

// any. Cualquier tipo.
let comodin: any = "Joker";
comodin = {type: 'Wildcard'}

// object. Del tipo objeto.
let someObject: object = { type: 'Wildcard' }

export default Color