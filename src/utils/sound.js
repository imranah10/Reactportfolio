// SoundManager — Voice intro + UI sound effects
// Uses Web Speech API for voice, Web Audio API for sounds

let audioContext = null;
let soundEnabled = true;

function getAudioContext() {
  if (!audioContext) {
    try {
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) {
      console.warn("Web Audio API not supported");
    }
  }
  return audioContext;
}

function playTone(frequency, duration, type = "sine", volume = 0.1) {
  if (!soundEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = type;
  osc.frequency.setValueAtTime(frequency, ctx.currentTime);

  gain.gain.setValueAtTime(0, ctx.currentTime);
  gain.gain.linearRampToValueAtTime(volume, ctx.currentTime + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(ctx.currentTime);
  osc.stop(ctx.currentTime + duration);
}

function playChord(frequencies, duration, type = "sine", volume = 0.08) {
  frequencies.forEach(f => playTone(f, duration, type, volume));
}

export const sounds = {
  click: () => playTone(880, 0.08, "square", 0.05),
  hover: () => playTone(440, 0.04, "sine", 0.02),
  reveal: () => {
    playTone(523, 0.15, "sine", 0.06);
    setTimeout(() => playTone(659, 0.15, "sine", 0.06), 80);
    setTimeout(() => playTone(784, 0.2, "sine", 0.06), 160);
  },
  whoosh: () => {
    const ctx = getAudioContext();
    if (!ctx || !soundEnabled) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(100, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1000, ctx.currentTime + 0.3);
    gain.gain.setValueAtTime(0.05, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.3);
  },
  success: () => playChord([523, 659, 784, 1047], 0.3, "sine", 0.05),
  bootComplete: () => {
    playTone(110, 0.5, "sine", 0.1);
    setTimeout(() => playTone(220, 0.5, "sine", 0.08), 200);
    setTimeout(() => playTone(440, 0.6, "sine", 0.06), 400);
  },
  ping: () => playTone(1318, 0.15, "sine", 0.04),
  error: () => playTone(150, 0.2, "sawtooth", 0.08),
  type: () => playTone(1200, 0.02, "square", 0.015),
  sweep: () => {
    const ctx = getAudioContext();
    if (!ctx || !soundEnabled) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(200, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.2);
    gain.gain.setValueAtTime(0.06, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.2);
  },
};

export function speakIntro() {
  if (!("speechSynthesis" in window)) {
    console.warn("Speech Synthesis not supported");
    return;
  }

  window.speechSynthesis.cancel();

  const text = "My name is Imran Ahmad. I'm a React developer, AI developer with 9 months of experience.";
  
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.9;
  utterance.pitch = 1.0;
  utterance.volume = 0.9;
  utterance.lang = "en-US";

  const voices = window.speechSynthesis.getVoices();
  const preferredVoice = voices.find(v => 
    v.lang.startsWith("en") && (v.name.includes("Google") || v.name.includes("Microsoft") || v.name.includes("Samantha"))
  ) || voices.find(v => v.lang.startsWith("en"));
  
  if (preferredVoice) {
    utterance.voice = preferredVoice;
  }

  sounds.bootComplete();

  setTimeout(() => {
    window.speechSynthesis.speak(utterance);
  }, 800);
}

export function toggleSound() {
  soundEnabled = !soundEnabled;
  if (soundEnabled) {
    sounds.ping();
  }
  return soundEnabled;
}

export function isSoundEnabled() {
  return soundEnabled;
}

if (typeof window !== "undefined" && "speechSynthesis" in window) {
  window.speechSynthesis.onvoiceschanged = () => {};
}
