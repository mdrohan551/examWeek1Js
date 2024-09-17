// main anser 
function calculateDifference(a, b) {
    return a - b
}
console.log(calculateDifference(20, 20)) /*0*/


// extra ans show 
showResult = () => {
    const A = parseFloat(document.getElementById('inputA').value);
    const B = parseFloat(document.getElementById('inputB').value);
    let result = calculateDifference(A, B);
    document.getElementById('result').innerText = result;
}



// ----------------------------------------------------------------
// main anser 
function isOdd(num) {
    if (num % 2 !== 0 || num % 2 === 1) {
        return true;
    } else {
        return false;
    }
}
console.log(isOdd(33)) /*fasle*/

showResult2 = () => {
    const A = parseFloat(document.getElementById('odd').value);
    let result = isOdd(A) ? 'বিজোড়' : 'জোড় ';
    document.getElementById('result2').innerText = result;
}









// main anser 
function findMin(arr) {
    let min = arr[0];
    for (let a = 1; a < arr.length; a++) {
        if (arr[a] < min) {
            min = arr[a];
        }
    }
    return min;
}

// extra fontend showing function 
function showMIN() {
    let input = document.getElementById('findMIN').value;

    let strArray = input.split(',').map(Num=>parseFloat(Num));
    let minValue = findMin(strArray);
    document.getElementById('result3').textContent = 'Minimum value is: ' + minValue;
}













// main anser 
function filterEvenNumbers(arr) {
    let result = [];
    for (let a = 0; a < arr.length; a++) {
        if (arr[a] % 2 === 0) {
            result.push(arr[a]);
        }
    }
    return result;
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: [2, 4, 6]


// extra anser 
function showEven() {
    let input = document.getElementById('findEven').value;

    let strArray = input.split(',').map(Num=>parseFloat(Num));
    let minValue = filterEvenNumbers(strArray);
    document.getElementById('result4').textContent = 'Even value is: ' + minValue;
}























// main anser 
function sortArrayDescending(arr) {
    let newArray = arr.slice();
    newArray.sort(function (a, b) {
        if (a > b) {
            return -1;
        }
        if (a < b) {
            return 1;
        }
        return 0;
    });

    return newArray;
}
console.log(sortArrayDescending([4, 2, 8, 1, 5]));


// extra anser 
function showDescending() {
    let input = document.getElementById('findDes').value;

    let strArray = input.split(',').map(Num=>parseFloat(Num));
    let minValue = sortArrayDescending(strArray);
    document.getElementById('result5').textContent = 'Minimum value is: ' + minValue;
}















// main anser 
// prothom sonkha ke lowercase korbo 
function lowercaseFirstLetter(str) {
    if (str.length === 0) {
        return str;
    }
    return str.charAt(0).toLowerCase() + str.slice(1);
}
console.log(lowercaseFirstLetter('A,B,c,D'));

// extra work 

function tolowercase() {
    let input = document.getElementById('lower').value;
    let toLower = lowercaseFirstLetter(input);
    document.getElementById('result6').textContent = 'chek first letter : ' + toLower;
}












// main anser 

function countVowels(anyWord) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let vowelsArry = anyWord.split('').filter(vowelarryValue => vowels.includes(vowelarryValue));
    let countValue = vowelsArry.length;
    return `__________`+vowelsArry + `__________vowels length number ${countValue}`;
}
console.log(countVowels("hello i'm form bangladesh"));


function countVowelsFrontEnd() {
    let input = document.getElementById('vowels').value;
    let tovowels = countVowels(input);
    document.getElementById('result7').textContent = 'Vowels and : ' + tovowels;
}



















// main anser 
function findAverage(number) {
    if (number.length === 0) {
        return 0;
    }
    let sum = 0;
    for (let num of number) {
        var total = sum += num
    }
    return total / number.length;
}
console.log(findAverage([1, 2, 3, 4, 5]));  



// extra anser front end 
function Average() {
    let input = document.getElementById('Average').value;
    let toArray = input.split(',');
    let numberArray = toArray.map(Number)
    let average = findAverage(numberArray);
    document.getElementById('result8').textContent = 'Average total : ' + average;
}
