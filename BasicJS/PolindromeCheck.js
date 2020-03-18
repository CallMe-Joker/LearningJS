function palindrome(str) {
    let regx = /[^a-z]/gi;
    str = str.toLowerCase();
    str = str.replace(regx, '');
    
    let word = str.split('');
    let rword = [];
    //rword = word.reverse();
    for(let i = word.length; i > 0; i--){
        rword.push(word.pop());
    }
    rword = rword.join('');
    if(str === rword){
        return true;
    }else{
        return false;
    }
    
  }  
palindrome("eye");
  
