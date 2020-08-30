window.addEventListener('load',  () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");



    //Lets get going with the sounds here
    pads.forEach((pad,index) => {
        pad.addEventListener('click',function(){
            sounds[index].currentTime =0;
            sounds[index].play();

            createBubbles(index);
      
        });
        
    });
});

