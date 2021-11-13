let saldo_bancario = parseInt(prompt("Digite o saldo inicial"))
let valor_realizado = 
let valor_insuficiente = 3000


if (saldo_bancario >= valor_realizado){
    saldo_bancario = saldo_bancario - valor_realizado
    alert("Ocorreu corretamente!")

}else if( saldo_bancario >= valor_insuficiente){
    saldo_bancario = saldo_bancario - valor_insuficiente
    alert("Saldo insuficiente!")
}
 else{
     alert("Saldo_insuficiente!")
 }
