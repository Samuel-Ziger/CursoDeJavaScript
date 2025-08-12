//Aula 07 de do modulo B sobre operadores PT 01
/* Primeiros operadores:
+   -->  5 + 2 = 7
-   -->  5 - 2 = 3
*   -->  5 * 2 = 10
/   -->  5 / 2 = 2,5
%   -->  5 % 2 = 1 --> divisão de números interos na qual vai para antes de colocar a virgula na multiplicação
**  -->  5 ** 2 = 25 --> Elevação ao quadrado nesse caso. 
Ordem de precedência dos operadores aritimetoicos:
()
**
* / %
+ -
Caso tenha a * / % um seguido do outro vai ser feito da esquera pra direita.
*/
//Atribuição simples exemplos:
var a = 5 + 3 //Resultado 8
var b = a % 5 //Resultado 3
var c = 5 * b ** 2 //Resultado 45 sendo que o operador "**" foi feito primeiro
var d = 10 - a/2 //Resultado 6 sendo que o operador "/" foi feito primeiro.
var e = 6 * 2/d //Resultado 2 sendo que o operador da esqeurda o operador "*" foi feito primeiro.
var f = b %  e  + 4 / e //Resultado 3 sendo que foi feito da esquerda pra direita depois somado os dois resultados.
//Atuo-atribuição
var n = 3
var n  = n + 4 // Nesse caso eu estou fazendo a variavel deixar de ser 3 e ser a soma de n + o valor no exeplo o 4 que daira 7 assim a varivavel seria 7.
//Agora vamos da sequecia de exepmlos mantendo apartir do var n = n + 4
n = n -5
n = n * 4
n = n / 2
n = n ** 2
n = n % 5
// aqui depois de tudo isso o resultado seria 1 
// mas tem uma forma mais simples
// uma forma simplificada mas que so vale se a variável for receber ela mesmo e a seguinte 
n += 4 
n -= 5
n *= 4
n /= 2
n **= 2
n %= 5 
// dessa forma o resultado seria o e mesmo.
// Exemplo pratico pra ser feito noi node.js
var num = 8;
nim += 2;
num %= 2;
// agora um exemplo direto do terminal:
/*PS C:\Users\Girak\OneDrive\Documentos\Code\CursoDeJavaScript> node
Welcome to Node.js v22.18.0.      
Type ".help" for more information.
> var num = 8
undefined
> num
8
> num += 2
10
> num
10
> num %= 2
0
> num = 3
3
> num **= 2
9
> num
9
*/
//Agora vamos usar os operadores de incremento
//Ele serve pra fazer a mesma coisa mas auemntando 1 unidade ou reomver e adcionar veja direto do terminal node:
/*
 var n = 10
undefined
> n
10
> n ++
10
> n ++
11
> n --
12
> n --
11
> n --
10
> n --
9
>
mas se eu colocar o simbolo antes ele ja faz a soma ou a subtrição antes veja:
> ++n
10
> ++n
11
> ++n
12
> ++n
13
> --n
12
> --n
11
> --n
10
>

*/ 


