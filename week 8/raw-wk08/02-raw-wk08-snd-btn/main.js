var audioPlayer = document.getElementById('audioplayer');
var bugle = document.getElementById('bugle');

var isPlaying = false;

function audioToggle(msg) {
    //TweenMax.set(bugle, {backgroundColor: "red"})
    //console.log(audioPlayer);
    if (isPlaying) {
        audioPlayer.pause()
        isPlaying = false
        TweenMax.to(bugle, 3, {
            x: 180,
            onStart: function(){
                console.log("im starting")
            },
            onUpdate: function(){
                console.log("im updating")
            },
            onComplete: function(){
                console.log("im done")
            }
        });
    } else {
        audioPlayer.play()
        isPlaying = true
        TweenMax.to(bugle, 3, {x: 0});
    }

    //audioPlayer.pause()
}
