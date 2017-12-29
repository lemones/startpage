 // Stole'n'hacked JS code from twily.info //

var $=function(id) { return document.getElementById(id); };

var menu=[ // Menu titles
    "Everyday",                                                                 // mnu_2
    "Linux",                                                                    // mnu_3
    "Python",                                                                   // mnu_4
    "Entertainment",                                                            // mnu_5
    "Theme",                                                                    // mnu_6
    "Security",                                                                 // mnu_7
    "Other",                                                                    // mnu_8
];


var links=[
    ["Gmail",                           "https://gmail.com",                        "https://www.google.com/gmail/about/images/favicon.ico"],
    ["Aftonbladet",                     "http://aftonbladet.se",                    ""],
    ["Blocket",                         "https://blocket.se",                       ""],
    ["Github",                          "https://github.com",                       ""],
    ["", "", ""],

    ["Vim Awesome",                     "https://vimawesome.com/",                  "https://vimawesome.com/static/favicon.ico"],
    ["linuxconfig",                     "https://linuxconfig.org/",                 ""],
    ["xero - code",                     "http://code.xero.nu/",                     ""],
    ["", "", ""],

    ["WebScraping",                    "https://likegeeks.com/python-web-scraping/", ""],
    ["Beautifulsoup",                  "https://www.crummy.com/software/BeautifulSoup/bs4/doc/", ""],
    ["", "", ""],

    ["Failblog",                        "http://failblog.cheezburger.com/",         ""],
    ["I Am Bored",                      "http://www.i-am-bored.com/",               "http://www.i-am-bored.com/wp-content/uploads/2015/07/favicon.ico"],
    ["Imgur",                           "https://imgur.com/",                       ""],
    ["9gag",                            "https://9gag.com/trending",                ""],
    ["WhatsTheHarm",                    "http://whatstheharm.net",                  ""],
    ["", "", ""],

    ["Wallhalla",                       "https://wallhalla.com/",                   ""],
    ["Wallhaven",                       "https://alpha.wallhaven.cc/",              ""],
    ["4bit",                            "https://ciembor.github.io/4bit/",          ""],
    ["dotshare.it",                     "http://dotshare.it/",                      ""],
    ["Simple Desktop",                  "http://simpledesktops.com/",               ""],
    ["Unicode Table",                   "https://unicode-table.com/en/",            ""],
    ["", "", ""],

    ["is Stack",                        "https://security.stackexchange.com/",      ""],
    ["c22",                             "https://blog.c22.cc/",                     ""],
    ["irongeek",                        "https://www.irongeek.com/",                ""],
    ["vuln scan github",                "https://github.com/vulnersCom/vulners-scanner", ""],
    ["DNS Leak Test",                   "https://www.dnsleaktest.com/",             ""],
    ["zerossl",                         "https://zerossl.com/",                     ""],
    ["", "", ""],

    ["Pro Toolz",                       "http://pro-toolz.net/index.html",          ""],
    ["xkcd",                            "https://xkcd.com/",                        ""],
    ["unixporn",                        "https://www.reddit.com/r/unixporn/",       ""],
];

var showFavicon=true;
var i,ss="";
function init() {
    build();
}

function build() {
    $('mnu').innerHTML="";
    for(i=0;i<menu.length;i++) {
        $('mnu').innerHTML+="<li>"+menu[i]+"<ul><div id=\"mnu_"+(i+1)+"\"></div></ul></li>";
    }
    var m=1,skip=false;
    for(i=0;i<links.length;i++) {
        if(links[i][0]==""    && links[i][1]=="")    skip=true;
        if(!skip) {
            var printimg="";
            if(showFavicon) {
                var favicon;
                if(links[i][2]!="") favicon=links[i][2];
                else                favicon=getFavicon(links[i][1]);
                printimg="<div class=\"icon\"><img src=\""+favicon+"\""+" onload=\"javascript:this.style.visibility='inherit';\" /></div> ";
            }
            $('mnu_'+m).innerHTML+="<li><a href=\""+links[i][1]+"\" target=\"_blank\">"+printimg+links[i][0]+"</a></li>";
        } else {
            m++;
            skip=false;
        }
    }
}

function getFavicon(url) {
    var l=document.createElement("a");
    l.href=url;
    return l.protocol+"//"+l.hostname+"/favicon.ico";
}
