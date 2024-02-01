function contar()
{
    var inicio = Number(document.querySelector('input#ini').value);
    var final = Number(document.querySelector('input#fin').value);
    var contador = inicio;
    var acumulador = 0;

   while(contador <= final)
   {
        acumulador+=contador;
        contador++;
   }
   console.log(acumulador);
}