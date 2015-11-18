var app = (function(){
    
    var onDeviceReady = function()
    {
      window.connectionInfo = new connectionApp();
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
    
    return{
        mobileApp:mobileApp
    }

}(window));