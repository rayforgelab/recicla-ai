const AudioManager = (() => {
  let ctx = null;
  let masterGain = null;
  let _playing = false;
  let chordTimeout = null;
  let chordIndex = 0;
  let activeNotes = [];
  let lfoOsc = null;
  let lfoGain = null;

  const CHORDS = [
    [261.63, 329.63, 392.00],
    [220.00, 261.63, 329.63],
    [174.61, 220.00, 261.63],
    [196.00, 246.94, 293.66],
  ];
  const CHORD_SECONDS = 10;
  const VOLUME = 0.06;

  function init() {
    if (ctx) return;
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    masterGain = ctx.createGain();
    masterGain.gain.value = VOLUME;
    masterGain.connect(ctx.destination);
  }

  function startLFO() {
    lfoOsc = ctx.createOscillator();
    lfoOsc.type = 'sine';
    lfoOsc.frequency.value = 0.12;
    lfoGain = ctx.createGain();
    lfoGain.gain.value = 0.25;
    lfoOsc.connect(lfoGain);
    lfoGain.connect(masterGain.gain);
    lfoOsc.start();
  }

  function stopLFO() {
    if (lfoOsc) {
      try { lfoOsc.stop(); } catch (e) {}
      try { lfoGain.disconnect(); } catch (e) {}
    }
    lfoOsc = null;
    lfoGain = null;
  }

  function stopNotes() {
    activeNotes.forEach(n => {
      try { n.stop(); } catch (e) {}
    });
    activeNotes = [];
  }

  function playChord(freqs) {
    stopNotes();
    freqs.forEach(freq => {
      for (let i = 0; i < 2; i++) {
        const osc = ctx.createOscillator();
        osc.type = 'triangle';
        osc.frequency.value = freq * (1 + i * 0.003);
        const g = ctx.createGain();
        g.gain.value = (i === 0 ? 0.5 : 0.3) / freqs.length;
        osc.connect(g);
        g.connect(masterGain);
        osc.start();
        activeNotes.push(osc);
      }
    });
  }

  function scheduleNext() {
    if (!_playing) return;
    playChord(CHORDS[chordIndex % CHORDS.length]);
    chordIndex++;
    chordTimeout = setTimeout(scheduleNext, CHORD_SECONDS * 1000);
  }

  function start() {
    if (_playing) return;
    init();
    if (ctx.state === 'suspended') ctx.resume();
    _playing = true;
    startLFO();
    chordIndex = 0;
    scheduleNext();
  }

  function stop() {
    _playing = false;
    clearTimeout(chordTimeout);
    stopNotes();
    stopLFO();
    if (masterGain) masterGain.gain.setValueAtTime(VOLUME, ctx.currentTime);
  }

  function toggle() {
    _playing ? stop() : start();
    return _playing;
  }

  function isPlaying() { return _playing; }

  return { toggle, isPlaying, start, stop };
})();
