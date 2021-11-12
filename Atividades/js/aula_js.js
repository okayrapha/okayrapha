// Cálculo de salário


função  novoSal ( salAntig  = 280 ,  salNovoColab )  {

    if ( salAntig  <=  280 ) {
        salNovoColab  =  salAntig  *  0,2  +  salAntig

        console . log ( `O novo salário é $ { salNovoColab } ` )

    }  else  if  ( salAntig  >  280  ||  salAntig  <=  700 )  {
        salNovoColab  =  salAntig  *  0,15  +  salAntig

        console . log ( `O novo salário é $ { salNovoColab } ` )

    }  else  if  ( salAntig  > 700  ||  salAntig  <=  1500 ) {
        salNovoColab  =  salAntig  *  0.1  +  salAntig

        console . log ( `O novo salário é $ { salNovoColab } ` )

    }  else  {
        salNovoColab  =  salAntig  *  0,05  +  salAntig

        console . log ( `O novo salário é $ { salNovoColab } ` )
    } ;
function  novoSal ( salAntig  =  280 ,  salNovoColab ,  aumento )  {
    if  ( salAntig  <=  280 )  {
        aumento  =  salAntig  *  0,2 ;
    } 
        else  if  ( salAntig  >  280  &&  salAntig  <=  700 )  {
            aumento  =  salAntig  *  0,15 ;
        } 
            else  if  ( salAntig  >  700  &&  salAntig  <=  1500 )  {
            aumento  =  salAntig  *  0,1 ;
            } 
                else  {
                    aumento  =  salAntig  *  0,05 ;
                }     
    retornar  salNovoColab  =  salAntig  +  aumento  
}
console . log ( novoSal ( ) )
console . log ( novoSal ( ) ) ;

console . limpar ( ) ;

function  maiorNumero ( num1  =  2 ,  num2  =  3 ,  num3  =  6 )  {
    if  ( num1  >  num2  &&  num1  >  num3 ) {
        console . log ( `O numero $ { num1 } é o maior` ) ;
    }  else  if  ( num2  >  num1  &&  num2  >  num3 ) {
        console . log ( `O numero $ { num2 } é o maior` ) ;
    }  else {
        console . log ( `O numero $ { num3 } é o maior` ) ;
    }   
    if  ( num1  >  num2  &&  num1  >  num3 ) { 
        return `O numero $ { num1 } é o maior` ; 
    }  else  if  ( num2  >  num1  &&  num2  >  num3 ) { 
        return `O numero $ { num2 } é o maior` ; 
    }  else { 
        return `O numero $ { num3 } é o maior` ; 
    }
}
console . log ( maiorNumero ( ) ) 
console . log ( maiorNumero ( ) ) ;