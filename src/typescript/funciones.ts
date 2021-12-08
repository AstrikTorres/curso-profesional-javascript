// Funciones

/* Especificamos que tipo de dato recibe una función 
y el tipo de dato que regresara */
function add(a: number, b: number): number {
  return a + b;
}

const sum = add(4, 6);

/* -------------------------------------------------- */
/* Especifica que la función regresara una función con un dato de tipo number
y que a su vez esa función regresara un dato de tipo number */
function createAdder(a: number): (number) => number {
  return function (b: number) {
    return b + a;
  }
}

const addFour = createAdder(4)
const fourPlus6 = addFour(6)

/* -------------------------------------------------- */
/* Con "?" antes de los ":" decimos que ese parametro es opcional
Igual podemos establecer un valor predeterminado a parametros */
function fullName(firstName: string, lastName: string = "Smith"): string {
  return `${firstName} ${lastName}`
}

const astrik = fullName("Astrik");
console.log(astrik); // input: Astrik Smith