var notas = [
    [['Lucas'], [1],[5],[6]],
    [['Matheus1'], [8],[6],[5]],
    [['Matheus2'], [8],[8],[4]],
    [['Eduanea'], [10],[6],[7]],
    [['Rodolfo'], [9],[5],[5]],
    [['Suzana'], [5],[7],[8]],
    [['Gustavo'], [5],[9],[10]],
    [['Gabriel'], [7],[7],[9]],
    [['Diego'], [9],[5],[6]]
]
//Armazena a quantidade de linhas
var tamanhoLinhas = notas[0].length-1;
//Armazena a quantidade de colunas
var tamanhoColunas = notas.length;

console.log('Comprimento da primeira linha é :' + tamanhoLinhas)
console.log('Quantidade de colunas é: ' + tamanhoColunas)
console.log('==================')

//Este bloco varre o vetor notas
function totalDeAlunos()
{
    var quantidadeAlunos = 0
    while (quantidadeAlunos < tamanhoColunas)
    {
        console.log('Notas')
        for (var linha = 0; linha <= tamanhoLinhas; linha++)
        {
            console.log(notas[quantidadeAlunos][linha])
        }
        quantidadeAlunos++
    }   
}
//Aqui a função totalDeAlunos é chamada
totalDeAlunos()

console.log('============Resultado Final===============')

function calculoNotaAluno()
{
for(var indexDoAluno = 0; indexDoAluno < tamanhoColunas; indexDoAluno++)
{
    var nota = 0;
    for(var indexNota = 1; indexNota <= tamanhoLinhas; indexNota++)
    {
        nota = nota + Number(notas[indexDoAluno][indexNota])
    }
    var media = nota / tamanhoLinhas
    var aprov;
    console.log(`A soma das notas de ${notas[indexDoAluno][0]} foi: ${nota}`)
    if (media > 6)
    {
        aprov = 'APROVADO'
    }
    else
    {
        aprov = 'REPROVADO'
    }
    console.log(`Com média de ${media.toFixed(1)} o aluno(a) está ${aprov}`)
    console.log('')
}
}
    calculoNotaAluno()
