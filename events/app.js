let obj = {
    nombre: "Johny",
    edad: 20,
    apellido: "Mora",
    keypress: function () {
        console.log('Se ha presionado una tecla...');
    },
    mouseOver: function () {
        console.log('El puntero del mouse está arriba...');
    }
}

console.log(obj.nombre);
console.log(obj['nombre']);

let myKey = 'nombre';
console.log(obj[myKey]);

myKey = 'keypress';
obj[myKey]();
myKey = 'mouseOver';
obj[myKey]();

let myArray = [];

myArray.push(4);
myArray.push('una cadena');
myArray.push(obj);
myArray.push(function () {
    console.log("Hello from the array");
});

// agarra la función del obj de la posición 3 del array
myArray[2].mouseOver();

// la función de esa posición se ejecuta con los paréntesis
myArray[3]();

let funcArray = [];

funcArray.push(() => {
    console.log("Function 1");
});

funcArray.push(() => {
    console.log("Function 2");
});

funcArray.push(() => {
    console.log("Function 3");
});

funcArray.forEach((item) => {
    item();
});