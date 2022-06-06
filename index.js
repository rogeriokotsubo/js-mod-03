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
  
  resultFinal.textContent=result;
  console.log(result);
} 

function somar(){
  const res = operando1 + operando2;
  return 'Resultado: ' + res.toFixed(2);
}

function subtrair(){
  const res = operando1 - operando2;
  return 'Resultado: ' + res.toFixed(2);
}

function multiplicar(){
  const res = operando1 * operando2;
  return 'Resultado: ' + res.toFixed(2);
}

function dividir(){
  if (operando2==0){ //divisão com denominador=0
    alert('Divisão por Zero!');
    return 'Divisão por Zero!';
  }
  const res = operando1 / operando2 ;
  return 'Resultado: ' + res.toFixed(2) ;
}


