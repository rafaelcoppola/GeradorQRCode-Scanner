//gerador de QRCode
function gerar() {
  var content = [
    document.querySelector('#nome').value,
    document.querySelector('#cpf').value    
  ]
  var records = []
  var name = document.querySelector('#nome').value
  var cpf = document.querySelector('#cpf').value
  var Googlecharts = 'https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl='  
  records.push(UserId)
  console.log(records.length)
  if (name.length, cpf.length <=0) {
      alert("Impossivel Gerar QRCode")      
  }else {
    var Randomkey = Math.floor(Math.random() * 1000000000000000000)
    var UserId = content + Randomkey
    var Imageqrcode = Googlecharts + Randomkey
    document.getElementById('qr-code').src = Imageqrcode;
    document.getElementById('iduser').value = Randomkey
    document.getElementById('dados').innerHTML = `O ID do usuario ${name} portador do cpf numero: ${cpf} é ${Randomkey}`
    alert("QRCode Gerado com Sucesso")
  }
  var find = records.indexOf(UserId === Randomkey)
  console.log(find)
}


//impressão
document.getElementById('btn').onclick = function() {
  var conteudo = document.getElementById('sua_div').innerHTML,
  tela_impressao = window.open('about:blank');

  tela_impressao.document.write(conteudo);
  tela_impressao.window.print();
  tela_impressao.window.close();
};

 