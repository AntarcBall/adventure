box = document.getElementById('display')
box.innerHTML = '윤서진 님이 입장하셨습니다. 그를 자극하지 마세요.'
keys = {};
document.addEventListener('keydown', e => {keys[e.key] = true})  //키 체크중 
document.addEventListener('keyup', e => {if(keys[e.key]) delete keys[e.key]})  
input = document.getElementById('text')
hishit = ['(대충이모티콘)','(대충이모티콘)','ㄷㄷ','ㄷㄷ','ㄷㄷ','ㄷㄷ','우흥','우흥','아따','ㅇ','ㅇ','ㅎㅌㅊ','(화장실감)','(삐져서 반응없음)']
function writeNewRow(value) {
    box.innerHTML += '<br/>' + value
}
btn = document.getElementById('btn');

function write(){
    if (input.value){
    writeNewRow('사용자: '+input.value);
    writeNewRow('윤서진: '+hishit[Math.floor(Math.random()*hishit.length)]+' . . . . . . . .');
    input.value = '';}
}
btn.addEventListener('click',function () {
    write();
})
function loop(){
    if (keys.Enter){
        write();
    var objDiv = document.getElementById("display"); 
    objDiv.scrollTop = objDiv.scrollHeight;
    }
    requestAnimationFrame(loop)
}
requestAnimationFrame(loop)
