(function(global){
    var cartViewModel,
        app = global.app = global.app || {};
    
    cartViewModel = kendo.data.ObservableObject.extend({
        
        cartListSource:'',
        show:function()
        {
            var data = [{id:'1',title:'Pure Canna Balm',price:'$30.00',prodImg:'style/images/390/img1.png',desc:'Sed ut perspiciatis unde omnis iste natus.',quantity:'3',size:'150Mg'},{id:'2',title:'Pure Canna Balm',price:'$30.00',prodImg:'style/images/390/img2.png',desc:'Sed ut perspiciatis unde omnis iste natus.',quantity:'3',size:'150Mg'},{id:'3',title:'Pure Canna Balm',price:'$30.00',prodImg:'style/images/390/img1.png',desc:'Sed ut perspiciatis unde omnis iste natus.',quantity:'3',size:'150Mg'},{id:'4',title:'Pure Canna Balm',price:'$30.00',prodImg:'style/images/390/img2.png',desc:'Sed ut perspiciatis unde omnis iste natus.',quantity:'3',size:'150Mg'},{id:'5',title:'Pure Canna Balm',price:'$30.00',prodImg:'style/images/390/img1.png',desc:'Sed ut perspiciatis unde omnis iste natus.',quantity:'3',size:'150Mg'},{id:'6',title:'Pure Canna Balm',price:'$30.00',prodImg:'style/images/390/img2.png',desc:'Sed ut perspiciatis unde omnis iste natus.',quantity:'3',size:'150Mg'}];
            app.cartService.viewModel.setCartListview(data);
        },
        
        setCartListview : function(data)
        {
            this.set('cartListSource',data);
        },
        
        checkoutSubmit:function()
        {
            app.mobileApp.navigate('views/billing.html');
        }
    });
    
    app.cartService = {
        viewModel:new cartViewModel()
    }
})(window);