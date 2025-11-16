// Exemplo de herança errada

class Quadrado extends Retangulo {
    //...
}

class Retangulo {
    //...
}

// Maneira correta
class Retangulo {
    //...
}

class Quadrado extends Retangulo {
    //...
}


// Obs: A ordem é importante, o pai deve vir antes do filho.