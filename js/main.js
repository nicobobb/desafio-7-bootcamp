document.addEventListener("DOMContentLoaded", function () {
  console.log("Contenido del DOM cargado");

  const textArea = document.getElementById("origen");
  const destino = document.getElementById("destino");
  const inputs = document.getElementsByTagName("input");
  const button = document.getElementsByTagName("button");
  const allLi = document.getElementsByTagName("li");

  function agregarTexto(n) {
    for (let i = 0; i < n; i++) {
      destino.innerHTML += textArea.value;
    }
  }

  textArea.value =
    "<p>Este contenido <strong>está listo</strong><br>para ser editado y pasarlo abajo.</p>";

  textArea.addEventListener("input", function () {
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].disabled = false;
    }
    button[0].disabled = false;
  });

  // Botón de Reemplazar
  inputs[0].addEventListener("click", function () {
    destino.innerHTML = textArea.value;
    textArea.value = "";
  });

  // Botón de Agregar
  inputs[1].addEventListener("click", function () {
    agregarTexto(1);
  });

  // Botón de Agregar 5 veces
  inputs[2].addEventListener("click", function () {
    agregarTexto(5);
  });

  // Botón de Agregar 10 veces
  inputs[3].addEventListener("click", function () {
    agregarTexto(10);
  });

  // Botón de Agregar N veces
  inputs[4].addEventListener("click", function () {
    let n = prompt("¿Cuántas veces querés repetir el texto?");
    n = parseInt(n);
    if (isNaN(n) || n < 1) {
      alert("No ingresaste un número válido.");
    } else {
      agregarTexto(n);
    }
  });

  // Botón de Limpiar
  inputs[5].addEventListener("click", function () {
    destino.innerHTML = "";
  });

  // Botón de Mayúsculas
  inputs[6].addEventListener("click", function () {
    destino.innerHTML = destino.innerHTML.toUpperCase();
  });

  // Botón de Minúsculas
  button[0].addEventListener("click", function () {
    destino.innerHTML = destino.innerHTML.toLowerCase();
  });

  // Consigna 7 - Escribir [Ok] al principio de cada <li>
  for (let i = 0; i < allLi.length; i++) {
    allLi[i].innerHTML = `[Ok] ${allLi[i].innerHTML}`;
  }
});
