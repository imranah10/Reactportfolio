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

  const text = "My name is Imran Ahmad. I'm a React developer, AI developer with 1 year of experience, specializing in AI automation.";
  
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.9;
  utterance.pitch = 0.8;
  utterance.volume = 1.0;
  utterance.lang = "en-US";

  // Get all available voices
  const voices = window.speechSynthesis.getVoices();

  // Male voice priority list — clear, natural male voices across platforms
  const maleVoiceNames = [
    "Google UK English Male",  // Chrome - clear male
    "Microsoft David",         // Windows - natural male
    "Microsoft Guy",           // Windows - natural male
    "Microsoft Ravi",          // Windows - Indian English male
    "Daniel",                  // macOS - clear male
    "Alex",                    // macOS - natural male
    "Rishi",                   // macOS - Indian English male
    "Microsoft Mark",          // Windows - male
    "Google US English",       // Chrome - can be male with low pitch
    "Arthur",                  // macOS - male
    "Oliver",                  // macOS - male
    "Aaron",                   // macOS - male
    "Male",                    // Generic
  ];

  // Try to find a male voice
  let selectedVoice = null;
  for (const name of maleVoiceNames) {
    selectedVoice = voices.find(v => 
      v.name.toLowerCase().includes(name.toLowerCase()) && v.lang.startsWith("en")
    );
    if (selectedVoice) break;
  }

  // Fallback: any male-sounding voice or any English voice
  if (!selectedVoice) {
    selectedVoice = voices.find(v => 
      v.lang.startsWith("en") && v.name.toLowerCase().includes("male")
    ) || voices.find(v => v.lang.startsWith("en"));
  }

  if (selectedVoice) {
    utterance.voice = selectedVoice;
    console.log("Using voice:", selectedVoice.name);
  }

  sounds.bootComplete();

  setTimeout(() => {
    window.speechSynthesis.speak(utterance);
  }, 600);
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

// Pre-load voices (Chrome loads them async)
if (typeof window !== "undefined" && "speechSynthesis" in window) {
  // Force voice loading
  window.speechSynthesis.getVoices();
  window.speechSynthesis.onvoiceschanged = () => {
    window.speechSynthesis.getVoices();
  };
}
