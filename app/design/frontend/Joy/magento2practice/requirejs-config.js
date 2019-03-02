var config = {

    paths: {
        "flagtrap": "js/jquery.flagstrap",
        "carousel": "js/owl.carousel",
        "navigation": "js/owl.navigation",
        "js": "js/js"
    },
    shim:{
        'flagtrap':{
            deps:['jquery']
        },
        'carousel':{
            deps:['jquery']
        },
        'navigation': {
            deps:['carousel']
        }
    }
}