(function(global){
    var signupViewModel,
        app = global.app = global.app || {};
    
    var dataParamSignup =[];
    
    signupViewModel = kendo.data.ObservableObject.extend({
        
        firstname:'',
        lastname:'',
        mobilenum:'',
        emailadd:'',
        username:'',
        userPwd:'',
        userCnfPwd:'',
        
        
        show:function()
        {
            $(".km-native-scroller").scrollTop(0);
            $('#moveToRegisterStep1').unbind('.myPlugin');
            $('#moveToRegisterStep1').on('click.myPlugin',function(){
                app.signupService.viewModel.registrationStep1();
            });
            
            $('#signup').unbind('.myPlugin');
            $('#signup').on('click.myPlugin',function(){
                app.signupService.viewModel.registrationStep2();
            });
            
            $('#phonenum').keypress(function(e) {
                var valid = (e.which>=48 && e.which<=57)
                if(!valid)
                {
                    e.preventDefault();
                }
            });
            
            $('#i_file').change( function(event) {
                console.log(event.target.files[0]);
                var aa = URL.createObjectURL(event.target.files[0]);
                console.log(URL.createObjectURL(event.target.files[0]));
                console.log(URL.revokeObjectURL(aa));
                $("img").fadeIn("fast").attr('src',URL.createObjectURL(event.target.files[0]));
            });
            
            /*Get the image or docs from the mobile Device*/
            $('#licenceId').unbind('.myPlugin');
            $('#licenceId').on('click',function(){
                window.fileGet.storeLicenseID();
            });
            
            $('#prescroption').unbind('.myPlugin');
            $('#prescroption').on('click',function(){
                window.fileGet.storePrescription();
            });
        },
        
        registrationStep1 : function()
        {
            var firstname = this.get('firstname'),
                lastname = this.get('lastname'),
                mobilenum = this.get('mobilenum'),
                emailAdd = this.get('emailadd');
            
            var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            
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
            if($('#licenceId').val() === "")
            {
                navigator.notification.alert("Please attach California Driver's License/ID.",function(){},'Notification','OK');
            }
            else
            if($('#prescroption').val() === "")
            {
                navigator.notification.alert("Please attach Prescription.",function(){},'Notification','OK');
            }
            else
            {   
                dataParamSignup['firstName'] = firstname,
                dataParamSignup['lastName'] = lastname,
                dataParamSignup['phone'] = mobilenum,
                dataParamSignup['emailid'] = emailAdd;
                dataParamSignup['driving_licence'] = localStorage.getItem('license_id');
                dataParamSignup['ext_dl'] = localStorage.getItem('licenseId_fileEXT');
                dataParamSignup['prescription'] = localStorage.getItem('prescription');
                dataParamSignup['ext_pr'] = localStorage.getItem('prescription_fileEXT');
               // setTimeout(function(){
                    app.mobileApp.navigate('#signupView2'); ///-----------------------------------------    
               // },3000);
            }
            
            
           /* */
            
        },
        
        registrationStep2:function()
        {
            var username = this.get('username'),
                password = this.get('userPwd'),
                confpassword = this.get('userCnfPwd');
            
            if(username === "")
            {
                 navigator.notification.alert("Please Enter Username.",function(){},'Notification','OK');
            }
            else
            if(password === "")
            {
                 navigator.notification.alert("Please Enter Password.",function(){},'Notification','OK');
            }
            else
            if(confpassword === "")
            {
                navigator.notification.alert("Please Enter Confirm Password.",function(){},'Notification','OK');
            }
            else
            if(confpassword !== password)
            {
                 navigator.notification.alert("Enter Password does not match.",function(){},'Notification','OK');
            }
            else
            {
                dataParamSignup['username'] = username;
                dataParamSignup['pass'] = password;
                //app.mobileApp.navigate('views/shop.html');
                app.signupService.viewModel.registrationAPI(dataParamSignup);
            }
        },
        
        registrationAPI : function(data)
        {
            app.mobileApp.showLoading();
            var signupDataS = new kendo.data.DataSource({
                transport:{
                    read:{
                        url:localStorage.getItem('registration_API'),
                        type:'POST',
                        dataType:'json',
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
                    console.log(e);
                    navigator.notification.alert("Server not responding properly.Please check your internet connection.",
                        function () { }, "Message", 'OK');
                }
            });
            signupDataS.fetch(function(){
                var data = this.data();
                app.mobileApp.hideLoading();
                console.log(data);
                //data[0]['msg']
                if(data[0]['status'] === '1' || data[0]['status'] === 1)
                {
                    //localStorage.setItem("user_id",data[0]['userID']);
                    navigator.notification.alert(data[0]['msg'],function(){},'Signup',"OK");
                    app.mobileApp.navigate('#loginView');
                }
                else
                {
                     navigator.notification.alert(data[0]['msg'],
                        function () { }, "Message", 'OK');
                }
            });
        }
    });
    
    app.signupService = {
        viewModel:new signupViewModel()
    };
})(window);