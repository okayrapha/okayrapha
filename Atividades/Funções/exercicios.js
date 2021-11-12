// Funções
função  addNums ( num1  =  1 ,  num2  =  1 )
{
    retornar  num1  +  num2 ;
}

deixe  x  =  addNums ( 1 ,  2 ) ;  // Chamada da função addNums
console . log ( x ) ;

seja  z  =  meuFunc ( 3 ,  4 ) ;  // Chamada da fução myFunc
console . log ( z ) ;

função  myFunc ( num1 ,  num2 )
{
    retornar  num1  *  num2 ;
}

// Funções de seta
console . limpar ( ) ;
const  hello  =  ( )  =>  {
    return  'Olá Arrow Function!' ;
} ;

console . log ( olá ) ;    // Retorna o objeto função
console . log ( olá ( ) ) ;  // Executa uma função e imprime uma string sem retorno

console . limpar ( ) ;
const  addNums2  =  ( num1  =  6 ,  num2  =  6 )  =>  {
    retornar  num1  +  num2 ;
} ;

deixe  soma  =  addNums2 ( 15 ,  30 ) ;
console . log ( soma ) ;

// Eventos
console . limpar ( ) ;
const  boasVindas  =  ( )  =>  {
    alerta ( 'Bem vindo a nossa página' ) ;
    console . log ( 'Bem vindo a nossa página' ) ;
} ;

const  eventClique  =  ( )  =>  {
    console . log ( 'Você clicou no botão' ) ;
} ;

const  mouseEmCima  =  ( )  =>  {
    console . log ( 'Mouse está em cima do título' ) ;
} ; 