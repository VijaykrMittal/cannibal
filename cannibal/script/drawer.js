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
            alert("Clones");
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
            alert("Privacy Policy");
        },
        
        moveToTerms_Condition:function()
        {
            alert("Terms and Condition");
        },
        
        moveToInviteFriend:function()
        {
            alert("Invite a Friend");
        },
        
        
    });
    
    app.drawerService = {
        viewModel:new drawerViewModel()
    };
})(window);