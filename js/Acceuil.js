

// Definindo a data de término da promoção
var endDate = new Date();
endDate.setHours(endDate.getHours() + 1);
endDate.setMinutes(endDate.getMinutes() + 22);
endDate.setSeconds(endDate.getSeconds() + 34);

// Função para atualizar a contagem regressiva a cada segundo
var countdown = setInterval(function () {
  var now = new Date().getTime();
  var distance = endDate - now;

  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("hours").innerHTML = hours + "h";
  document.getElementById("minutes").innerHTML = minutes + "mn";
  document.getElementById("seconds").innerHTML = seconds + "s";

  // Se a contagem regressiva terminar, exibe uma mensagem
  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("hours").innerHTML = "00h";
    document.getElementById("minutes").innerHTML = "00mn";
    document.getElementById("seconds").innerHTML = "00s";
  }
}, 1000);

