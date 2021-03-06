(function(global){
    var galleryViewModel,
        app = global.app = global.app || {};
    
    galleryViewModel = kendo.data.ObservableObject.extend({
        
        tab1ListSource:'',
        tab2ListSource:'',
        
        show:function()
        {
            var data1 = [{id:'1',prodImg:'style/slideImage/gallery_img1.png'},{id:'2',prodImg:'style/slideImage/gallery_img.png'},{id:'3',prodImg:'style/slideImage/gallery_img1.png'}];
            var data2 = [{id:'1',prodImg:'style/slideImage/gallery_img.png'},{id:'2',prodImg:'style/slideImage/gallery_img1.png'}];

            $("#galleryTab1").css('border-bottom','4px solid #23A505');
            $("#galleryTab2").css('border-bottom','0px solid #23A505');
            app.galleryService.viewModel.setTabView1data(data1);
            $('#galleryView .wrapper .tab1View').show();
            $('#galleryView .wrapper .tab2View').hide();
            
            $('#galleryTab1').unbind('.myPlugin');
            $('#galleryTab1').on('click.myPlugin',function(){
                $(this).css('border-bottom','4px solid #23A505');
                $("#galleryTab2").css('border-bottom','0px solid #23A505');
                app.galleryService.viewModel.setTabView1data(data1);
                $('#galleryView .wrapper .tab1View').show();
                $('#galleryView .wrapper .tab2View').hide();
            });

            $('#galleryTab2').unbind('.myPlugin');
            $('#galleryTab2').on('click.myPlugin',function(){
                $(this).css('border-bottom','4px solid #23A505');
                $("#galleryTab1").css('border-bottom','0px solid #23A505');
                app.galleryService.viewModel.setTabView2data(data2);
                $('#galleryView .wrapper .tab1View').hide();
                $('#galleryView .wrapper .tab2View').show();
            });
        },
        
        setTabView1data : function(data)
        {
            this.set('tab1ListSource',data);
            this.set('tab2ListSource','');
        },
        
        setTabView2data : function(data)
        {
            this.set('tab2ListSource',data);
            this.set('tab1ListSource','');
        }
    })
    app.galleryService = {
        viewModel:new galleryViewModel()
    };
})(window);