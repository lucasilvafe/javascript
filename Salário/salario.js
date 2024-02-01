function calcirpf()
{
    var salarioBruto = Number(document.querySelector('input#sal').value);
    var resultadoIrpf = document.querySelector('div#resultadoIrpf');
    var resultadoInss = document.querySelector('div#resultadoInss');
    var aliquoataIrpf = 0;
    var aliquoataInss = 7.5;

    if (salarioBruto <= 2112.00) 
    {

    }
    else
    { 
        if (salarioBruto <= 2826.65)
        {
            aliquoataIrpf = 7.5;
        }
        else
        {
            if (salarioBruto <= 3751.05)
            {
                aliquoataIrpf = 15;
            }
            else
            {
                if (salarioBruto <= 4664.68)
                {
                    aliquoataIrpf = 22.5;
                }
                else
                {
                    aliquoataIrpf = 27.5;
                }
            }
        }
    }

    if (salarioBruto <= 1412)
    {
        aliquoataInss = 7.5;
    }
    else
    {
        if (salarioBruto <= 2666.68)
        {
            aliquoataInss = 9;
        }
        else
        {
            if (salarioBruto <= 4000.03)
            {
                aliquoataInss = 12;
            }
            else
            {
                aliquoataInss = 14;
            }
        }
    }

    var descontoIrpf = salarioBruto * aliquoataIrpf / 100;
    var descontoInss = salarioBruto * aliquoataInss / 100;
    var salarioLiquidoIRPF = salarioBruto - descontoIrpf;
    var salarioLiquidoINSS = salarioBruto - descontoInss;
    console.log(salarioLiquidoIRPF)
    console.log(salarioLiquidoINSS)

    console.log(descontoIrpf)
    console.log(descontoInss)
    
    resultadoIrpf.innerHTML = `IRPF: Seu salário Liquido é de ${salarioLiquidoIRPF.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} Valor descontado foi ${descontoIrpf}R$ A aliquoata foi de ${aliquoataIrpf}%`
    resultadoInss.innerHTML = `INSS: E seu salário Liquido é de ${salarioLiquidoINSS.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} Valor descontado foi ${descontoInss}R$ A aliquoata foi de ${aliquoataInss}%`

}