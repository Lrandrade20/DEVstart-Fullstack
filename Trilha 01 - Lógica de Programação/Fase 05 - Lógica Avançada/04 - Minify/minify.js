// JS e o ponto e vírgula

// Minify

// Função para adicionar um item à matriz
function adicionar(itens, item) {
    itens.push(item)
    return itens
}

// Função para exportar matriz em formato CSV
function exportaCSV(itens) {
    return itens.map(function(item) {
        return item.toLowerCase()
    }).join(", ")
}

// Códigos acima após minificação
// Com o minify o código fica compactado em uma linha unica
// No processo de minificação são adicionados os ';'
// A minificação acontece de modo automatico com ferramentas 'webpack' ou 'parcel'
function adicionar(itens, item){itens.push(item); return itens;} function exportaCSV(itens) {return itens.map(function(item){return item.toLowerCase();}).join(", ");}

// IMPORTANTE: Não devemos minifcar o código manualmente!!!!!