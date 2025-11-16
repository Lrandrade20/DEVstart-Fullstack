// Sem atalho booleano
function podeVotar(idade) {
	if (idade >= 16) {
		return true
	}
	else {
		return false
	}
}

// Com atalho booleano
// Na chamada dessa função o False já é incluso 
function podeVotar(idade) {
	return idade >= 16
}