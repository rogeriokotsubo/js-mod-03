document.getElementById('btn-calc').addEventListener('click', Calcula);

function Calcula() {
  const operador = document.querySelector('#sel-operator').value;
  const resultFinal= document.querySelector('#h2-result');
  operando1 = parseFloat(document.querySelector('#elemento1').value);
  operando2 = parseFloat(document.querySelector('#elemento2').value);
  let result = '';

  switch (operador){
    case "soma": 
      result = soma();
      break;
    case "subtracao": 
      result = subtracao();
      break;
    case "multiplicacao": 
      result = multiplicacao();
      break;
    case "divisao": 
      result = divisao();
      break; 
  }
  
  resultFinal.textContent=result;
  console.log(result);
} 

function soma(){
  const res = operando1 + operando2;
  return 'Resultado: ' + res.toFixed(2);
}

function subtracao(){
  const res = operando1 - operando2;
  return 'Resultado: ' + res.toFixed(2);
}

function multiplicacao(){
  const res = operando1 * operando2;
  return 'Resultado: ' + res.toFixed(2);
}

function divisao(){
  if (operando2==0){ //divisão com denominador=0
    alert('Divisão por Zero!');
    return 'Divisão por Zero!';
  }
  const res = operando1 / operando2 ;
  return 'Resultado: ' + res.toFixed(2) ;
}


