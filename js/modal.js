/**
 * Created by Catallea on 19/01/2016.
 */

function closeModal(){
    $('.modalWindow').hide();
}

function isModalCorrect(){
    return true;
}

function alertError(msg){
    msg=msg||'error';
    alert(msg);
}


function setSettings(){
    $('#sliderValue').text(userProp.stateInterval);
    $('#imgHeight').text(userProp.height);
    $('#imgWidth').text(userProp.width);
    $('#modeSelect').val(userProp.mode);
}

function applySettings(){

    if(isModalCorrect()){
        userProp.stateInterval=$('#sliderValue').text();
        userProp.height=$('#imgHeight').text();
        userProp.width=$('#imgWidth').text();
        userProp.mode=$('#modeSelect').val();
        closeModal();
    }
}
function restoreDefault(){
    userProp={
        height:0,
        width:0,
        stateInterval:100,
        beginTimes:0,
        pausedState:false,
        mainInterval:0,
        mode:0,
    };
    closeModal();
}


function checkCookie(){

}