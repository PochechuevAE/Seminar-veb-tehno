var number1 = parseInt(prompt("Введите первое число: ")) 
var number2 = parseInt(prompt("Введите второе число: "))
var sing = prompt("Введите арифметическое действие, которое необходимо совершить '+', '-', '*', '/'")

function calculate(number1, number2, sing) {
    if (sing == "+"){
        alert(number1 + number2)
    }
    if (sing == "-"){
        alert(number1 - number2)
    }
    if (sing == "*"){
        alert(number1 * number2)
    }
    if (sing == "/"){
        alert(number1 / number2)
    }
}

function ask_again() {
    if (confirm("Вы хотите повторить вычисления?")){
        location.reload ()
    }
    else
    {
        alert("Всего хорошего")
    }

}

calculate(number1, number2, sing)
ask_again()

