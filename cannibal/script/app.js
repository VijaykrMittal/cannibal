var app = (function(){
    
    var onBackKeyDown = function(e)
    {
        if(mobileApp.view()['element']['0']['id']==='shopView')
        {
            e.preventDefault();
            navigator.notification.confirm('You want to exit App',function(confirm){
                if(confirm === 1 || confirm === '1')
                {
                    navigator.app.exitApp();
                }
            },'Notification',"Yes,No");
        }
        else if(mobileApp.view()['element']['0']['id']==='loginView')
        {
            navigator.app.exitApp();
        }
       /* else if(mobileApp.view()['element']['0']['id']==='signupView2')
        {
            e.preventDefault();
        }*/
        else
        {
            mobileApp.navigate('#:back');
        }
    }
    
    var onDeviceReady = function()
    {
        window.connectionInfo = new connectionApp();
        window.fileGet = new getFileApplication();
        document.addEventListener('backbutton',onBackKeyDown,false);
    };
    
    function connectionApp()
    {}
    
    connectionApp.prototype = {
        checkConnection : function()
        {
            if(typeof navigator.connection.type !== "undefined")
            {
                var networkState = navigator.connection.type;
                var states = {};
                states[Connection.UNKNOWN] = 'Unknown connection';
                states[Connection.ETHERNET] = 'Ethernet connection';
                states[Connection.WIFI] = 'WiFi connection';
                states[Connection.CELL_2G] = 'Cell 2G connection';
                states[Connection.CELL_3G] = 'Cell 3G connection';
                states[Connection.CELL_4G] = 'Cell 4G connection';
                states[Connection.CELL] = 'Cell generic connection';
                states[Connection.NONE] = 'No network connection';
                if (states[networkState] === 'No network connection') {
                    return false;
                }
            }
            return true;
        }
    }
    
    function getFileApplication() {}
    
    getFileApplication.prototype = {
        storeLicenseID:function()
        {
            /*navigator.camera.getPicture(
            uploadPhoto,
            function(message) {
                alert('Failed to get a picture');
            }, {
                quality         : 50,
                destinationType : navigator.camera.DestinationType.FILE_URI,
                sourceType      : navigator.camera.PictureSourceType.PHOTOLIBRARY,
                mediaType: navigator.camera.MediaType.ALLMEDIA 
            });

            function uploadPhoto(fileURI) {
                var re = /(?:\.([^.]+))?$/;
                var ext = re.exec(fileURI)[1]
                alert(fileURI);
                alert(ext);
                console.log(window.btoa(fileURI));
                localStorage.setItem('fileURL',fileURI);
                $('#testimg').attr('src','data:image/png;base64,'+window.btoa(fileURI));

                var options = new FileUploadOptions();
                options.fileKey = "file";
                options.fileName = fileURI.substr(fileURI.lastIndexOf('/') + 1);
                if (cordova.platformId == "android") 
                {
                    if(ext == 'pdf' || ext == 'docx')
                    {

                    }
                    else
                    {
                        //options.fileName += ".jpg"         
                    }
                }

                alert(options.fileName);
                options.mimeType = "application/octet-stream";
                options.params = {}; // if we need to send parameters to the server request 
                options.headers = {
                Connection: "Close"
            };
                options.chunkedMode = false;
                alert(JSON.stringify(options));
            }*/
            
            navigator.camera.getPicture(onSuccess,onFail,{
                quality:50,
                destinationType :Camera.DestinationType.FILE_URI,
                sourceType      : Camera.PictureSourceType.SAVEDPHOTOALBUM,
                mediaType: Camera.MediaType.ALLMEDIA 
            });
            
            function onSuccess(imageData)
            {
                var re = /(?:\.([^.]+))?$/;
                var ext = re.exec(imageData)[1];
                var base64Data = window.btoa(imageData);
                localStorage.setItem('license_id',base64Data);
                localStorage.setItem('licenseId_fileEXT',ext);
                var filename = imageData.substr(imageData.lastIndexOf('/') + 1);
                $('#licenceId').val(filename);
            }
            
            function onFail(message)
            {
                console.log(message);
            }
        },
        
        storePrescription : function()
        {
            navigator.camera.getPicture(onSuccess,onFail,{
                quality:50,
                destinationType :Camera.DestinationType.FILE_URI,
                sourceType      : Camera.PictureSourceType.SAVEDPHOTOALBUM,
                mediaType: Camera.MediaType.ALLMEDIA 
            });
            
            function onSuccess(imageData)
            {
                var re = /(?:\.([^.]+))?$/;
                var ext = re.exec(imageData)[1];
                var base64Data = window.btoa(imageData);
                localStorage.setItem('prescription',base64Data);
                localStorage.setItem('prescription_fileEXT',ext);
                var filename = imageData.substr(imageData.lastIndexOf('/') + 1);
                $('#prescroption').val(filename);
            }
            
            function onFail(message)
            {
                console.log(message);
            }
        }
    }
    
    if(localStorage.getItem('login_status') === 0 || localStorage.getItem('login_status') === '0' || localStorage.getItem('login_status') === null)
    {
        mobileApp = new kendo.mobile.Application(document.body,
                                                            {
                                                                skin:'flat',
                                                                initial:'views/login.html'
                                                            }
        );
    }
    else
    {
        mobileApp = new kendo.mobile.Application(document.body,
                                                            {
                                                                skin:'flat',
                                                                initial:'views/shop.html'
                                                            }
        );
    }
    
    
    document.addEventListener('deviceready',onDeviceReady,false);
    
    /* ALL WEB SERVICE STORE IN THE LOCAL STORAGE*/
    localStorage.setItem('login_API','http://wordpress2014:Flexsin_2020@flexsin.org/lab/wordpress/cannibalsonline/conAPI/login.php');
    localStorage.setItem('forgot_API','http://wordpress2014:Flexsin_2020@flexsin.org/lab/wordpress/cannibalsonline/conAPI/Forget.php');
    localStorage.setItem('changePwd_API','http://wordpress2014:Flexsin_2020@flexsin.org/lab/wordpress/cannibalsonline/conAPI/Change_Password.php');
    
    return{
        mobileApp:mobileApp
    }

}(window));