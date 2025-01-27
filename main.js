import "./style.css";

//1. Selecciono los botones del HTML
let numeros = document.querySelectorAll(".number");
let signos = document.querySelectorAll(".signo");
let display = document.querySelector("#resultado");
let igual = document.querySelector("#igual");
let punto = document.getElementById("punto");
let resultado = document.getElementById("resultado");
let mostrar = "";
let input = "";
let signo;
let valores = [];

//Registrar en un input los digitos ingresados en la calculadora
numeros.forEach((n) => {
  n.addEventListener("click", () => {
    if (mostrar.length < 13) {
      mostrar += n.innerHTML;
      input += n.innerHTML;
      resultado.value = mostrar;
    }
  });
});

//Restringir solo un punto para un numero
punto.addEventListener("click", () => {
  if (mostrar.indexOf(".") === -1 && mostrar.length >= 1) {
    mostrar += punto.innerHTML;
    input += punto.innerHTML;
    resultado.value = mostrar;
  }
});

//Restringir solo un signo por operación
signos.forEach((x) => {
  x.addEventListener("click", () => {
    if (mostrar.indexOf(signo) === -1 && mostrar.length >= 1) {
      //Guardar mi string como un valor de un array
      signo = x.innerHTML;
      console.log(input);
      valores.push(Number(input));
      valores.push(signo);
      mostrar += signo;
      resultado.value = mostrar;
      input = "";
    }
  });
});

//El display cada vez se realiza click se recetea
display.addEventListener("click", () => {
  resultado.value = "";
  input = "";
  mostrar = "";
  valores = [];
  console.log(resultado.value);
});
//Los valores los convertimos en un array [ valor1; signo ; valor2]
igual.addEventListener("click", () => {
  valores.push(Number(input));
  let op = operacion(valores[1], valores[0], valores[2]);
  resultado.value = op;
  input = op;
  mostrar = String(op);
  valores = [];
});

//Los valores ingresador realizan la operación asignada
function operacion(signo, valor1, valor2) {
  switch (signo) {
    case "+":
      return valor1 + valor2;
    case "-":
      return valor1 - valor2;
    case "x":
      return valor1 * valor2;
    case "/":
      return valor1 / valor2;
  }
}
