function promedio() {
    var numero1 = document.getElementById("textNumero1");
    var numero2 = document.getElementById("textNumero2");
    var numero3 = document.getElementById("textNumero3");

    var total = (parseFloat(numero1.value) + parseFloat(numero2.value) + parseFloat(numero3.value)) /3

    document.getElementById("textResultado").value = total;
}
