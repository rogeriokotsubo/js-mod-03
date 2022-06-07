document.getElementById('btn-calc').addEventListener('click', Calcular);

function Calcular() {
  const operador = document.querySelector('#sel-operator').value;
  const resultFinal= document.querySelector('#h2-result');
  operando1 = parseFloat(document.querySelector('#elemento1').value);
  operando2 = parseFloat(document.querySelector('#elemento2').value);
  let result = '';

  switch (operador){
    case "soma": 
      result = somar(2);
      break;
    case "subtracao": 
      result = subtrair(2);
      break;
    case "multiplicacao": 
      result = multiplicar(2);
      break;
    case "divisao": 
      result = dividir(2);
      break; 
  }
  
  if (isNaN(result)){
    resultFinal.textContent='Erro: Divisão por Zero!';
    console.log('Erro: Divisão por Zero!');
  } else {
    resultFinal.textContent='Resultado: ' + result;
    console.log('Resultado: ' + result);
  }
} 

function somar(decimais){
  return (operando1 + operando2).toFixed(decimais);
}

function subtrair(decimais){
  return (operando1 - operando2).toFixed(decimais);
}

function multiplicar(decimais){
  return (operando1 * operando2).toFixed(decimais);
}

function dividir(decimais){
  if (operando2==0){ //divisão com denominador=0
    alert('Erro: Divisão por Zero!');
    return 'Erro';
  }
  return (operando1 / operando2).toFixed(decimais);
}


