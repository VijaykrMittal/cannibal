(function(global){
    var editViewModel,
        app = global.app = global.app || {};
    
    editViewModel = kendo.data.ObservableObject.extend({
        
        firstname:'',
        lastname:'',
        mobilenum:'',
        emailadd:'',
        username:'',
        
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
        },
        
        validationState:function()
        {
           var firstname = this.get('firstname'),
               lastname = this.get('lastname'),
               mobilenum = this.get('mobilenum'),
               emailAdd = this.get('emailadd'),
               username = this.get('username');
            
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
                alert('123456');
            }
            
        }
    });
    app.editService = {
      viewModel:new editViewModel()  
    };
})(window);