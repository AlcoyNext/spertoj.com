// 
//  PROFILE
//

profile();


// 
//  GIS
//

tt.setProductInfo("spertoj.com", "1")
let map = tt.map({
    key: "idrSO8HEhlajaGPSMkSAszNR9lTMCMHQ",
    container: "map",
})

var nav = new tt.NavigationControl({});
map.addControl(nav, 'top-left');