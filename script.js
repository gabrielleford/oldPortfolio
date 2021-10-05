window.onscroll = function showHide() {
    if (document.body.scrollTop > 270 || document.documentElement.scrollTop > 270) {
        document.getElementById('topLink').style.visibility = 'visible';
        document.getElementById('navbar').style = 'border-bottom: solid 1px #f5f5f5; background-color: rgba(255, 255, 255, 0.7);';
    } else {
        document.getElementById('topLink').style.visibility = 'hidden';
        document.getElementById('navbar').style = 'border-bottom: none; background-color: none;';
    }
}