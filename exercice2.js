// let s = une string infini;
// let n = un entier;

// let s = 'abcacabgfbcaa'
// let array = s.split("");
// console.log(array);

// let slice = array.slice(0,10);

// console.log(slice);
// const filter = slice.filter(letter => letter == 'a');

// console.log(filter);



// Je fais un tableau à partir de la string, je coupe le tableau à la valeur n puis je filtre uniquement les "a et retourne la longueur du nouveau tableau en a";
const repeatString = (s, n) => {
    const array = s.split("");
    const slice = array.slice(0, n);
    const filter = slice.filter(letter => letter == 'a');
    return filter.length;
    
}



console.log(repeatString('abcacabcac', 10));



