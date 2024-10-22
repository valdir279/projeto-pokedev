const listaselecaoPokedevs = document.
querySelectorAll('.pokedev');
console.log(listaselecaoPokedevs);

listaselecaoPokedevs.forEach(pokedev =>{
    pokedev.addEventListener('click', () => {
     
   esconderCartaoPokedev();

   const idPokedevSelecionado = mostrarCartaoPokedevSelecionado(pokedev);

   desativarPokedevNalistagem();

   ativarPokedevSelecionadoNalistagem(idPokedevSelecionado);


    })

})

function ativarPokedevSelecionadoNalistagem(idPokedevSelecionado) {
    const pokedevSelecionadoNalistagem = document.getElementById(idPokedevSelecionado);
    pokedevSelecionadoNalistagem.classList.add("ativo");
}

function desativarPokedevNalistagem() {
    const pokedevAtivoNalistagem = document.querySelector(".ativo");
    pokedevAtivoNalistagem.classList.remove("ativo");
}

function mostrarCartaoPokedevSelecionado(pokedev) {
    const idPokedevSelecionado = pokedev.attributes.id.value;
    const idDocartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
    const cartaoPokedevParaAbrir = document.getElementById(idDocartaoPokedevParaAbrir);
    cartaoPokedevParaAbrir.classList.add("aberto");
    return idPokedevSelecionado;
}

function esconderCartaoPokedev() {
    const cartaoPokedevAberto = document.querySelector('.aberto');
    cartaoPokedevAberto.classList.remove('aberto');
}
