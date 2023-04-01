//tenemos varias maneras:
//search GOOGLE" expreciones regular en js para e-mail y VOILA"
// RegExr = it is very good to make a search too;
//eso existe ,entonces no hay que romperse la cabeza con esto oky

let evaluation = /a/;//todo lo que este dentro de las barras es un EVALUATION
    frase = 'javascript';

console.log(evaluation.test(frase))   //con esto vamos a ver si dentro de la var FRASE , existe lo que ponemos dentro de EVALUATION= la letra=/a/ y (que deveria decir TRUE) "importante no se puede dejar espacio sino nos da False";
console.log(evaluation.exec(frase)) // con este .exec (nos va a devolver un ARRAY)es mas detallada

//ejercicios:
let patron = /a.e/i;
   frase2 = 'Amelia';// =true
   frase2 = 'AME5LIA';// =false pero con el nuevo cambio (.) se vuelve TRUE

console.log(patron.test(frase2))
// necesitamos utilizar banderas: /a/i = true (i)=evalua si es minuscula o mayuscula;
// (.)evalua y hace que se cumpla todo el patron /a.e/i = true;

let inicio = /([A-Za-z]){5,}@[a-z]{3,}\.[a-z]{3}/i;//Utilizar RegExr (It is very cool to learnning)
    frase3 = 'Conocimiento@gmail.com';

console.log(inicio.test(frase3))  //se vuelve todo en true 


