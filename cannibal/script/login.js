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
            
            $('#signin').unbind(".myPlugin");
            $('#signin').on('click.myPlugin',function(){
                app.loginService.viewModel.loginValidation();
            });
        },
        
        checkEnter : function(e)
        {
            if(e.keyCode === 13)
            {
                $(e.target).blur();
                app.loginService.viewModel.loginValidation();
            }
        },
        
        // Validation Function for Login
        loginValidation : function()
        {
            var that = this,
                username = that.get('log_email'),
                password = that.get('log_pwd');
            
            var dataParam = [];
            
            if(username === "")
            {
                navigator.notification.confirm("Please Enter Username/Email",function(confirm){
                    if(confirm === 1 || confirm === '1')
                    {
                        $('#log_email').focus();
                    }
                },'Notification','OK');
                
                return;
            }
            
            if(password === "")
            {
                navigator.notification.confirm("Please Enter Password",function(confirm){
                    if(confirm === 1 || confirm === '1')
                    {
                        $('#log_pwd').focus();
                    }
                },'Notification','OK');
                
                return;
            }
            
            if(!window.connectionInfo.checkConnection())
            {
                navigator.notification.confirm("Internet Connection not found.",function(confirm){
                    if(confirm === 1 || confirm === '1')
                    {
                        app.loginService.viewModel.loginValidation();
                    }
                },'Connection Error?','Retry,Cancel');
            }
            else
            {
                dataParam['userName'] = username;
                dataParam['pass'] = password;
                app.loginService.viewModel.userLogin(dataParam);
            }
        },
        
        userLogin : function(data)
        {
            app.mobileApp.showLoading();
            var loginDataSource = new kendo.data.DataSource({
                transport:{
                    read:{
                        url:localStorage.getItem('login_API'),
                        type:'GET',
                        dataType:'JSON',
                        data:data
                    }
                },
                schema:{
                    data:function(data)
                    {
                        return [data];
                    }
                },
                error:function(e)
                {
                    app.mobileApp.hideLoading();
                    navigator.notification.alert("Server not responding properly.Please check your internet connection.",
                        function () { }, "Message", 'OK');
                }
            });
            loginDataSource.fetch(function(){
               var data = this.data();
                console.log(data);
                if(data[0]['status'] === 0 || data[0]['status'] === '0')
                {
                    navigator.notification.alert("Username/Password does not exist.",function () { }, "Notification", 'OK');
                    app.mobileApp.hideLoading();
                }
                else
                {
                    app.loginService.viewModel.setUserLoginStatus();
                    app.mobileApp.hideLoading();
                }
            });
        },
        
        setUserLoginStatus : function()
        {
            localStorage.setItem("login_status",1);
            app.mobileApp.navigate('views/shop.html');
        },
        
        setUserLogout : function()
        {
            localStorage.setItem("login_status",0);
            app.mobileApp.navigate('views/login.html');
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