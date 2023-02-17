let str="Hello my name is Suresh"
let reverse=""
for(let i=str.length-1;i>=0;i--){
    reverse+=str.charAt(i)
}
let str_1=reverse.split(" ")
let ans=""
for(let k=str_1.length-1;k>=0;k--){
      ans=ans+str_1[k]+" "
}
console.log(ans)