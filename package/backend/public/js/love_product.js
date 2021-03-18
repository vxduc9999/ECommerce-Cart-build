
$(document).ready(function () {
    $('ul#loveproduct').click(function (e) {
        var source = $(this)[0].outerHTML;
        var ki = $(this).val();
        console.log($(this));
        var n = source.indexOf("value");
        let start = source.lastIndexOf("value");
        start = start + 7;
        let str = "";
        for (let i = start; i < source.length && source[i] !== '"'; i++) {
            str += source[i];
        }
        var test = '#test_' + str;
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        $.ajax({
            type: "POST",
            datatype: "JSON",
            url: '/user/love',
            async: false,
            data: {
                product_id: parseInt(str),
            },
            success: function (msg) {
                var msg = JSON.parse(msg);
                var ko = $(test);
                if (msg[0] == "Thêm thành công") {
                    $(test)[0].innerHTML = "<img src='https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-liked.svg' alt='no'>"
                }
                else if (msg[0] == "Bỏ thích") {
                    $(test)[0].innerHTML = "<img src='https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-like.svg' alt='no'>"
                }
            }
        });
    });
});