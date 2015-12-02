(function(global){
    var specialViewModel,
        app = global.app = global.app || {};
    
    specialViewModel = kendo.data.ObservableObject.extend({
        specialListSource:'',
        show:function()
        {
            var data = [{id:'1',title:'Pure Canna Balm',off_detail:'Upto 10% off',valid_date:'Valid Upto 04/12/2015',event:'Select Item','ordernum':'Order No. 5',price:'$30.00',prodImg:'style/images/390/img1.png',desc:'Sed ut perspiciatis unde omnis iste natus.',quantity:'3',size:'150Mg'},{id:'2',title:'Pure Canna Balm',off_detail:'Upto 10% off',valid_date:'Valid Upto 04/12/2015',event:'Select Item','ordernum':'Order No. 4',price:'$30.00',prodImg:'style/images/390/img2.png',desc:'Sed ut perspiciatis unde omnis iste natus.',quantity:'5',size:'150Mg'},{id:'3',title:'Pure Canna Balm',off_detail:'Upto 10% off',valid_date:'Valid Upto 04/12/2015',event:'Select Item','ordernum':'Order No. 1',price:'$30.00',prodImg:'style/images/390/img1.png',desc:'Sed ut perspiciatis unde omnis iste natus.',quantity:'2',size:'150Mg'}];
            app.specialService.viewModel.setSpecialListview(data);
        },
        
        setSpecialListview:function(data)
        {
            this.set("specialListSource",data);
        }
        
    });
    
    app.specialService = {
        viewModel:new specialViewModel()
    };
})(window);