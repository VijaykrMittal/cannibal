(function(global){
    var shopViewModel,
        app = global.app =global.app || {};
    
    shopViewModel = kendo.data.ObservableObject.extend({
        shopListSource:'',
        
        show:function()
        {
            //alert("do");
            
            var data = [{title:'Pure Canna Balm',price:'$30.00',prodImg:'style/images/390/product_img.png',cart:'style/images/390/cart.png'},{title:'Pure Canna Balm',price:'$30.00',prodImg:'style/images/390/product_img.png',cart:'style/images/390/cart.png'},{title:'Pure Canna Balm',price:'$30.00',prodImg:'style/images/390/product_img.png',cart:'style/images/390/cart.png'},{title:'Pure Canna Balm',price:'$30.00',prodImg:'style/images/390/product_img.png',cart:'style/images/390/cart.png'},{title:'Pure Canna Balm',price:'$30.00',prodImg:'style/images/390/product_img.png',cart:'style/images/390/cart.png'},{title:'Pure Canna Balm',price:'$30.00',prodImg:'style/images/390/product_img.png',cart:'style/images/390/cart.png'}];
            app.shopService.viewModel.setShopListData(data);
        },
        
        setShopListData:function(data)
        {
            this.set('shopListSource',data);
        },
        
    });
    
    app.shopService = {
        viewModel:new shopViewModel()
    };
})(window);