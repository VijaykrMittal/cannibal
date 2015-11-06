var app = (function(){
    
    mobileApp = new kendo.mobile.Application(document.body,
                                                            {
                                                                skin:'flat',
                                                                initial:'views/myprofile.html'
                                                            }
    );
    
    return{
        mobileApp:mobileApp
    }

}(window));