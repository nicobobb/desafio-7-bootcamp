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

  inputs[0].addEventListener("click", function () {
    destino.innerHTML = textArea.value;
    textArea.value = "";
  });

  inputs[1].addEventListener("click", function () {
    agregarTexto(1);
  });

  inputs[2].addEventListener("click", function () {
    agregarTexto(5);
  });

  inputs[3].addEventListener("click", function () {
    agregarTexto(10);
  });

  inputs[4].addEventListener("click", function () {
    const n = prompt("¿Cuántas veces querés repetir el texto?");
    agregarTexto(n);
  });

  inputs[5].addEventListener("click", function () {
    destino.innerHTML = "";
  });

  inputs[6].addEventListener("click", function () {
    destino.innerHTML = destino.innerHTML.toUpperCase();
  });

  button[0].addEventListener("click", function () {
    destino.innerHTML = destino.innerHTML.toLowerCase();
  });

  for (let i = 0; i < allLi.length; i++) {
    allLi[i].innerHTML = `[Ok] ${allLi[i].innerHTML}`;
  }
});
