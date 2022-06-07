import Bruh from '../audios/bruh.mp3';
import Boi from '../audios/boi.mp3';
import John from '../audios/john.mp3';
import { Howl } from 'howler';

const audioClips = [
  { sound: Bruh, label: 'Bruh' },
  { sound: Boi, label: 'Boi' },
  { sound: John, label: 'John' },
];

const SoundPlay = (src) => {
  const sound = new Howl({
    src,
    html5: true,
    preload: true,
  });
  sound.play();
};

const SoundButton = () => {
  return audioClips.map((soundObj, idx) => {
    return (
      <button
        key={idx}
        onClick={() => SoundPlay(soundObj.sound)}
        className='btn'
      >
        {soundObj.label}
      </button>
    );
  });
};

export default SoundButton;
