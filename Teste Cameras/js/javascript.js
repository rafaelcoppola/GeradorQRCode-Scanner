//verificar se tem campos vazios ou invalidos
(function() {
  'use strict';
  window.addEventListener('load', function() {
    var forms = document.getElementsByClassName('needs-validation');
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

//gerador de QRCode
let content = document.querySelectorAll('input')
let dices = []
let Googlecharts = 'https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl='
let Randomkey = Math.floor(Math.random()  * 1000000000000000000)
let UserId = content + Randomkey
let Imageqrcode = Googlecharts + Randomkey  
function generate() {
  dices.push(content.value)
  if ( content.value > 0) {
    document.getElementById('qr-code').src = Imageqrcode;
    document.getElementById('iduser').value = Randomkey
    alert(`QRCode Gerado com Sucesso dados com os seguintes dados: ${dices}`)
    console.log(dices)
  }else {
    alert("Impossivel Gerar QRCode")
    console.log(dices)
  }
}

//impressão
document.getElementById('print').onclick = function() {
  let content = document.getElementById('code').innerHTML,
  tela_impressao = window.open('about:blank');

  tela_impressao.document.write(content);
  tela_impressao.window.print();
  tela_impressao.window.close();
};

 