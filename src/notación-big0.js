// Algoritmo de tiempo constante: O(1)
const getLast = items => items[items.length-1];
const result1GetLast = getLast(['a', 'b', 'c', 'd']); //> d(1 iteración)
const result2GetLast = getLast(['a', 'b', 'c', 'd', 'e', 'f', 'g']); //> g(1 iteración)
console.log(`result1GetLast: ${result1GetLast}`);
console.log(`result2GetLast: ${result2GetLast}`);

// Algoritmo de tiempo lineal: O(N)
const findIndex = (items, match) => {
  for (let i = 0, total = items.length; i < total; i++)
    if (items[i] == match)
      return i;
   return -1;
};

const array= ['a', 'b', 'c', 'd'];
const result1FindIndex = findIndex(array, 'a'); // 0  (1 iteración)
const result2FindIndex = findIndex(array, 'd'); // 3  (4 iteraciones)
const result3FindIndex = findIndex(array, 'e'); // -1 (4 iteraciones)
console.log(`result1FindIndex: ${result1FindIndex}`);
console.log(`result2FindIndex: ${result2FindIndex}`);
console.log(`result3FindIndex: ${result3FindIndex}`);

// Algoritmo de tiempo cuadrático: O(N²)
const buildSquareMatrix = items => {
  let matrix = [];
  for (let i = 0, total = items.length; i < total; i++){ 
    matrix[i] = [];
    for (let j = 0, total = items.length; j < total; j++)
      matrix[i].push(items[j]);
  }
  return matrix;
};

const resultbuildSquareMatrix = buildSquareMatrix(['a', 'b', 'c']);  // 9 iteraciones para 3 elementos

console.log(resultbuildSquareMatrix);

// Algoritmo de tiempo logarítmico: O(n log n)
const quickSort = list => {
  if (list.length < 2) 
    return list;
  let pivot = list[0];
  let left  = []; 
  let right = [];
  for (let i = 1, total = list.length; i < total; i++){
    if (list[i] < pivot)
      left.push(list[i]);
    else
      right.push(list[i]);
  }
  return [
    ...quickSort(left), 
    pivot, 
    ...quickSort(right)
  ];
};

console.log(quickSort( ['q','a','z','w','s','x','e','d','c','r']));
