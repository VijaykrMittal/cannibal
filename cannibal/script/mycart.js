(function(global){
    var cartViewModel,
        app = global.app = global.app || {};
    
    cartViewModel = kendo.data.ObservableObject.extend({
        
        cartListSource:'',
        
        show:function(e)
        {
            $(".km-native-scroller").scrollTop(0);
            var data = [{id:'1',title:'Pure Canna Balm',price:'$30.00',prodImg:'style/images/390/img1.png',desc:'Sed ut perspiciatis unde omnis iste natus.',quantity:'3',size:'150Mg'},{id:'2',title:'Pure Canna Balm',price:'$30.00',prodImg:'style/images/390/img2.png',desc:'Sed ut perspiciatis unde omnis iste natus.',quantity:'5',size:'150Mg'},{id:'3',title:'Pure Canna Balm',price:'$30.00',prodImg:'style/images/390/img1.png',desc:'Sed ut perspiciatis unde omnis iste natus.',quantity:'2',size:'150Mg'},{id:'4',title:'Pure Canna Balm',price:'$30.00',prodImg:'style/images/390/img2.png',desc:'Sed ut perspiciatis unde omnis iste natus.',quantity:'6',size:'150Mg'},{id:'5',title:'Pure Canna Balm',price:'$30.00',prodImg:'style/images/390/img1.png',desc:'Sed ut perspiciatis unde omnis iste natus.',quantity:'8',size:'150Mg'},{id:'6',title:'Pure Canna Balm',price:'$30.00',prodImg:'style/images/390/img2.png',desc:'Sed ut perspiciatis unde omnis iste natus.',quantity:'4',size:'150Mg'}];
           // app.cartService.viewModel.setCartListview(data);
            
            /*$('.add').unbind(".myPlugin");
            $('.add').on('click',function(){
                var $qty=$(this).closest('p').find('.qty');
                var currentVal = parseInt($qty.val());
                if (!isNaN(currentVal)) {
                    $qty.val(currentVal + 1);
                }
            });
            
            $('.minus').unbind(".myPlugin");
            $('.minus').on('click',function(){
                var $qty=$(this).closest('p').find('.qty');
                var currentVal = parseInt($qty.val());
                if (!isNaN(currentVal) && currentVal > 1) {
                    $qty.val(currentVal - 1);
                }
            });*/
            
            
            app.cartService.viewModel.htmlCreate();
        },
        
        htmlCreate : function()
        {
            var data = [{id:'1',title:'Pure Canna Balm',price:'$30.00',prodImg:'style/images/390/img1.png',desc:'Sed ut perspiciatis unde omnis iste natus.',quantity:'3',size:'150Mg'},{id:'2',title:'Pure Canna Balm',price:'$30.00',prodImg:'style/images/390/img2.png',desc:'Sed ut perspiciatis unde omnis iste natus.',quantity:'5',size:'150Mg'},{id:'3',title:'Pure Canna Balm',price:'$30.00',prodImg:'style/images/390/img1.png',desc:'Sed ut perspiciatis unde omnis iste natus.',quantity:'2',size:'150Mg'},{id:'4',title:'Pure Canna Balm',price:'$30.00',prodImg:'style/images/390/img2.png',desc:'Sed ut perspiciatis unde omnis iste natus.',quantity:'6',size:'150Mg'},{id:'5',title:'Pure Canna Balm',price:'$30.00',prodImg:'style/images/390/img1.png',desc:'Sed ut perspiciatis unde omnis iste natus.',quantity:'8',size:'150Mg'},{id:'6',title:'Pure Canna Balm',price:'$30.00',prodImg:'style/images/390/img2.png',desc:'Sed ut perspiciatis unde omnis iste natus.',quantity:'4',size:'150Mg'}];
            var html = '';
            
            for(var i=0;i<data.length;i++)
            {
                html+='<div class="main">';
                html+='<div class="dv1"><p><img src="'+data[i]['prodImg']+'"/></p></div>';
                html+='<div class="dv2">';
                html+='<div class="dv21"><p>'+data[i]['title']+'</p></div>';
                html+='<div class="dv22"><p>'+data[i]['desc']+'</p></div>';
                html+='<div class="dv23">';
                html+='<div class="dv230"><p>'+data[i]['price']+'</p></div><div class="dv231"><img class="minus" src="style/images/390/green_minus.png"/></div><div class="dv232" id="qunatDv"><input tyep="text" id="quantity" value="'+data[i]['quantity']+'" style="background-color:#fff;" disabled="false"/></div><div class="dv233"><img class="add" src="style/images/390/green_plus.png"/></div>';
                html+='</div>';
                html+='</div>';
                html+='<div class="dv3">';
                html+='<p><img class="cross" src="style/images/390/cross_icon.png"/></p>';
                html+='</div>';
                html+='</div>';
                $('#cartListData').html(html);
            }
            
            var hhtml = '';
            hhtml +='<div class="mainTotalDv" style="width:100%;height:auto;display:inline-block;margin: 0 0 0 0;">';
            hhtml +='<div class="leftdv1"><p>Total</p>';
            hhtml +='</div>';
            hhtml +='<div class="leftdv2"><p>$180.00</p>';
            hhtml +='</div>';
            hhtml +='<div>';
            $('#total').html(hhtml);
            
            $('.minus').unbind(".myPlugin");
            $('.minus').on('click.myPlugin',function(){
                var quantity = parseInt($(this).parent().next().children().val());
                if (!isNaN(quantity) && quantity > 1) {
                    $(this).parent().next().children().val(quantity - 1);
                }
            });
            
            $('.add').unbind(".myPlugin");
            $('.add').on('click.myPlugin',function(){
                var quantity = parseInt($(this).parent().prev().children().val());
                if (!isNaN(quantity)) {
                    $(this).parent().prev().children().val(quantity + 1);
                }
            });
            
        },
        
        setCartListview : function(data)
        {
            this.set('cartListSource',data);
        },
        
        checkoutSubmit:function()
        {
            app.mobileApp.navigate('views/billing.html');
        },
    });
    
    app.cartService = {
        viewModel:new cartViewModel()
    }
})(window);