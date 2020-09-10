// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:

//This checks if the credit card number is valid and returns true or false

const validateCred = array1 => {
    const yarra1 = array1.slice().reverse();       // Here the initial array is copied and inverted (in order to make multiplyng every other number easier) and is assigned to another temporary array
    let sum1 = 0;                                  // A variable declared in order to sum up all the numbers in the variable
    for (let i=0; i<yarra1.length; i++ ) {         // This loop iterates through the array in asceding order
        if (i%2!==0 && yarra1[i]*2>9) {            // This if...else if section first checks if the index number is not even then if the number at the respective index multiplyed by 2 
            yarra1.splice(i,1,yarra1[i]*2-9);      // is bigger than 9 then it replaces the number at that index with the number multiplyed by 2 - 9
        } else if (i%2!==0) {
            yarra1.splice(i,1,yarra1[i]*2);        // else if the number at the index is just multiplyed by 2 and replaced in the array
        }
      sum1=yarra1[i]+sum1;                         // at the end either the modified number (if it met any of the conditionals) or the unmodified number gets added to the sum variable
    }
     return sum1 % 10 == 0;
};

//This checks an array of nested arrays for invalid credit card numbers and returns an array of invalid arrays

const findInvalidCards = narray1 => {
    const invalidCards=[];                    // new array created to store the invalid credit card numbers arrays
    for (i=0; i<narray1.length; i++) {        
        if (!validateCred(narray1[i])) {      // if the result of the validateCred function is true (that means the creditcard number is valid) the ! operator will turn the statement false so it does not get added to the 
            invalidCards.push(narray1[i]);    // invalid credit card array, if the function call is false then the ! operator turns it true so that the if condition can run
        }
        
    }
    return invalidCards;
};

//This return an array with what companies have issued faulty credit card numbers, no doubles allowed

const idInvalidCardCompanies = comparray1 => {
    compList=[];
    for (i=0; i<comparray1.length; i++) {                       // The companies are sorted by useing a switch statement to first check the first number of the array then it uses .indexOf to check if              
        switch (comparray1[i][0]) {                             // the element is allready present in the compList array. (indexOf returns -1 if it can't find the index of an element in an array)
            case 3:
                if (compList.indexOf("Amex")===-1){
                    compList.push("Amex")
                    }   
                break;
            case 4:
                if (compList.indexOf("Visa")===-1){
                    compList.push("Visa")
                    }   
                break;
            case 5:
                if (compList.indexOf("Mastercard")===-1){
                    compList.push("Mastercard")
                    }   
                break;
            case 6:
                if (compList.indexOf("Discover")===-1){
                    compList.push("Discover")
                    }   
                break;
            default:
                if (compList.indexOf("Company not found")===-1){
                    compList.push("Company not found")
                    }  
        }
    }
    return compList;
};
 
console.log(idInvalidCardCompanies(findInvalidCards(batch)));  // test for the functions it should return an array of companies that have invalid cards: [ 'Visa', 'Mastercard', 'Amex', 'Discover' ]


const testoarrayo ='123456789';   // this is a test string for the following function that is used to convert a string into an array with numbers

const strTrans = string1 => {
    let array1 = string1.split('');         // here the string is assigned to an array and is split into individual characters separated by , 
    for (i=0; i<array1.length; i++) {
        array1[i] = parseInt(array1[i]);    // here we use the parseInt function to turn each individual character into a number and assign it back to the array
    }
    return array1;
};



console.log(strTrans(testoarrayo));     // test to see if the string transformation function works
