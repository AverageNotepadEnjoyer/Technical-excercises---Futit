//Ejercicio 1

<html>
<script type="text/javascript">
    var numLlamadas = 0;

    function calculaBinomio(a, b)
    {
        var cuadradoDeA = a*a;
        var cuadradoDeB = b*b;
        numLlamadas++;
        return cuadradoDeA + cuadradoDeB + 2*a*b;
    } 
    
    alert(calculaBinomio(2, 3));
    alert(calculaBinomio(4, 5));
    alert(numLlamadas);
    alert(typeof(cuadradoDeA));
</script>
</html>

// Lo que el código mostrará en pantalla es, en orden:
// 1) 25 (el resultado de la función con a = 2 y b = 3)
// 2) 81 (el resultado de la función con a = 4 y b = 5)
// 3) 2 (el valor de numLlamadas, que comienza en 0 pero incrementa en 1 cada vez que se invoca la función)
// 4) undefined

// Por último se muestra en pantalla "undefined" ya que cuadradoDeA no está definido.
// Si en lugar de pedir el tipo de cuadradoDeA se pidiera el de numLlamadas, este arrojaría "number", dado que es un número.
// O, si se pidiera el de calculaBinomio, arrojaría "function", ya que es una función.

