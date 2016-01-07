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
                window.sms.send('', 'Hi! This is a Testing message!', options, this.onSuccess, this.onError);
            }
        },
        
        onSuccess:function(msg)
        {
            console.log(msg);
        },
        
        onError:function(msg)
        {
            console.log(msg);
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