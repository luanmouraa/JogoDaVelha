let contador = 0;
var itensClasse = document.querySelectorAll('.botao');


function botaoSelecionado(botao){

	if (botao.innerHTML == "&nbsp;") {
		switch(contador){
			case 0:
				botao.textContent = 'O';
				botao.style.color = "black";
				contador++;
				break;
			case 1:
				botao.textContent = 'X';
				botao.style.color = "purple";
				contador--;
				break;
		}
	}
}

function resetGame(){
	for (let i = 0; i < 9; i++) {
		itensClasse[i].innerHTML = '&nbsp;';
	}
}