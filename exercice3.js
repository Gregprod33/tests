//Jeu des nuages

//Soit Array = tableau de nombres bianires
//je filtre les indices qui corresponde 

let array = [0,1,0,0,0,1,0];
let index = [];
let evenIndex = [];


//Je récupère uniquement les index dont les chiffres correspondant sont différents de 1
for(let i = 0; i<array.length; i++)
{
    if(array[i] != 1){
        index.push(i);
    }
}

console.log(index);

//Je trie les indices pairs
for(let j = 0; j<array.length; j++)
{
    if(index[j] % 2 == 0){
        evenIndex.push(index[j]);
    }
}

//Je retourne la valeur de saut la plus courte
return (evenIndex.length - 1);
