//let arr= [1, 1, 1, 4, 5, 6, 4, 5, 6, 7, 8, 9, 9]
let arr= [suresh,suresh,ashwini]
let n=arr.length
let str=""
for (let i = 0; i < n; i++)
{
    let j;
    for (j = 0; j < i; j++)
    if (arr[i] == arr[j])
        break;

    if (i == j)
    str+=arr[i]+" "
}
console.log(str)
