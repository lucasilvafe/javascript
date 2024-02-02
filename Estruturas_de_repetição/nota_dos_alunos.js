var notas = [
    [['Lucas'], [10],[100],[600]],
    [['Matheus1'], [5],[6],[2]],
    [['Matheus2'], [5],[8],[3]],
    [['Eduanea'], [0],[6],[7]],
    [['Rodolfo'], [9],[5],[2]],
    [['Suzana'], [5],[7],[5]],
    [['Gustavo'], [5],[9],[0]],
    [['Gabriel'], [7],[8],[9]],
    [['Diego'], [5],[6],[4]]
]
//Armazena a quantidade de linhas
var tamanhoLinhas = notas[0].length-1;
//Armazena a quantidade de colunas
var tamanhoColunas = notas.length;

console.log('Comprimento da primeira linha é :' + tamanhoLinhas)
console.log('Quantidade de colunas é: ' + tamanhoColunas)
console.log('==================')

function totalDeAlunos()
{
    var quantidadeAlunos =0
    var posAluno = 0
    while (quantidadeAlunos < tamanhoColunas)
    {
        console.log('Notas')
        for (var linha = 0; linha <= tamanhoLinhas; linha++)
        {
            console.log(notas[posAluno][linha])
        }
        quantidadeAlunos++
        posAluno++
    }   
}
return totalDeAlunos()