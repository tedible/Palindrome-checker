

function palindromeChecker(palindrome) {

    //turn string into array
    // only include alphanumerics
    // toLowerCase
    let alnum = /[a-z0-9]/ig
    palindrome = palindrome.toLowerCase().match(alnum)
    
    let revPal = []
    for (let i = 0; i < palindrome.length; i++) {
        revPal[i] = palindrome[palindrome.length -1 - i]
    }
    //console.log("palindrome: " + palindrome)
    //console.log("revPal: " + revPal)

    return (palindrome.join(",") == revPal.join(","))

    

}

console.log(palindromeChecker("racecar"))