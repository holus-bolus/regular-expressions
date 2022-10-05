//Special symbols in RegExp

// . dot symbol. Ми шукаємо будь-який одиночний символ
/*[] - будь-який символ*/

//[Ii]-шукаємо і "І", і "і"

/*Inside of square brackets we can specify the range of search*/
//[a-d] means we look for symbols from a to d including.

/*Search in the start of the string and in the end of the string*/
//$- means the end of the string
//^- means the start of the string
//Find all strings that ends  some symbol and the end of the string
//.$

//   \If we want to find a dot we should enter a backslash. For example, let's find a dot in the end of the string
<!--
\.$
-->
// \d Будь-яка одничина цифра

/*
* \d
* */

// \D все що завгодно окрім цифр
// \s знаходить всі побіли
// \S все окрім пробілів
// \w будь-яка буква
//Знайдемо слово, яке має 4 букви. Але в кінці мим маємо сказати, що це саме слово, тому в кінці ставимо \s
//\w\w\w\w\s

//  \b виділяє границі слова
