import { useState } from 'react';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import { sounds, toggleSound, isSoundEnabled } from '../utils/sound';

/** Fixed sound toggle — OFF by default (recruiter-safe). */
const SoundToggle = () => {
  const [on, setOn] = useState(isSoundEnabled());

  const handle = () => {
    const enabled = toggleSound();
    setOn(enabled);
    if (enabled) sounds.reveal();
  };

  return (
    <button
      onClick={handle}
      className="fixed bottom-5 right-5 z-[9000] w-11 h-11 rounded-full panel flex items-center justify-center text-mute hover:text-cyan hover:border-cyan/40 transition-colors duration-300"
      aria-label={on ? 'Disable sound effects' : 'Enable sound effects'}
      title={on ? 'Sound: on' : 'Sound: off'}
    >
      {on ? (
        <FaVolumeUp size={15} className="text-cyan" />
      ) : (
        <FaVolumeMute size={15} />
      )}
      {on && <span className="absolute inset-0 rounded-full border border-cyan/30 animate-ping" />}
    </button>
  );
};

export default SoundToggle;
