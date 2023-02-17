let matchingInputs=document.querySelectorAll('input[data-ns-test="prices"]')
console.log(matchingInputs)
let totalPrice=0
let defaultValue=0
for(input of matchingInputs){
  totalPrice+=parseInt(input.defaultValue)
  defaultValue=totalPrice
}
document.getElementById('priceTable').addEventListener('change',calculateSum)
//     let upadatedPrice=event.target.value-event.target.defaultValue
//     console.log(upadatedPrice)
//     totalPrice=defaultValue+upadatedPrice
//     document.getElementById("total").innerHTML=totalPrice
// })
function calculateSum(){
    totalPrice=0
    for(input of matchingInputs){
        totalPrice+=parseInt(input.value)
      //  defaultValue=totalPrice
      }
      document.getElementById("total").innerHTML=totalPrice
}

let total=document.createElement('tr')
total.innerHTML=`<td>Total</td>
                 <td id='total' data-ns-test='grandTotal'>${totalPrice}</td>`
document.getElementById("priceTable").append(total)