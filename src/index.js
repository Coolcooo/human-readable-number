const BASIC_READABLE_NUMBER = {
    10: 'ten', 20: 'twenty',
    1: 'one', 11: 'eleven', 30: 'thirty',
    2: 'two', 12: 'twelve', 40: 'forty',
    3: 'three', 13: 'thirteen', 50: 'fifty',
    4: 'four', 14: 'fourteen', 60: 'sixty',
    5: 'five', 15: 'fifteen', 70: 'seventy',
    6: 'six', 16: 'sixteen', 80: 'eighty',
    7: 'seven', 17: 'seventeen', 90: 'ninety',
    8: 'eight', 18: 'eighteen',
    9: 'nine', 19: 'nineteen'

}

module.exports = function toReadable(number) {
    if (number === 0) {
        return 'zero'
    }
    let readableNumber = []
    this.number = number;
    let checkNumber = this.number % 100;
    let i = 0;
    if (checkNumber < 20) {
        if (checkNumber !== 0) {
            readableNumber.unshift(BASIC_READABLE_NUMBER[checkNumber]);
        }
        this.number = (this.number - this.number % 100) / 100;
        checkNumber = this.number % 10;
        i = 1;
    }
    while (this.number > 0) {
        if (checkNumber === 0) {
            continue;
        }
        if (i === 0) {
            if (checkNumber % 10 !== 0) {
                readableNumber.unshift(`${BASIC_READABLE_NUMBER[checkNumber % 10]}`)
            }
            const dozens = (checkNumber - checkNumber % 10)
            readableNumber.unshift(`${BASIC_READABLE_NUMBER[dozens]}`)
            this.number = (this.number - this.number % 10) / 10;
            i++;

        } else if (i === 1) {
            readableNumber.unshift(`${BASIC_READABLE_NUMBER[checkNumber]} hundred`)
            i++;
        } else {
            readableNumber.unshift(`${BASIC_READABLE_NUMBER[checkNumber]} thousand`)
        }
        this.number = (this.number - this.number % 10) / 10;
        checkNumber = this.number % 10;
    }
    return readableNumber.join(' ')
}

