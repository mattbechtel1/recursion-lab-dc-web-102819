// Code your solution here!

function printString(myString) {
    console.log(myString[0])
    
    if (myString.length > 1) {
        printString(myString.slice(1))
    }
}

function reverseString(theString) {
    if (theString.length > 1) {
        return reverseString(theString.slice(1)) + theString[0]
    } else {
        return theString
    }
}

function isPalindrome(theString) {
    if (theString.length > 1 ) {
        if (theString[0] === theString[theString.length - 1]) {
            return isPalindrome(theString.substring(1, theString.length - 1))
        } else {
            return false
        }
    } else {
        return true
    }
}

function addUpTo(array, limitIdx) {
    if (limitIdx > 0) {
        return array[0] + addUpTo(array.slice(1), limitIdx - 1)
    } else {
        return array[0]
    }
}

function maxOf(array) {
    if (array.length > 1) {
        return array[0] > array[array.length -1] ? maxOf(array.slice(0, array.length - 1)) : maxOf(array.slice(1))
    } else {
        return array[0]
    }
}

function includesNumber(array, number) {
    if (array[0] === number) {
        return true
    } else if (array.length > 1) {
        return includesNumber(array.slice(1), number)
    } else {
        return false
    }
}