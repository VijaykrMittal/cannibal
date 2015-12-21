(function(global){
    var shopViewModel,
        app = global.app =global.app || {};
    
    shopViewModel = kendo.data.ObservableObject.extend({
        shopListSource:'',
        
        show:function()
        {
            var data = [{id:1,title:'Pure Canna Balm',price:'$20.00',prodImg:'style/newImage/product_img.png',cart:'style/images/390/cart.png'},{id:2,title:'Pure Canna Balm',price:'$30.00',prodImg:'style/newImage/product_img.png',cart:'style/images/390/cart.png'},{id:3,title:'Pure Canna Balm',price:'$35.00',prodImg:'style/newImage/product_img.png',cart:'style/images/390/cart.png'},{id:4,title:'Pure Canna Balm',price:'$45.00',prodImg:'style/newImage/product_img.png',cart:'style/images/390/cart.png'},{id:5,title:'Pure Canna Balm',price:'$60.00',prodImg:'style/newImage/product_img.png',cart:'style/images/390/cart.png'},{id:6,title:'Pure Canna Balm',price:'$70.00',prodImg:'style/newImage/product_img.png',cart:'style/images/390/cart.png'},{id:1,title:'Pure Canna Balm',price:'$20.00',prodImg:'style/newImage/product_img.png',cart:'style/images/390/cart.png'},{id:2,title:'Pure Canna Balm',price:'$30.00',prodImg:'style/newImage/product_img.png',cart:'style/images/390/cart.png'},{id:3,title:'Pure Canna Balm',price:'$35.00',prodImg:'style/newImage/product_img.png',cart:'style/images/390/cart.png'},{id:4,title:'Pure Canna Balm',price:'$45.00',prodImg:'style/newImage/product_img.png',cart:'style/images/390/cart.png'},{id:5,title:'Pure Canna Balm',price:'$60.00',prodImg:'style/newImage/product_img.png',cart:'style/images/390/cart.png'},{id:6,title:'Pure Canna Balm',price:'$70.00',prodImg:'style/newImage/product_img.png',cart:'style/images/390/cart.png'},{id:1,title:'Pure Canna Balm',price:'$20.00',prodImg:'style/newImage/product_img.png',cart:'style/images/390/cart.png'},{id:2,title:'Pure Canna Balm',price:'$30.00',prodImg:'style/newImage/product_img.png',cart:'style/images/390/cart.png'},{id:3,title:'Pure Canna Balm',price:'$35.00',prodImg:'style/newImage/product_img.png',cart:'style/images/390/cart.png'},{id:4,title:'Pure Canna Balm',price:'$45.00',prodImg:'style/newImage/product_img.png',cart:'style/images/390/cart.png'},{id:5,title:'Pure Canna Balm',price:'$60.00',prodImg:'style/newImage/product_img.png',cart:'style/images/390/cart.png'},{id:6,title:'Pure Canna Balm',price:'$70.00',prodImg:'style/newImage/product_img.png',cart:'style/images/390/cart.png'}];
            app.shopService.viewModel.setShopListData(data);
           // app.shopService.viewModel.productListAPI();
        },
        
        productListAPI:function()
        {
          var productData = new kendo.data.DataSource({
              transport:{
                  read:{
                      url:localStorage.getItem('productlist_API'),
                      type:'GET',
                      dataType:'JSON'
                  }
              },
              schema:{
                  data:function(data)
                  {
                      console.log(data);
                      return [data];
                  }
              },
              error:function(e)
              {
                  navigator.notification.alert("Server not responding properly.Please check your internet connection.",
                        function () { }, "Message", 'OK');
              }
          });
           productData.fetch(function(){
               var data = this.data();
               console.log(data);
               console.log(data[0]);
           }); 
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
        },
        
        addToCart:function(e)
        {
            console.log(e);
            console.log(e['target'][0]['attributes']['data-id']['value']);
            console.log(e['target'][0]['attributes']['data-price']['value']);
            alert("Id : "+e['target'][0]['attributes']['data-id']['value']+' , Price : '+e['target'][0]['attributes']['data-price']['value']);
        },
        
        loadCategory:function()
        {
            alert("ok");
        }
        
    });
    
    app.shopService = {
        viewModel:new shopViewModel()
    };
})(window);