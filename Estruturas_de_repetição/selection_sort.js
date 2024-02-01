console.log('---------------')
console.log('Selection sort')
console.log('---------------')

const vetorDesordenado = [130, 40, 1, 32, 45, 345, 72, 21, 10, 57];

// Cria um vetor
var meuVetor = [130, 40, 1, 32, 45, 345, 72, 21, 10, 57];
// Obtém o tamanho do vetor
var tamanhoDoVetor = meuVetor.length;

// Loop que percorre cada elemento do vetor
for(var inicio = 0; inicio < tamanhoDoVetor; inicio++)
{
    console.log(`Vetor Ordenado ${meuVetor}`)
 // Assume que o índice atual (inicio) é o mínimo
   var min = inicio;
    for(var loop2 = inicio+1; loop2 < tamanhoDoVetor; loop2++)
    {
        // Se o elemento a é menor que o elemento mínimo encontrado até agora
        if(meuVetor[loop2] < meuVetor[min])
        {
        // Atualiza o índice do elemento mínimo
            min=loop2; 
        }
     }
     // Se o índice mínimo encontrado não é igual ao índice atual, troca os elementos
     if (min != inicio)
     {
        // Troca os elementos usando uma variável temporária
         var temporario = meuVetor[inicio]; 
         meuVetor[inicio] = meuVetor[min];
         meuVetor[min] = temporario;  
    }
}
    console.log(`Foram feitas ${loop2} trocas`) 
    //Mostra no console os valores dentro da variavel vetorDesordenado
    console.log(`Vetor Desordenado ${vetorDesordenado}`)
    //Mostra no console os valores dentro da variavel meuVetor
    console.log(`Vetor Ordenado ${meuVetor}`)