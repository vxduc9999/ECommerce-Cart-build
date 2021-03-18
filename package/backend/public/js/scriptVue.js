
var vueInstance = new Vue({
    el: '#app',
    data: {
        title: 'Apple Watch',
        url: 'https://www.lazada.vn/products/ao-thun-nam-the-thao-hang-vnxk-vai-day-min-vai-dom-i265780948-s382816279.html',
        target: '_blank',
        price: 13999000,
        sale: 0.1,
        selectedProduct: 2,
        cardNumber: 1,
        listProductDetail: [
            {

                image: "{{ asset('client/images/product/4.jpg') }}",
                quantity: 0,
                textColor: 'Màu Xanh',
                listDesc1: 'Apple Watch Series 6 44mm GPS Viền Nhôm Dây Cao Su Chính Hãng.',
                listDesc2: 'Trong 30 ngày đầu nhập lại máy, trừ phí 20% trên giá hiện tại(hoặc giá mua nếu giá mua thấp hơn giá hiện tại)'
            }, {
                image: "{{ asset('client/images/product/3.jpg') }}",
                quantity: 8,
                textColor: 'Màu Trắng',
                listDesc1: 'Thoát mồ hôi tốt',
                listDesc2: 'Sau 30 ngày nhập lại máy theo giá thoả thuận'
            }, {
                image: "{{ asset('client/images/product/2.jpg') }}",
                quantity: 2,
                textColor: 'Màu Hồng',
                listDesc1: 'Apple Watch Series 6 44mm GPS Viền Nhôm Dây Cao Su Chính Hãng.',
                listDesc2: 'Sau 30 ngày nhập lại máy theo giá thoả thuận'
            }, {
                image: "{{ asset('client/images/product/1.jpg') }}",
                quantity: 1,
                textColor: 'Màu Đen',
                listDesc1: 'Thoát mồ hôi tốt',
                listDesc2: 'Trong 30 ngày đầu nhập lại máy, trừ phí 20% trên giá hiện tại(hoặc giá mua nếu giá mua thấp hơn giá hiện tại)'
            },  
        ]
    },
    methods: {
        handleClickColor(e, index) {
            this.selectedProduct = index;
            // console.log(e, index, this);
        },
        classActive(index) {
            return {
                active: this.selectedProduct === index
            }
        },
        handleAddToCart(e) {
            if(this.cardNumber + 1 > this.getProduct.quantity) {
                alert('So luong khong du');
            } else {
                this.cardNumber = this.cardNumber + 1;
            }
            console.log(e.target)
        }
    },
    computed: {
        formatOriginalPrice() {
            var number = this.price;
            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number);
        },
        formatFinalPrice() {
            var number = this.price - this.sale * this.price;
            return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number);
        },
        getProduct() {
            let index = this.selectedProduct;
            return this.listProductDetail[index];
        }
    }
});