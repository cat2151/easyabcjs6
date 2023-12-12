const easyabcjs6 = {};
easyabcjs6.abcjs = ABCJS;
easyabcjs6.musicScoreId = "music-score";
easyabcjs6.playButtonId = "play-button";
easyabcjs6.abcNotationId = "abc-notation";
easyabcjs6.midiBuffer;

easyabcjs6.play = function() {
  const abc = easyabcjs6.abcNotation.value;
  easyabcjs6.playSub(abc, easyabcjs6.abcjs, easyabcjs6.musicScoreId);
};

easyabcjs6.init = function() {
  document.querySelector("#" + easyabcjs6.playButtonId).onclick = easyabcjs6.play;
  easyabcjs6.abcNotation = document.querySelector("#" + easyabcjs6.abcNotationId);
  easyabcjs6.abcNotation.addEventListener("input", easyabcjs6.play);
}

easyabcjs6.playSub = function(abc, abcjs, musicScoreId) {
  abcjs.renderAbc(musicScoreId, abc);
  if (abcjs.synth.supportsAudio()) {
    const visualObj = abcjs.renderAbc(musicScoreId, abc)[0];

    if (!easyabcjs6.midiBuffer) easyabcjs6.midiBuffer = new abcjs.synth.CreateSynth();
    easyabcjs6.midiBuffer
      .init({
        visualObj: visualObj,
        options: {},
      })
      .then(function (_response) {
        // console.log(_response);
        easyabcjs6.midiBuffer.prime().then(function (_response) {
          easyabcjs6.midiBuffer.stop(); // for mml2abc
          easyabcjs6.midiBuffer.start();
        });
      })
      .catch(function (error) {
        console.warn("Audio problem:", error);
      });
  } else {
    console.error("Audio is not supported in this browser.");
  }
}

easyabcjs6.init();
