export function Polygoncount(playercombination,index){
var array = [];
for (var x = 0; x < playercombination.length; x++) {
    array.push(x);
}
var subArray = [],
    subIndex = -1;

for (let i = 0; i < array.length; i++) {
    // Каждые 200 итераций меняем ключ для добавления в подмассив
    if (0 === i % Math.sqrt(playercombination.length)) {
        subIndex++;
    }
    if (subArray[subIndex] === undefined) {
        subArray[subIndex] = [];
    }
    subArray[subIndex].push(array[i]);
}
const diagonalcoppyarr = [...subArray]
const copyArr = [...subArray]
var arrDiagonal1 = []
var arrDiagonal2 = []
var n = diagonalcoppyarr.length
    for (let i = 0; i < n; i++) arrDiagonal1.push(diagonalcoppyarr[i][i]);     // Главная диагональ
    for (let i = 0; i < n; i++) arrDiagonal2.push(diagonalcoppyarr[i][n-1-i]); // Побочная диагональ
    subArray.push(arrDiagonal1)
    subArray.push(arrDiagonal2)
const arrayColumn = (arr, n) => arr.map(x => x[n]);

for(let a=0;a<Math.sqrt(playercombination.length);a++){
    subArray.push(arrayColumn(copyArr, a))
}
 return subArray
}