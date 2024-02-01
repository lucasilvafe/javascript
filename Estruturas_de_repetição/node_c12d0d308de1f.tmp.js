//Esse vetor contem a ordem correta do puzzle
var sequenciaCorreta = [8, 1, 4, 7]
var minhaSequencia = [0, 1, 4, 8]
var tamanhoDaSequenciaCorreta = sequenciaCorreta.length;
var tamanhoDaminhaSequencia = minhaSequencia.length;
var contadorDeIndice = 0;



for (let inicioCorreto = 0; inicioCorreto < tamanhoDaSequenciaCorreta; inicioCorreto++)
{
    //Assim que este laço for execultado, a var indice voltara a ser 0
    var indice = 0;
    console.log('Primeiro laço')
    //console.log(sequenciaCorreta[contadorDeIndice] + ' Está no Indice ' + contadorDeIndice)
    contadorDeIndice++


    for (let minhaOrdem = 0; minhaOrdem <= indice; minhaOrdem++)
    {
        console.log('Segundo laço')
        //console.log(minhaSequencia[indice] + ' Está no indice ' + indice)
        indice++
    }
    /**/
}

/*var t = 3;
if (sequenciaCorreta[t] == minhaSequencia[t])
{
    contador++
    console.log('Correto')
}
else
{
    console.log('Você errou')
}
*/
