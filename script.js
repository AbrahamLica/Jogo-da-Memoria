////////////////////////////////////////////////////////////////////////////////

var container = document.querySelector(".container")
var cards = document.querySelectorAll('.card-img')
var imgs = document.querySelectorAll(".img")
var botao = document.querySelector(".jogar-dnv")
var primeiroElemento = ''
var segundoElemento = ''

////////////////////////////////////////////////////////////////////////////////

cards.forEach(function(i) {
  addEventListener('click', revelaImagem)
})

////////////////////////////////////////////////////////////////////////////////

function revelaImagem(e) {
  var elemento = e.target

  if (elemento.classList.contains('jogar-dnv')) {
    reiniciarJogo()
  } else if (primeiroElemento == '') {
    if (elemento.children[0].classList.contains('img') == true) {
      elemento.children[0].classList.remove('none')
      elemento.children[0].classList.add('block')
      primeiroElemento = elemento.children[0]
    }
  } else if (segundoElemento == '') {
    if (elemento.classList.contains('img') == true) {
      return
    } else if (elemento.children[0].classList.contains('img') == true) {
      elemento.children[0].classList.remove('none')
      elemento.children[0].classList.add('block')
      segundoElemento = elemento.children[0]

      verificarPares()
    }


  }
}


////////////////////////////////////////////////////////////////////////////////

function verificarPares() {

  let primeiroElementoImagem = primeiroElemento.getAttribute('src')
  let segundoElementoImagem = segundoElemento.getAttribute('src')

  if (primeiroElementoImagem == segundoElementoImagem) {
    primeiroElemento.parentNode.style.backgroundColor = 'green';
    segundoElemento.parentNode.style.backgroundColor = 'green';
    primeiroElemento = ''
    segundoElemento = ''

    verificarJogo()
  } else {
    primeiroElemento.parentNode.style.backgroundColor = 'red';
    segundoElemento.parentNode.style.backgroundColor = 'red';
    setTimeout(() => {
      primeiroElemento.parentNode.style.backgroundColor = 'white';
      segundoElemento.parentNode.style.backgroundColor = 'white';
      primeiroElemento.classList.remove('block')
      segundoElemento.classList.remove('block')
      primeiroElemento = ''
      segundoElemento = ''
    }, 800);
  }
}
////////////////////////////////////////////////////////////////////////////////

function verificarJogo() {
  var imagensSelecionadas = document.querySelectorAll(".block")
  if (imagensSelecionadas.length === 16) {
    container.style.display = 'none'

    var parabens = document.querySelector(".container-parabens").cloneNode(true)
    var addParabens = document.querySelector('.container-master').appendChild(parabens)
    parabens.style.display = 'flex'
  }
}

////////////////////////////////////////////////////////////////////////////////

function adicionaImagens() {
  var arrayEmbaralhado = arrayImagens.sort(() => Math.random() - 0.5)
  for (var i = 0; i < 16; i++) {
    imgs[i].setAttribute('src', arrayEmbaralhado[i])
  }
}

////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////

function reiniciarJogo() {

  var containerParabens = document.querySelectorAll(".container-parabens")
  for (var i = 0; i < containerParabens.length; i++) {
    containerParabens[i].style.display = 'none'
  }

  container.style.display = 'flex'

  for (var i = 0; i < cards.length; i++) {
    cards[i].style.display = 'block'
    cards[i].style.backgroundColor = 'white'
  }

  for (var i = 0; i < imgs.length; i++) {
    imgs[i].classList.add('none')
    imgs[i].classList.remove('block')
  }

  adicionaImagens()

}


////////////////////////////////////////////////////////////////////////////////


window.addEventListener('load', adicionaImagens)
