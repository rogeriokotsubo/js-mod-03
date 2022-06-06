document.getElementById('btn-calc').addEventListener('click', Calcula);

function Calcula() {
  const operador = document.querySelector("#sel-operator").value;
  operando1 = parseFloat(document.querySelector("#elemento1").value);
  operando2 = parseFloat(document.querySelector("#elemento2").value);

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
  
  const resultFinal= document.querySelector("#h2-result");
  resultFinal.textContent=result;
  console.log(result);
} 

function soma(){
  let result = operando1 + operando2;
  console.log(result);
  return 'Resultado: ' + result.toFixed(2);
}

function subtracao(){
  let result = operando1 - operando2;
  return 'Resultado: ' + result.toFixed(2);
}

function multiplicacao(){
  let result = operando1 * operando2;
  return 'Resultado: ' + result.toFixed(2);
}

function divisao(){
  if (operando2==0){ //divisão com denominador=0
    alert('Divisão por Zero!');
    return 'Divisão por Zero!';
  }
  let result = operando1 / operando2 ;
  return 'Resultado: ' + result.toFixed(2) ;
}


