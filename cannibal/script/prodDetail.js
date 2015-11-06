(function(global){
    var productViewModel,
        app = global.app =global.app || {};
    
    productViewModel = kendo.data.ObservableObject.extend({
        
        show:function()
        {
            $('#addcart').click(function(){
                app.mobileApp.navigate('views/billing.html');
            });
        },
        
    });
    
    app.productService = {
        viewModel:new productViewModel()
    };
})(window);