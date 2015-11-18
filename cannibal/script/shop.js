(function(global){
    var shopViewModel,
        app = global.app =global.app || {};
    
    shopViewModel = kendo.data.ObservableObject.extend({
        shopListSource:'',
        
        show:function()
        {
            var data = [{id:1,title:'Pure Canna Balm',price:'$30.00',prodImg:'style/images/390/product_img.png',cart:'style/images/390/cart.png'},{id:2,title:'Pure Canna Balm',price:'$30.00',prodImg:'style/images/390/product_img.png',cart:'style/images/390/cart.png'},{id:3,title:'Pure Canna Balm',price:'$30.00',prodImg:'style/images/390/product_img.png',cart:'style/images/390/cart.png'},{id:4,title:'Pure Canna Balm',price:'$30.00',prodImg:'style/images/390/product_img.png',cart:'style/images/390/cart.png'},{id:5,title:'Pure Canna Balm',price:'$30.00',prodImg:'style/images/390/product_img.png',cart:'style/images/390/cart.png'},{id:6,title:'Pure Canna Balm',price:'$30.00',prodImg:'style/images/390/product_img.png',cart:'style/images/390/cart.png'}];
            app.shopService.viewModel.setShopListData(data);
        },
        
        setShopListData:function(data)
        {
            this.set('shopListSource',data);
        },
        
        moveToMain:function(e)
        {
            console.log(e['currentTarget']['attributes']['data-id']['value']);
            localStorage.setItem('product_id',e['currentTarget']['attributes']['data-id']['value']);
            app.mobileApp.navigate('views/productDetail.html');   
        },
        
        moveToCart:function()
        {
            app.mobileApp.navigate('views/mycart.html')
        }
        
    });
    
    app.shopService = {
        viewModel:new shopViewModel()
    };
})(window);