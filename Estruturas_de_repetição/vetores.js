var nomeDosAlunos = ['A', 'B', 'C','D', 'E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T']
var idade = [' 1', ' 2', ' 3',' 4', ' 5',' 6',' 7',' 8',' 9',' 10',' 11',' 12',' 13',' 14',' 15',' 16',' 17',' 18',' 19',' 20']
var tamanhoDoVetor = nomeDosAlunos.length
for (var contador = tamanhoDoVetor; contador >= 0; contador--)
{
    console.log(nomeDosAlunos[contador] + idade[contador])
}
    console.log(nomeDosAlunos.indexOf('A'))

/*
var i = ['Primeiro','Segundo','Terceiro','Quarto']
var count = 0;
var tamanhoDoVetor = i.length
while( count < tamanhoDoVetor)
{
    console.log(i[count])
    count++
}
*/



/*
var i = ['1','2','3','4']
var count = 0;
var tamanhoDoVetor = i.length
while( count < tamanhoDoVetor)
{
    count++
}
console.log(`Vetor original ${i}`)
//Adiciona um elemento no final do vetor
i.push('5');
console.log(`Adiciona um elemento no final ${i}`)


//Remove um elemento no final do vetor
i.pop();
console.log(`Remove um elemento no final ${i}`)


//Remove o elemento no começo do vetor
i.shift();
console.log(`Remove o elemento no começo do vetor ${i}`)

//Adiciona o elemento no começo do vetor
i.unshift('Hutao');
console.log(i)

console.log(i.indexOf('Hutao'))
*/