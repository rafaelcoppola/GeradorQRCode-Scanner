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
//let content = [ document.getElementsByTagName('input')]


//Api QRCode
var Googlecharts = 'https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl='

//Chave Aleatoria
var Randomkey = Math.floor(Math.random()  * 1000000000000000000)

//var UserId =  

var Imageqrcode = Googlecharts + Randomkey
function generate() {
  //Dados Input do formulario
var nome = document.getElementById("#name").value
var pis = document.getElementById('#pis').value
var cpf = document.getElementById('cpf').value
var user = document.getElementById('user').value
var password = document.getElementById('password').value
var checkpassword = document.getElementById('checkpassword').value
var cep = document.getElementById('cep').value
var city = document.getElementById('city').value
var state = document.getElementById('state').value
var address = document.getElementById('address').value
var addressnumber = document.getElementById('addressnumber').value
var complement = document.getElementById('complement').value
  console.log(`Cliente ${nome} do pis ${pis}`)
}

//impressão
document.getElementById('print').onclick = function() {
  let content = document.getElementById('code').innerHTML,
  tela_impressao = window.open('about:blank');

  tela_impressao.document.write(content);
  tela_impressao.window.print();
  tela_impressao.window.close();
};

 