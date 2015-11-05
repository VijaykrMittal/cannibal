var app = (function(){
    
    mobileApp = new kendo.mobile.Application(document.body,
                                                            {
                                                                skin:'flat',
                                                                initial:'views/login.html'
                                                            }
    );
    
    return{
        mobileApp:mobileApp
    }

}(window));