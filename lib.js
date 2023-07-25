// 
//  PROFILE
//

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function profile() {
    let profile = document.getElementById("profile");
    if (getCookie('token_id') !== undefined ){
        profile.innerHTML = "<span id=\"logout\" class=\"material-symbols-outlined material-b\" onclick=\"'', '_self');\">menu</span>";
    } else {
        profile.innerHTML = "<span id=\"login\" class=\"material-symbols-outlined material-b\" onclick=\"window.open('https://login.spertoj.com/login?client_id=7u8j0l8bdt8il60gampj44vbm&response_type=code&scope=email+openid+phone&redirect_uri=https%3A%2F%2Fspertoj.com%2Fauth%2Fin.html', '_self');\">login</span>";
    }
}


// 
//  GIS
//
function checkControl(control, div) {
    if (map.hasControl(control)) {
        map.removeControl(control);
        div.classList.remove("active");
    } else {
        map.addControl(
            control,
            'top-right'
        );
        div.classList.add("active");
    }
}

/* LAYERS */
function layerPop(layer) {
    let element = document.getElementById(layer);
    let x = element.offsetLeft;
    let y = element.offsetTop;


}

function checkLayer() {

}

