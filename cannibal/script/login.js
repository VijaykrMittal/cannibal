(function(global){
    var loginViewMOdel,
        app = global.app =global.app || {};
    
    loginViewMOdel = kendo.data.ObservableObject.extend({
        
        log_email:'',
        log_pwd:'',
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
               // app.mobileApp.navigate('views/shop.html');    
                app.loginService.viewModel.loginValidation();
            });
        },
        
        // Validation Function for Login
        loginValidation : function()
        {
            var that = this,
                username = that.get('log_email'),
                password = that.get('log_pwd');
            
            var dataParam = [];
            //console.log(navigator.notification.alert);
            if(username === "")
            {
                navigator.notification.alert('Please enter Username/Email',function(){},'Notification','OK');
            }
            else if(password === "")
            {
                navigator.notification.alert('Please enter Password',function(){},'Notification','OK');
            }
            else
            {
                dataParam['userName'] = username;
                dataParam['pass'] = password;
                console.log(dataParam);
                
                var loginDataSource = new kendo.data.DataSource({
                    transport:{
                        read:{
                            url:'',
                            type:'GET',
                            dataType:''
                        }
                    }
                });
            }
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