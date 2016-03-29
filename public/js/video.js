var vid, playbtn, seekslider, curtimetext, durtimetext, mutebtn, volumeslider, fullscreenbtn;
function intializePlayer(){
    // Set object references
    vid = document.getElementById("my_video");
    playbtn = document.getElementById("playpausebtn");
    seekslider = document.getElementById("seekslider");
    curtimetext = document.getElementById("curtimetext");
    durtimetext = document.getElementById("durtimetext");
    mutebtn = document.getElementById("mutebtn");
    volumeslider = document.getElementById("volumeslider");
    fullscreenbtn = document.getElementById("fullscreenbtn");
    // Add event listeners
    playbtn.addEventListener("click",playPause,false);
    seekslider.addEventListener("change",vidSeek,false);
    vid.addEventListener("timeupdate",seektimeupdate,false);
    mutebtn.addEventListener("click",vidmute,false);
    volumeslider.addEventListener("change",setvolume,false);
    fullscreenbtn.addEventListener("click",toggleFullScreen,false);
}
window.onload = intializePlayer;
function playPause(){
    if(vid.paused){
        vid.play();
        playbtn.style.background = "url(../img/logo.png)";
    } else {
        vid.pause();
        playbtn.style.background = "url(../img/logo.png)";
    }
}
function vidSeek(){
    var seekto = vid.duration * (seekslider.value / 100);
    vid.currentTime = seekto;
}
function seektimeupdate(){
    var nt = vid.currentTime * (100 / vid.duration);
    seekslider.value = nt;
    var curmins = Math.floor(vid.currentTime / 60);
    var cursecs = Math.floor(vid.currentTime - curmins * 60);
    var durmins = Math.floor(vid.duration / 60);
    var dursecs = Math.floor(vid.duration - durmins * 60);
    if(cursecs < 10){ cursecs = "0"+cursecs; }
    if(dursecs < 10){ dursecs = "0"+dursecs; }
    if(curmins < 10){ curmins = "0"+curmins; }
    if(durmins < 10){ durmins = "0"+durmins; }
    curtimetext.innerHTML = curmins+":"+cursecs;
    durtimetext.innerHTML = durmins+":"+dursecs;
}
function vidmute(){
    if(vid.muted){
        vid.muted = false;
        mutebtn.innerHTML = "Mute";
    } else {
        vid.muted = true;
        mutebtn.innerHTML = "Unmute";
    }
}
function setvolume(){
    vid.volume = volumeslider.value / 100;
}
function toggleFullScreen(){
    if(vid.requestFullScreen){
        vid.requestFullScreen();
    } else if(vid.webkitRequestFullScreen){
        vid.webkitRequestFullScreen();
    } else if(vid.mozRequestFullScreen){
        vid.mozRequestFullScreen();
    }
};

//Search function//


function SearchYouTube(query) {
$.ajax({

    url: 'http://52.24.132.114/VideoWiki/media/search'
{
      "limit":10,
      "offset":0,
      "keyword":"funny"
}
 + test,
    dataType: 'jsonp',
    success: function (data) {
        var row = "";
        for (i = 0; i < data.feed.entry.length; i++) {
            row += "<div class='search_item'>";
            row += "<table width='100%'>";
            row += "<tr>";
            row += "<td vAlign='top' align='left'>";
            row += "<a href='#' ><img width='120px' height='80px' src=" + data.feed.entry[i].media$group.media$thumbnail[0].url + " /></a>";
            row += "</td>";
            row += "<td vAlign='top' width='100%' align='left'>";
            row += "<a href='#' ><b>" + data.feed.entry[i].media$group.media$title.$t + "</b></a><br/>";
            row += "<span style='font-size:12px; color:#555555'>by " + data.feed.entry[i].author[0].name.$t + "</span><br/>";
            row += "<span style='font-size:12px' color:#666666>" + data.feed.entry[i].yt$statistics.viewCount + " views" + "<span><br/>";
            row += "</td>";
            row += "</tr>";
            row += "</table>";
            row += "</div>";
        }
        document.getElementById("search-results-block").innerHTML = row;
    },
    error: function () {
        alert("Error loading youtube video results");
    }
});
return false;
};






