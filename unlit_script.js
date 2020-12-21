var btn = document.querySelector('button[class="add-to-cart"]');
btn.onclick = function () {
  var selectedInput = document.querySelector("input[name=seleccion]:checked");
  window.location = selectedInput.dataset.url;
}

function increaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number').value = value;
}

  function decreaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number').value = value;
}
