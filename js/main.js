/**
 * Created by ypalaguta on 06.01.2016.
 */
"use strict";
///todo
///settings
///invisible-collector
///coocie set save

//make modal scripts and css
//removing invisible blocks

var userProp={
    height:0,
    width:0,
    stateInterval:100,
    beginTimes:0,
    pausedState:false,
    mainInterval:0,
    mode:0,
};
var imageProp={
    imagePath:'/img/default.png',
    width:0,
    height:0,
};

window.addEventListener('resize',function(){
    userProp.height=window.innerHeight;
    userProp.width=window.innerWidth;
    resizeMainWindow();
});
$(function(){
    userProp.height=window.innerHeight;
    userProp.width=window.innerWidth;

    resizeMainWindow();
    //------------------------- begin

    //Save state speed slider

    $(speedSlider).slider({
        range: "min",
        value: 300,
        min: 50,
        max: 1000,
        slide: function( event, ui ) {
            $(sliderValue).html(ui.value);
        }
    });

    //hover animation for modal
    $('.modalWindow').on('mousemove','.item_value_wrap',function(){
        $(this).find('.modalItem').addClass('active');
    });
    $('.modalWindow').on('mouseleave','.item_value_wrap',function(){
        $(this).find('.modalItem').removeClass('active');
    });


});


function resizeMainWindow(){
    programWindow.style.height=userProp.height-5-10+'px';
    nav.style.marginLeft=userProp.width-200-20+'px';
}

function placeBlock() {
    if (!userProp.pausedState) {
        if (document.getElementsByClassName('current')[0])
            $('.current').removeClass('current').draggable('disable');

        var iImg = document.createElement('img');
        // iDiv.id = 'block';
        iImg.className = 'repeatedBlock_' + userProp.beginTimes + ' current';
        iImg.src = imageProp.imagePath;
        document.getElementById('programWindow').appendChild(iImg);
        $(iImg).draggable();
        userProp.beginTimes++;
        triggerBegin.style.display = 'none';
        triggerPause.style.display = 'block';
    }
    else {
        triggerBegin.style.display = 'none';
        triggerPause.style.display = 'block';
        $('.current').draggable('enable');
        userProp.pausedState=false;
    }
    userProp.mainInterval=setInterval(saveState,userProp.stateInterval);
}

function clearState(){
    userProp.pausedState=false;
    $('#programWindow').empty();
    triggerBegin.style.display='block';
    triggerPause.style.display='none';
    clearInterval(userProp.mainInterval);
}

function pauseState(){
    triggerBegin.style.display='block';
    triggerPause.style.display='none';
    //$('.current').draggable('disable');
    userProp.pausedState=true;
    clearInterval(userProp.mainInterval);
}
function saveState(){
    if((document.getElementsByClassName('current')[0].style.left!=programWindow.getElementsByTagName('img')[programWindow.getElementsByTagName('img').length-1].style.left&&
    document.getElementsByClassName('current')[0].style.top!=programWindow.getElementsByTagName('img')[programWindow.getElementsByTagName('img').length-1].style.top)||
    document.getElementsByTagName('img').length==1){
    var cln = document.getElementsByClassName('current')[0].cloneNode(true);
    document.getElementById('programWindow').appendChild(cln);
    $(cln).removeClass('current');
    }
}

function showSettings(){
    if(modalSettings.style.display=='none'){
        setSettings();
        if($('#triggerPause').css('display')=='block')
        pauseState();
        modalSettings.style.display='block';
    }
    else
        modalSettings.style.display='none';
}


$(function(){
    $('.modalWindow .close,.modalWindow .settingsIcon').on('click',closeModal);
    $('.modalWindow .restore_default').on('click',restoreDefault);
    $('.modalWindow .apply').on('click',applySettings);
});


function highlightBlock(){
    if($('.current').length!=0){
        $('.current').css('box-shadow','0px 0px 65px 17px rgba(207,29,29,1)');
        $('.current').css('transition','1s ease');
    setTimeout(function(){
        $('.current').css('box-shadow','none');
        $('.current').css('transition','none');
    },1000);
    }
}

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