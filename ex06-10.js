function hyoji(){
var str = "ソフトボール楽しい！";
var cnt = document.timer.moji.value.length;

if(cnt<11){
  document.timer.moji.value=str.substr(0,cnt+1);}
else{
  document.timer.moji.value="";}}
  function startfnc(){
    setInterval("hyoji()",1000);}
 function mes(){
   alert("3秒経ちました！");
 }