(function(global){
    var editViewModel,
        app = global.app = global.app || {};
    
    editViewModel = kendo.data.ObservableObject.extend({
        
        firstname:'',
        lastname:'',
        mobilenum:'',
        licenceId:'',
        prescroption:'',
        userName:'',
        
        show : function()
        {
            /*Get the image or docs from the mobile Device*/
            $('#licenceId').unbind('.myPlugin');
            $('#licenceId').on('click.myPlugin',function(){
                window.fileGet.storeLicenseID();
            });
            
            $('#prescroption').unbind('.myPlugin');
            $('#prescroption').on('click.myPlugin',function(){
                window.fileGet.storePrescription();
            });
            
            app.editService.viewModel.setEditProfileData();
        },
        
        setEditProfileData : function()
        {
            this.set('firstname',localStorage.getItem('user_fname'));
            this.set('lastname',localStorage.getItem('user_lname'));
            this.set('emailadd',localStorage.getItem('email'));
            this.set('mobilenum',localStorage.getItem('phoneNumber'));
            this.set('userName',localStorage.getItem('userName'));
           
            if(localStorage.getItem('cb_member_dl') !== "")
            {
                this.set('licenceId',localStorage.getItem('cb_member_dl'));
            }
            
            if(localStorage.getItem('cb_member_priscription') !== "")
            {
                this.set('prescroption',localStorage.getItem('cb_member_priscription'));
            }
        },
        
        validationState:function()
        {
           var firstname = this.get('firstname'),
               lastname = this.get('lastname'),
               mobilenum = this.get('mobilenum'),
               licenceId = $('#licenceId').val(),
               prescroption = $('#prescroption').val();
            
         /*   var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            
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
            {  */ 
                var re = /(?:\.([^.]+))?$/;
                var ext_dl = re.exec(licenceId)[1];
                var licenceId_base64Data = window.btoa(licenceId);
                
                var ext_pr = re.exec(prescroption)[1];
                var prescroption_base64Data = window.btoa(prescroption);
                
                dataParam = [];
                dataParam['firstName'] = firstname;
                dataParam['lastName'] = lastname;
                dataParam['phone'] = mobilenum;
                dataParam['driving_licence'] = licenceId_base64Data;
                dataParam['prescription'] = prescroption_base64Data;
                dataParam['ext_dl'] = ext_dl;
                dataParam['ext_pr'] = ext_pr;
                
               // dataParam.push({'firstName':firstname,'lastName':lastname,'phone':mobilenum,'driving_licence':licenceId_base64Data,'prescription':prescroption_base64Data,'ext_dl':ext_dl,'ext_pr':ext_pr});
                
                console.log(dataParam);
              /*  app.editService.viewModel.API_editProfile(dataParam);
                //app.mobileApp.navigate('#:back');
            }
            */
        },
        
        API_editProfile : function(data)
        {
            //?&username=sam&firstName=SAM&lastName=GARG&phone=1234567890&driving_licence=jhsdkfskjfs&prescription=ghkfgksdfsdk&ext_dl=pdf&ext_pr=pdf
            
            var editProfile = new kendo.data.DataSource({
                transport:{
                    read:{
                        url:localStorage.getItem('editProfile_API'),
                        type:'GET',
                        dataType:'JSON',
                        data:data
                    }
                },
                schema:{
                    data:function(data)
                    {
                        console.log(data);
                        return [data]
                    }
                },
                error:function(e)
                {
                    navigator.notification.alert("Server not responding properly.Please check your internet connection.",function(){},'Message','OK');
                }
            });
            editProfile.fetch(function(){
                var data = this.data();
                console.log(data);
            });
        }
    });
    app.editService = {
      viewModel:new editViewModel()  
    };
})(window);