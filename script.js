function calcular(tipo, valor) {

    console.log(tipo, valor)

    if(tipo === 'acao') {

        if (valor === '=') {

            var valor_campo = document.getElementById('numeros').value
    
            document.getElementById('numeros').value = eval(valor_campo)
    
        } else if (valor === '.') {

            document.getElementById('numeros').value += valor

        } else {

            document.getElementById('numeros').value += ' '+valor+' '

        }

    } else if (tipo === 'valor') {

        document.getElementById('numeros').value += valor

    }

}

function apagar() {

    document.getElementById('numeros').value = ''

}