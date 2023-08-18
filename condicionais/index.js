const valorDaCompra = 100;
const numeroDeParcelas = 2;

let valorAPagar = valorDaCompra;
let desconto = 0;

if (numeroDeParcelas === 1){
  desconto = (valorDaCompra * 0.1);
  valorAPagar = valorDaCompra - desconto;
  console.log("Valor a pagar: ${valorAPagar}");
}
else{
  const parcelas = valorDaCompra / numeroDeParcelas;
  console.log("Valor das parcelas: ${valorAPagar}");
}
