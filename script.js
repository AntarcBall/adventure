box = document.getElementById('display')
box.innerHTML = '혼자만의채팅 ㄱ'
keys = {};
document.addEventListener('keydown', e => {keys[e.key] = true})  //키 체크중 
document.addEventListener('keyup', e => {if(keys[e.key]) delete keys[e.key]})  
input = document.getElementById('text')
function writeNewRow(value) {
    box.innerHTML += '<br/>' + value
}
btn = document.getElementById('btn');

function write(){
    if (input.value){
    writeNewRow('사용자: '+input.value);
    input.value = '';}
}
btn.addEventListener('click',function () {
    write();
})
function loop(){
    if (keys.Enter){
        write();
    }
    requestAnimationFrame(loop)
}
requestAnimationFrame(loop)