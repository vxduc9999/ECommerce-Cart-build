// sub quantity
$(document).on("click", "#sub", function(e) {
    if ($(this).next().val() - 1 > 0) {
        // minus quantity
        $(this).next().val(+$(this).next().val() - 1);
        // get quantity current
        var quantity = $(this).next().val();

        // order_detail id
        var order_id = $(this)[0].value;
        // product_id
        var product_id = $('#product_id_' + order_id).val();
        $.ajax({
            type: "POST",
            url: '/sub-quantity',
            datatype: "JSON",
            async: false,
            data: {
                order_id: order_id,
                product_id: product_id,
                quantity: quantity
            },
            success: function(result) {
                result = JSON.parse(result);
                document.getElementById("totalSum").textContent = result.total + "đ";
            }
        });
    }
});

// add quantity
$(document).on("click", "#add", function(e) {

    // add quantity
    $(this).prev().val(+$(this).prev().val() + 1);
    // get current quantity
    var quantity = $(this).prev().val();
    // order_detail id
    var order_id = $(this)[0].value;
    // product_id
    var product_id = $('#product_id_' + order_id).val();
    $.ajax({
        type: "POST",
        url: '/plus-quantity',
        datatype: "JSON",
        async: false,
        data: {
            order_id: order_id,
            product_id: product_id,
            quantity: quantity
        },
        success: function(result) {
            result = JSON.parse(result);
            document.getElementById("totalSum").textContent = result.total + "đ";
        }
    });
});

//delete product
$(document).on("click", "#del", function(e) {
    if (confirm("Are you sure delete this ?")) {
        // order_detail id
        var order_id = $(this)[0].value;

        var id_holder = "deleteItem_" + order_id;
        $.ajax({
            type: "POST",
            url: '/del-product-cart',
            datatype: "JSON",
            async: false,
            data: {
                order_id: order_id
            },
            success: function(result) {
                var result = JSON.parse(result);
                console.log(result);
                if (result.total == 0) {
                    $('#order_sumary')[0].innerHTML = "<h1>Your Cart is Empty</h1><a href='/'>Trang chủ</a>";
                }
                document.getElementById("totalSum").textContent = result.total + "đ";
                $('.row').each(function() {
                    if ($(this)[0].id === id_holder) {
                        $(this)[0].innerHTML = "";
                        return false;
                    }
                });

            }
        });
    }
});


function validateForm() {
    var purchase_id = document.getElementById('purchase_id').value;
    var name = document.getElementById('form3Example1').value;
    var phone = document.getElementById('form3Example2').value;
    var adress = document.getElementById('form3Example3').value;
    var payment = $('input[name="payment"]:checked').val();

    if (name == "" || phone == "" || adress == "") {
        alert("Mày chưa điền đủ thông tin kìa");
        return false;
    }


    document.getElementById('pur_id').value = purchase_id;
    document.getElementById('name').value = name;
    document.getElementById('phone').value = phone;
    document.getElementById('adress').value = adress;
    document.getElementById('pay').value = payment;
}

// $(document).ready(function() {
//     $('#form3Example5').blur(function(e) {
//         if (!validatePhone('form3Example5')) {
//             $('#spnPhoneStatus').html('Invalid');
//             $('#spnPhoneStatus').css('color', 'red');
//         } else {
//             $('#spnPhoneStatus').html('');
//         }
//     });
// });


function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    var filter = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
    if (filter.test(a)) {
        return true;
    } else {
        return false;
    }
}


function validateInformationCustomer() {
    var name = document.getElementById('form3Example1').value;
    var phone = document.getElementById('form3Example5').value;
    var adress = document.getElementById('form3Example4').value;

    if (name == "" || phone == "" || adress == "") {
        alert("Mày chưa điền đủ thông tin kìa");
        return false;
    }
}

$(document).on("click", "#confirm_order", function(e) {
    var order_id = $(this)[0].value;
    var name = $('#form3Example1').val();
    var address = $('#form3Example4').val();
    var phone = $('#form3Example5').val();
    let payment_method = "";
    $('#payment').each(function() {
        if ($(this).find('input[type="radio"]:checked').length > 0) {
            payment_method = $(this).find('input[type="radio"]:checked').val();
        }
    });
    if (name == "" || phone == "" || address == "") {
        alert("Mày chưa điền đủ thông tin kìa");
        return false;
    } else {
        $.ajax({
            type: "POST",
            url: '/pay',
            datatype: "JSON",
            async: true,
            data: {
                order_id: order_id,
                name: name,
                address: address,
                phone: phone,
                payment_method: payment_method
            },
            success: function(result) {
                result = JSON.parse(result);
                console.log(result);
                window.location.href = "http://" + result.header + "/user/order-list";
            }
        });
    }
});

$("#loveproduct").click(function() {
    var product_id = $("#product_id").val();
    var val = $('#loveproduct img').attr('alt');
    var oldSrc = $('#loveproduct img').attr('src');
    $.ajax({
        type: "POST",
        url: '/love-product',
        datatype: "JSON",
        async: true,
        data: {
            product_id: product_id,
            val: val
        },
        success: function(result) {
            result = JSON.parse(result);
            if (result.result == "1") {
                var newSrc = '../images/like/icons-liked.svg';
                var newAlt = 2;
                $('img[src="' + oldSrc + '"]').attr('src', newSrc);
                $('img[alt="' + val + '"]').attr('alt', newAlt);
            } else if (result.result == "2") {
                var newSrc = '../images/like/icons-like.svg';
                var newAlt = 1;
                $('img[src="' + oldSrc + '"]').attr('src', newSrc);
                $('img[alt="' + val + '"]').attr('alt', newAlt);
            } else {
                window.location.href = "http://" + result.header + "/signin";
            }
        }
    });
});

$(document).on("click", "#xoa", function(e) {
    var wish_id = $(this)[0].value;
    const id_holder = "wish_" + $(this)[0].value;
    $.ajax({
        type: "POST",
        url: '/del-wish',
        datatype: "JSON",
        async: false,
        data: {
            wish_id: wish_id
        },
        success: function(result) {
            var result = JSON.parse(result);
            console.log(result);
            $('.card').each(function() {
                if ($(this)[0].id === id_holder) {
                    $(this)[0].innerHTML = "";
                    return false;
                }
            });
        }
    });
});