// metodo getElementById

let  titulo  =  document . getElementById ( "Titulo" ) ;

// alterando o conteudo do elemento

titulo . innerHTML  =  'Olá meus caros alunos!' ;

// configurando o estilo do css do elemento

titulo . estilo . textAlign  =  'centro' ;

titulo . estilo . backgroundColor  =  '# CCCCC9' ;
titulo . estilo . borderBottom  =  'sólido 3x # 000' ;
titulo . estilo . margem  =  '20px' ;

// metodo getElementsByClassName

deixe  itens  =  documento . getElementsByClassName
console . log ( itens ) ;
console . log ( item [ 0 ] ) ;

// configurando o estilo do css do elemento

item [ 0 ] . textContent  =  'micka' ;
item [ 0 ] . estilo . fontweight  =  'negrito' ;
item [ 0 ] . estilo . backgroundColor =  'amarelo' ;


// utilizando laço de repetição para alterar todos os elementos


// para (deixe i = 0; i <item.lenght; i ++) {
// item [i] .style.backgroundColor = 'yellow';
//}


// metodo getElementsByTagName
deixe  li  =  documento . getElementsByTagName ( 'li' ) ;
console . log ( li ) ;

para  ( seja  i  =  0 ;  i  <  li . comprimento ;  i ++ ) {
   if  (  i  %  2  )  li [ i ] . estilo . backgroundColor =  '# f4f4f4' ;
   else  li [ i ] . estilo . backgroundColor  =  '#fff' ;
}


// metodo getElementsByName

deixe  nome  =  documento . getElementsByName ( 'fitem' ) ;
console . log ( nome ) ;

nome [ 0 ] . textContent  =  'olá pessoas' ;
nome [ 0 ] . estilo . backgroundColor  =  'amarelo' ;
nome [ 1 ] . textContent  =  'tudo bem?' ;
nome [ 1 ] . estilo . backgroundColor  =  '# BAC1FB' ;


// remove elemento no dom

deixe  item2  =  documento . getElementById ( 'item2' ) ;
item2 . remove ( ) ;

let  lista  =  documento . getElementById ( 'itens' ) ;
deixe  item  =  documento . getElementById ( 'item1' ) ;

lista . insertBefore ( item2 ,  item1 . nextSibling ) ;

