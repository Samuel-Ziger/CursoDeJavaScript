// Agora sera visto os operadores: relacionais,lógicos e ternário.
// operadores relacionais :
/*
<
>
>=
<=
==
!=
*/
// agora vamos fazer usando valores 
/*
7 < 4 - falso (false)
5 > 2 - verdadeiro (true)
8 >= 8 - verdadeiro (true)
9 <= 7 - falso (false)
5 == 5 - verdadeiro (true)
4 != 4 - falso (false) aqui o != esta "perguntando" se ele e diferente de 4
*/
// \Aqui ele vai tratar sempre com verdadeiro ou falso 
//Exercicios feitos no node.js:
/*
PS C:\Users\Girak\OneDrive\Documentos\Code\CursoDeJavaScript> node 
Welcome to Node.js v22.18.0.      
Type ".help" for more information.
> 5 > 2
true
> 8 < 4
false
> var a = 8
undefined
> var b = 15
undefined
> a > b
false
> a < b
true
>  a <= b - 10 --> (observação: aqui e feito a expressão aritimetica então o  b que = a 5 - 10 sendo a resposta 5 que a não e nem menor ou igual a 5)
false


*/
// Agora vamos para os operadores lógicos começando pelo "!" que uma negação.
// && e uma conjunção é como se fosse o nosso "e"
// || são dijunções  e como se fosse nosso "ou"
// ew o operador ternario ? ou : que são usados os  na mesma "frase por exemplo"
 //teste ? true : false 
 //exemplo pratico:
 /*
 > var media = 5.5
undefined
> media >= 7.0 ? aprovado: reprovado
Uncaught ReferenceError: reprovado is not defined
> 6
6
> media > 7? 'Aprovado' : 'reprovado'
'reprovado'
*/