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
function generate() {
  var content = [
    document.querySelector('#name').value,
    document.querySelector('#pis').value,
    document.querySelector('#cpf').value,
    document.querySelector('#user').value,
    document.querySelector('#password').value,
    document.querySelector('#checkpassword').value,
    document.querySelector('#cep').value,
    document.querySelector('#city').value,
    document.querySelector('#state').value,
    document.querySelector('#address').value,
    document.querySelector('#addressnumber').value,   
  ]
  var records = []
  //var name = document.querySelector('#name').value
  //var cpf = document.querySelector('#cpf').value
  var Googlecharts = 'https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl='  
  if ( Array.isArray(content) && content.values >= 0) {
    alert("Impossivel Gerar QRCode")      
  }else {
    var Randomkey = Math.floor(Math.random()  * 1000000000000000000)
    var UserId = content + Randomkey
    var Imageqrcode = Googlecharts + Randomkey
    document.getElementById('qr-code').src = Imageqrcode;
    document.getElementById('iduser').value = Randomkey
    //document.getElementById('dados').innerHTML = `O ID do usuario ${name} portador do cpf numero: ${cpf} é ${Randomkey}`
    alert("QRCode Gerado com Sucesso")
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

 