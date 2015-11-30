(function(global){
    var drawerViewModel,
        app = global.app =global.app || {};
    
    drawerViewModel = kendo.data.ObservableObject.extend({
        
        show:function()
        {
            
        },
        
        moveToProfile:function()
        {
            app.mobileApp.navigate('views/myprofile.html');
        },
        
        moveToContactus:function()
        {
            app.mobileApp.navigate('views/contact.html');
        },
        
        moveToAboutus:function()
        {
           app.mobileApp.navigate('views/aboutus.html');
        },
        
        moveToLogout:function()
        {
            app.loginService.viewModel.setUserLogout();
        },
        
        moveToShop:function()
        {
            app.mobileApp.navigate('views/shop.html');
        },
        
        moveToShoppingCart:function()
        {
            app.mobileApp.navigate('views/mycart.html');
        },
        
        moveToClones:function()
        {
            app.mobileApp.navigate('views/clones.html');
        },
        
        moveToSpecials:function()
        {
            alert("Specials");
        },
        
        moveToGallery:function()
        {
            alert("Gallery");
        },
        
        moveToPrivacyPloicy:function()
        {
            app.mobileApp.navigate('views/privacy_policy.html');
        },
        
        moveToTerms_Condition:function()
        {
            alert("Terms and Condition");
        },
        
        moveToInviteFriend:function()
        {
            alert("Invite a Friend");
        },
        
        moveToPastorder:function()
        {
            alert("Past Order");
        },
        
        moveToRateapp:function()
        {
            alert("Rate the App");
        }
        
        
    });
    
    app.drawerService = {
        viewModel:new drawerViewModel()
    };
})(window);