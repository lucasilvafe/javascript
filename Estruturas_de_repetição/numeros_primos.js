var inicio =0;
var final = 50;
var fimSegundoContador = 1;

while (inicio < final)
{
	var contador = 0;
	
	for (var inicioSegundoContador = 1; inicioSegundoContador <= fimSegundoContador; inicioSegundoContador++)
	{
		if(fimSegundoContador % inicioSegundoContador == 0) // Se o resto da divisão de 'fimSegundoContador' e inicioSegundoContador' for igual a 0
		{
			contador++ // Contador receberá +1
		}
	}

	if (contador == 2)
	{
        console.log(fimSegundoContador + " é número Primo");
    }

    fimSegundoContador++;
    inicio++;
}