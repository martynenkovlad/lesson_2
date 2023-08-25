var result1 = 'number' + 23 + 32

 console.log(result1); //number + 23 = number23 + 32 = number2332


var result2 = 41 + 1 + 'number'

console.log(result2)//  41 + 1 = 42 + number = 42number


var result3 = null + 1

console.log(result3); // = 1 


var result4 = 'five' + + 'two'

console.log(result4); //= fiveNaN , Если привести к числу то, что не приводится к нему то будет NaN


var result5 = 2 && 7

console.log(result5);// = 7  если все значения истиноподобны, возвращается значение последнего операнда.


var result6 = +'40' + +'2'

console.log(result6); //= 42 - неявное преобразование, просто прибавляем


var result7 = '10' - 5 === 6;

console.log(result7); //false первым выполняется сравнение, встречается ложь и дальше не будет идти операция


var result8 = true + false

console.log(result8); //= 1 так как ложь это 0, а правда это 1


var result9 = '4px' - 3

console.log(result9); //= NaN  при вычитании числа из строки результат всегда NaN (за исключением тех случаев, когда строка содержит нечто, что является числом с точки зрения языкA


var result110 = '4' - 3

console.log(result110); //= 1 , 4-3=1


var result11 = '2' + 3 ** 2

console.log(result11); //= 29, 3 во второй степени эт 9 и двойку мы просто присваиваем


var result12 = 12 / '6'

console.log(result12); //= 2, 12делим на 6


var result13 = 23 + 42 + 'number'

console.log(result13);// = 65number, 23+42=65 65+number


var result14 = '10' + (5 === 6);

console.log(result14); //= false, аналогично result7


var result15 = 'number' + 15 + 3

console.log(result15); //='number153'  прибавляем слева на право по порядку
