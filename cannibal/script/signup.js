(function(global){
    var signupViewModel,
        app = global.app = global.app || {};
    
    signupViewModel = kendo.data.ObservableObject.extend({
        
        firstname:'',
        lastname:'',
        mobilenum:'',
        emailadd:'',
        
        show:function()
        {
            $(".km-native-scroller").scrollTop(0);
            $('#moveToRegisterStep2').unbind('.myPlugin');
            $('#moveToRegisterStep2').on('click.myPlugin',function(){
                app.signupService.viewModel.registrationStep1();
            });
            
            $('#phonenum').keypress(function(e) {
                var valid = (e.which>=48 && e.which<=57)
                if(!valid)
                {
                    e.preventDefault();
                }
            });
        },
        
        registrationStep1 : function()
        {
           /* var firstname = this.get('firstname'),
                lastname = this.get('lastname'),
                mobilenum = this.get('mobilenum'),
                emailAdd = this.get('emailadd');
            
            var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            dataParamSignup = [];
            
            console.log(mobilenum.toString().length);
            
            if(firstname === "")
            {
                navigator.notification.alert("Please Enter Firstname.",function(){},'Notification','OK');
            }
            else
            if(lastname === "")
            {
                navigator.notification.alert("Please Enter Lastname.",function(){},'Notification','OK');
            }
            else
            if(mobilenum === "")
            {
                navigator.notification.alert("Please Enter Mobile Number.",function(){},'Notification','OK');
            }
            else
            if(mobilenum.toString().length !== 10 || mobilenum.toString().length === '10')
            {
                navigator.notification.alert("Please Enter 10 digit mobile Number.",function(){},'Notification','OK');
            }
            else
            if(emailAdd === "")
            {
                navigator.notification.alert("Please Enter Email Address.",function(){},'Notification','OK');
            }
            else
            if(!filter.test(emailAdd))
            {
                navigator.notification.alert("Please Enter valid Email Address.",function(){},'Notification','OK');
            }
            else
            {   
                dataParamSignup['fname'] = firstname,
                dataParamSignup['lname'] = lastname,
                dataParamSignup['mobile'] = mobilenum,
                dataParamSignup['email'] = emailAdd;
                console.log(dataParamSignup);*/
                app.mobileApp.navigate('#signupView2');
        //    }
            
            
           /* app.mobileApp.showLoading();
            var signupDataS = new kendo.data.DataSource({
                transport:{
                    read:{
                        url:'http://wordpress2014:Flexsin_2020@flexsin.org/lab/wordpress/cannibalsonline/conAPI/test.php',
                        type:'POST',
                        dataType:'json',
                        data:dataParamSignup
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
                    console.log(e);
                    navigator.notification.alert("Server not responding properly.Please check your internet connection.",
                        function () { }, "Message", 'OK');
                }
            });
            signupDataS.fetch(function(){
                var data = this.data();
                app.mobileApp.hideLoading();
                console.log(data);
            });*/
            
        }
    });
    
    app.signupService = {
        viewModel:new signupViewModel()
    };
})(window);