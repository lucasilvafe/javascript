var notas = [
    [['Alan'],[8],[5.5],[3.2],[3.5]],
    [['Alex'],[7],[6.5],[10],[0]],
    [['Alisson'],[2],[1.5],[8],[0]],
    [['David'],[5],[7],[8],[9]],
    [['Daniel'],[10],[10],[0],[5]]
];

//pegue o numero de notas 1
var quantidadeNotas = notas[0][1];
var tamanhoNotas = notas.length;
var cont = 0;
for(var contadorDeColunas = 0; contadorDeColunas < 4; contadorDeColunas++)
    {
        console.log('Coluna1'+ notas[0][1])
        for (var contadorDeLinhas = 0; contadorDeLinhas < tamanhoNotas; contadorDeLinhas++)
        {
            console.log('linha')
        }
        
    }


//calcule a média 3 = 2/1
while (cont < tamanhoNotas)
        {
            console.log(notas[0][cont])
            cont++
        }
        