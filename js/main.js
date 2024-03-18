let contador = document.getElementById('calculadora');
function obtenerValores(valor){
    
    contador.value += valor;
}

function borrarElementos(){
    contador.value = '';
}


function precedimiento(){
    try {
        let resultado = eval(contador.value);
        contador.value = resultado;
        
    } catch (error) {
        alert('no valido');
        contador.value = '';
    }
}

