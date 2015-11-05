(function(global){
    var loginViewMOdel,
        app = global.app =global.app || {};
    
    loginViewMOdel = kendo.data.ObservableObject.extend({
        
        show:function()
        {
            
            $('#uncheck').click(function(){
                $('#check').show();
                $(this).hide();
            });
            
            $('#check').click(function(){
                $('#uncheck').show();
                $(this).hide();
            });
            
            $('#moveToRegisterStep2').click(function(){
                app.mobileApp.navigate('#signupView2');
            });
            
            $('#signup').click(function(){
                app.mobileApp.navigate('views/shop.html');    
            });
            
            $('#signin').click(function(){
                app.mobileApp.navigate('views/shop.html');    
            });
        },
        
        moveToForgetPwd:function()
        {
            $('.footerLeft').css('background-color','#1A530C');
            $('.footerRight').css('background-color','#1E9E01');
        },
        
        moveToRegister:function()
        {
            $('.footerLeft').css('background-color','#1E9E01');
            $('.footerRight').css('background-color','#1A530C');
            app.mobileApp.navigate('#signupView');
        }
    });
    
    app.loginService = {
        viewModel:new loginViewMOdel()
    };
})(window);