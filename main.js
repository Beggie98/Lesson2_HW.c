var a = +prompt('Введите первое число')
var b = +prompt('Введите второе число')
var c = +prompt('Введите третье число')

if(a > b && a < c || a > c && a < b){
    alert('Среднее число ' + a)
}
else if(b > a && b < c || b > c && b < a){
    alert('Среднее число ' + b)
}
else {
    alert('Среднее число ' + c)
}