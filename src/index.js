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
    //console.log(arrNum);
    if (humanNumbers.hasOwnProperty(num)) {
        return humanNumbers[num];
    }
    if (num > 20 && num < 100) {
        return `${humanNumbers[arrNum[0] * 10]} ${humanNumbers[arrNum[1]]}`;
    }  
    
    if (num > 99) {
        if (num.toString()[1] === "0" && num.toString()[2] === "0"){
            return `${humanNumbers[num.toString()[0]]} hundred`;
        }

       // if (num.toString()[1] < 1) {
       // return `${humanNumbers[num.toString()[0]]} hundred ${humanNumbers[num.toString()[2]]}`;
       // }
    }
    
    
};