var ShareURL = null;

//viyuta
var ShareTitle = null;
var ShareSummary = null;

//var redirectto = 'http://localhost:2410/Clients/SocialMedia/';
var SMurl = null;
var ShortUrl = '';
GetUrl();
var redirectto = ShortUrl + 'SocialMedia/';

function SocialMedia(channel, title, summary) {
    ShareURL = document.getElementById('ucSocialMedia_hdnUrlsource').getAttribute('value').toString();

    if (window.location.href.indexOf("https") > -1) {
        ShareURL = ShareURL.replace("http:", "https:");
    }
    //viyuta
    ShareTitle = title == '' ? 'Share Price Center' : title;
    ShareSummary = summary;

    SMurl = redirectto + channel.toString().toLowerCase() + '.html?v=1';
    window.open(SMurl, "", 'width=700,height=570');
}

function SocialMediaV3(channel, title, summary) {
    ShareURL = document.getElementById('ucSPCTabBox_ucSocialMedia_hdnUrlsource').getAttribute('value').toString();

    if (window.location.href.indexOf("https") > -1) {
        ShareURL = ShareURL.replace("http:", "https:");
    }
    //viyuta
    ShareTitle = title == '' ? 'Share Price Center' : title;
    ShareSummary = summary;

    SMurl = redirectto + channel.toString().toLowerCase() + '.html?v=1';
    window.open(SMurl, "", 'width=700,height=570');
}

function GetUrl() {
    ShortUrl = window.location.href.toLowerCase().substr(0, window.location.href.toLowerCase().indexOf("clients")) + "Clients/";
}


//function SocialMedia(channel) {
//    ShareURL = document.getElementById('ucSocialMedia_hdnUrlsource').getAttribute('value').toString();
//    SMurl = redirectto + channel.toString().toLowerCase() + '.html';
//    window.open(SMurl, "", 'width=700,height=570');
//}



//var ShareURL = null;
//var redirectto = 'http://localhost/Clients/SocialMedia/';
//var SMurl = null;

//function SocialMedia(channel) {
//    ShareURL = document.getElementById('ucSocialMedia_hdnUrlsource').getAttribute('value').toString();
//    SMurl = redirectto + channel.toString().toLowerCase() + '.html';
//    window.open(SMurl, ShareURL, 'width=700,height=570');
//}