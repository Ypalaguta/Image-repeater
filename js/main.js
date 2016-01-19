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
    iImg:null,
    context:null,
};
var imageProp={
    imagePath:'/img/default.jpg',
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

    $('.modalWindow .close,.modalWindow .settingsIcon').on('click',closeModal);
    $('.modalWindow .restore_default').on('click',restoreDefault);
    $('.modalWindow .apply').on('click',applySettings);

});


function resizeMainWindow(){
    programWindow.style.height=userProp.height-5-10+'px';
    nav.style.marginLeft=userProp.width-200-20+'px';
    $(mainCanvas).attr({'width':(userProp.width-10),
        'height':(userProp.height-10)});
}

function placeBlock() {
    if (!userProp.pausedState) {
        if (document.getElementsByClassName('current')[0])
            $('.current').removeClass('current').draggable('disable');

        userProp.iImg = document.createElement('img');
        // iDiv.id = 'block';
        userProp.iImg.className = 'repeatedBlock_' + userProp.beginTimes + ' current';
        userProp.iImg.src = imageProp.imagePath;
        $('#programWindow').prepend(userProp.iImg);
        $(userProp.iImg).draggable();
        userProp.beginTimes++;
        userProp.context=$('#mainCanvas')[0].getContext('2d');
    }
    else {
        $('.current').draggable('enable');
        userProp.pausedState=false;
    }
    $(triggerBegin).css('display','none');
    $(triggerPause).css('display','block');
    userProp.mainInterval=setInterval(saveState,userProp.stateInterval);
}

function clearState(){
    userProp.pausedState=false;
    //$('#programWindow').empty();
    $(triggerBegin).css('display','block');
    $(triggerPause).css('display','none');
    clearInterval(userProp.mainInterval);
}

function pauseState(){
    $(triggerBegin).css('display','block');
    $(triggerPause).css('display','none');
    //$('.current').draggable('disable');
    userProp.pausedState=true;
    clearInterval(userProp.mainInterval);
}
function saveState(){
   // userProp.context.drawImage(userProp.Iimg,$(userProp.iImg).css('margin-top'), $(userProp.iImg).css('margin-left'));
   var base_image = new Image();
    base_image.src = imageProp.imagePath;
    base_image.onload = function() {
        userProp.context.drawImage(base_image,
            0,
            0,
            404,
            198,
            getNumberFromPx($(userProp.iImg).css('left')),
            getNumberFromPx($(userProp.iImg).css('top')),
            404,
            198
        )

    }
}

function showSettings(){
    if(modalSettings.style.display=='none'){
        setSettings();
        if($('#triggerPause').css('display')=='block')
        pauseState();
        $(modalSettings).css('display','block');
    }
    else
        $(modalSettings).css('display','none');
}

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

function getNumberFromPx(value){
    return +value.replace(/[^0-9]/g,'');
}
