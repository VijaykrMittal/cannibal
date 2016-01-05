(function(global){
    var inviteViewModel,
        app = global.app = global.app || {};
    
    inviteViewModel = kendo.data.ObservableObject.extend({
        
        show:function()
        {
            
        },
        
        sendSMSViaComposer:function()
        {
            if (!this.checkSimulator()) {
                var options = {
                  android: {
                    intent: 'INTENT'
                  }
                };
                window.sms.send('0123456789', 'Hi there!', options, this.onSuccess, this.onError);
            }
        },
        
        onSuccess:function(msg)
        {
            setTimeout(function() {
 	           alert('SMS success: ' + msg);                
            }, 1);
        },
        
        onError:function(msg)
        {
            setTimeout(function() {
 	           alert('SMS error: ' + msg);                
            }, 1);
        },
        
        checkSimulator: function() {
            if (window.navigator.simulator === true) {
                alert('This plugin is not available in the simulator.');
                return true;
            } else if (window.sms === undefined) {
                alert('Plugin not found. Maybe you are running in AppBuilder Companion app which currently does not support this plugin.');
                return true;
            } else {
                return false;
            }
        },
    });
    app.inviteService = {
        viewModel:new inviteViewModel()
    };
})(window);