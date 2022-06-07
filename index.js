document.getElementById('btn-calc').addEventListener('click', Calcular);

function Calcular() {
  const operador = document.querySelector('#sel-operator').value;
  const resultFinal= document.querySelector('#h2-result');
  operando1 = parseFloat(document.querySelector('#elemento1').value);
  operando2 = parseFloat(document.querySelector('#elemento2').value);
  let result = '';

  switch (operador){
    case "soma": 
      result = somar();
      break;
    case "subtracao": 
      result = subtrair();
      break;
    case "multiplicacao": 
      result = multiplicar();
      break;
    case "divisao": 
      result = dividir();
      break; 
  }
  
  console.log(result);
  if (isNaN(result)){
    resultFinal.textContent='Erro: Divisão por Zero!';
    console.log('Erro: Divisão por Zero!');
  } else {
    resultFinal.textContent='Resultado: ' + result;
    console.log('Resultado: ' + result);
  }
} 

function somar(){
  return (operando1 + operando2).toFixed(2);
}

function subtrair(){
  return (operando1 - operando2).toFixed(2);
}

function multiplicar(){
  return (operando1 * operando2).toFixed(2);
}

function dividir(){
  if (operando2==0){ //divisão com denominador=0
    alert('Erro: Divisão por Zero!');
    return 'Erro';
  }
  return (operando1 / operando2).toFixed(2);
}


