function validarCpf()
{
    var cpf = document.querySelector('input#cpf').value;
    const tamanho = 9;
    var cpfNumerico = [];
    
    for (let inicio = 0; inicio < tamanho; inicio++)
    {
        cpfNumerico[inicio] = Number(cpf[inicio]);
    }
    cpfNumerico.push(calculoVerificador(cpfNumerico, 10));
    cpfNumerico.push(calculoVerificador(cpfNumerico, 11));

    document.querySelector('div#resp').innerHTML = cpfNumerico.join('');
}

function calculoVerificador(cpfNumerico, posicao)
{
    let contador = 0;
    var acumulador = 0, posicao;
    for (indexcpf = 0; indexcpf < cpfNumerico.length; indexcpf++)
    {
        acumulador = acumulador + (cpfNumerico[contador]*posicao)
        contador++
        posicao--
    }
    var resto = acumulador%11;
    return resto < 2 ? 0: 11 - resto;
}