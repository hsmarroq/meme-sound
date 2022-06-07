import SoundButton from './SoundButton';

function DrumMachineBox() {
  return (
    <main>
      <div className='machine-container'>
        <h1 className='h1-title'>Meme Sound Effects</h1>
        <div className='btn-container'>
          <SoundButton className='btn' />
        </div>
        <p className='copyright'>
          By Herson &copy; {new Date().getFullYear()}{' '}
        </p>
      </div>
    </main>
  );
}

export default DrumMachineBox;
