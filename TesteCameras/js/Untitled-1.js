//gerador de QRCode
let content = document.querySelector('input')
let but = document.querySelector('#send')
let dices = []
function generate() {
  dices.push(content.value)
  //let name = document.querySelector('#name').value
  //let cpf = document.querySelector('#cpf').value
  let Googlecharts = 'https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl='  
  if ( content.value <= 0) {
    alert("Impossivel Gerar QRCode")      
  }else {
    let Randomkey = Math.floor(Math.random()  * 1000000000000000000)
    let UserId = content + Randomkey
    let Imageqrcode = Googlecharts + Randomkey
    document.getElementById('qr-code').src = Imageqrcode;
    document.getElementById('iduser').value = Randomkey
    //document.getElementById('dados').innerHTML = `O ID do usuario ${name} portador do cpf numero: ${cpf} é ${Randomkey}`
    alert("QRCode Gerado com Sucesso")
  }
}   