//1

function testing(){
    return true
}

//2-4

function validateEmail(email){
    if (email === '') return false;
    if (typeof email !== 'string') return false;
    if (!email.split('').includes('@') || email.split('')[0] === '@') return false;

    if (email.split('@')[0].length >= 5 ) return false;

    let parts = email.split('@')
    if(parts.size > 2) return false;

    let words = email.split('@')
    if(!words[1].includes('.') || words[0].endsWith('.'))  return false;

    return true
}
