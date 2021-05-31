//premier motif de sablier:

//a   b   c        
//    d
//e   f   g

//array[1][1] + array[1][2] + array[1][3] + array[2][2] + array[3][1] + array[3][2] + array[3][3]
// on retourne le résultat;



//Puis on renouvelle en décallant de 1 les colonnes  => Phase ordonnées
// array[1][1 + y] + array[1][2 + y] + array[1][ y] + array[2][2 + y] + array[3][1 + y] + array[3][2 + y] + array[3][3 + y]  =>  y doit être inférieur à 3 pour conserver les motifs.
//On retourne le résultat à chaque itération.
// On stocke les résultats dans un tableau.

//Puis on descend d'une colonne:
// On recalcule la somme du premier motif en dessous:
//  array[1 + x][1] + array[1 + x][2] + array[1 + x][3] + array[2 + x][2] + array[3 + x][1] + array[3 + x][2] + array[3 + x][3]
// Puis on recommence en ordonnée
// array[1 + x][1 + y] + array[1 + x][2 + y] + array[1 + x][3 + y] + array[2 + x][2 + y] + array[3 + x][1 + y] + array[3 + x][2 + y] + array[3 + x][3 + y]

//On continue tant que x et y sont inférieurs à 3 et on compare les résultats de notre tableau pour sorti la somme la plus importante




