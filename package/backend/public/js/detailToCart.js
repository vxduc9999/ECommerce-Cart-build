// input quantity detail
document.getElementById('counter').addEventListener("input", checkValidQuantity);

function checkValidQuantity() {
    const amount = parseInt(document.getElementById('counter').value);
    //const max_amount = parseInt(document.getElementById('maxQuantity').value);
    const max_amount = 100;
    if (amount < 1) {
        document.getElementById('counter').value = 1;
    }
    else if (amount > max_amount) {
        document.getElementById('counter').value = max_amount;
    }
}

// $(document).ready(function () {
//     $('input[type=radio]').click(function () {
//         //alert(this.value);
//         var temp = "amountOfProduct[" + this.value + "]";
//         $('input[name^="amountOfProduct"]').each(function () {
//             if ($(this)[0].name == temp) {
//                 var str = "<b>Còn lại " + this.value + " sản phẩm</b>"
//                 $('#slton')[0].innerHTML = str;
//                 return false;
//             }
//         });
//     });
// });


// passing quantity to cart
function getQuantity() {
    const quantity = document.getElementById('counter').value;
    document.getElementById("quantity").value = quantity;
}
