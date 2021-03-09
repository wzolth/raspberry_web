//window.location.href = window.location.href
function com(){
//alert('hi!');
//alert('HI!');
//$.get("script.php");
//var xmlhttp=new XMLHttpRequest();
//xmlhttp.open('POST','sc.php',true);
//xmlhttp.send();
//var promise = new Promise(function(resolve, reject) {
$.ajax({
type:"POST",
url:'sc.php',
beforeSend: function () {
waiting_dialog()
},
complete:function(){
//alert('Complete');
//dialog_waiting.close();
},
success:function(){
//alert('kek')
dialog();
},
error: function(msg){
//alert(msg)
}
//alert("WORK!");
});
//alert('work');
//resolve("ok");
}
function dialog(){
//alert("im here");
var dialog = document.getElementById('dialog');
dialog.style.backgroundImage="url('http://menelai.ddns.net:888/photo.jpg')";
dialog.style.backgroundSize="cover";
dialog.showModal();
document.getElementById('closeDialog').onclick=function(){

dialog.close();
location.reload();
}
}
function waiting_dialog(){
//alert("im here");
var dialog_waiting = document.getElementById('waiting_dialog');
//dialog_waiting.style.backgroundImage="url(http://menelai.ddns.net:888/photo.jpg)";
//dialog_waiting.style.backgroundSize="cover";
dialog_waiting.showModal();
document.getElementById('closewaitingDialog').onclick=function(){

dialog_waiting.close();
}
}



