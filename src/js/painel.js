

alert('preciso resolver o problema da seta voltar ir direto para a primeira imagem, mesmo eu estando na ultima')

const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

function esconderImagens() {
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });
}

function mostrarImagens() {
    imagensPainel[imagemAtual].classList.add('mostrar');

}

setaAvancar.addEventListener('click', function () {

    const totalDeImagens = imagensPainel.length - 1;
    if (imagemAtual === totalDeImagens) {
        console.log('não pode avançar mais');
        return

    }

    imagemAtual++;

    esconderImagens();
    mostrarImagens();

});


setaVoltar.addEventListener('click', function () {


    if (imagemAtual === 0) {
        console.log('não tem mais como voltar')
        return;
    }

    imagemAtual--;

    esconderImagens();
    mostrarImagens();




});
