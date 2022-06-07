document.getElementById('btn-calc').addEventListener('click', Calcular);

function Calcular() {
  const operador = document.querySelector('#sel-operator').value;
  const resultFinal= document.querySelector('#h2-result');
  operando1 = parseFloat(document.querySelector('#elemento1').value);
  operando2 = parseFloat(document.querySelector('#elemento2').value);
  let result = '';

  switch (operador){
    case "soma": 
      result = somar(operando1,operando2,2);
      break;
    case "subtracao": 
      result = subtrair(operando1,operando2,2);
      break;
    case "multiplicacao": 
      result = multiplicar(operando1,operando2,2);
      break;
    case "divisao": 
      result = dividir(operando1,operando2,2);
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

function somar(operando1,operando2,decimais){
  return (operando1 + operando2).toFixed(decimais);
}

function subtrair(operando1,operando2,decimais){
  return (operando1 - operando2).toFixed(decimais);
}

function multiplicar(operando1,operando2,decimais){
  return (operando1 * operando2).toFixed(decimais);
}

function dividir(operando1,operando2,decimais){
  if (operando2==0){ //divisão com denominador=0
    alert('Erro: Divisão por Zero!');
    return 'Erro';
  }
  return (operando1 / operando2).toFixed(decimais);
}


