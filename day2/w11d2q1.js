function isPalindrom(n){
    str=n.toString()
    const l = str.length;
    if (l < 2)
    { 
        return true; 
    }

    if (str[0] === str[l - 1]) {
        return isPalindrom( str.slice(1, l - 1) );
    }
 return false;
}
res = isPalindrom(1234321)
console.log(res);