module.exports = function toReadable (num) {
    const humanNumbers = {
         0 : "zero",
         1 : "one",
         2 : "two",
         3 : "three",
         4 : "four",
         5 : "five",
         6 : "six",
         7 : "seven",
         8 : "eight",
         9 : "nine",
        10 : "ten",
        11 : "eleven",
        12 : "twelve",
        13 : "thirteen",
        14 : "fourteen",
        15 : "fifteen",
        16 : "sixteen",
        17 : "seventeen",
        18 : "eighteen",
        19 : "nineteen",
        20 : "twenty",
        30 : "thirty",
        40 : "forty",
        50 : "fifty",
        60 : "sixty",
        70 : "seventy",
        80 : "eighty",
        90 : "ninety"
    };
    const arrNum = num.toString().split('');
    
    if (humanNumbers.hasOwnProperty(num)) {
        return humanNumbers[num];
    }
    
    if (num > 20 && num < 100) {
        return `${humanNumbers[arrNum[0] * 10]} ${humanNumbers[arrNum[1]]}`;
    }  
    
    if (num > 99) {
        if (arrNum[1] === '0' && arrNum[2] === '0') {
            return `${humanNumbers[arrNum[0]]} hundred`;
        }
    }
    
    if (arrNum[1] >= 0 && arrNum[1] <= 1) {
        const strToNum = Number(arrNum[1].toString() + arrNum[2].toString());
        
        if (humanNumbers.hasOwnProperty(strToNum)) {
        return `${humanNumbers[arrNum[0]]} hundred ${humanNumbers[strToNum]}`;
        }
    }
    
    if ( num > 119 && arrNum[2] === '0' && arrNum[1] !== '0') {
        return `${humanNumbers[arrNum[0]]} hundred ${humanNumbers[arrNum[1] * 10]}`;
    }

    if (num > 120) {
        return `${humanNumbers[arrNum[0]]} hundred ${humanNumbers[arrNum[1] * 10]} ${humanNumbers[arrNum[2]]}`;
    }
};