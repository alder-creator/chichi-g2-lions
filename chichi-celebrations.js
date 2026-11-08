/* Chichi Wheel-completion reward, G1 v76.73 / G2 v0.92.
   Only called after a completed Wheel, never after ordinary correct answers.
   The character stays visible until dismissed and can be replayed by tap/click. */
(function(){
  'use strict';
  const images=[
    'assets/celebrations/chichi_dance.webp',
    'assets/celebrations/chichi_jump.webp',
    'assets/celebrations/chichi_spin.webp'
  ];
  let last=-1, current=null, currentImage=null, audioCtx=null, soundEnabled=true, replayCount=0;
  function pickIndex(){
    if(last<0){last=Math.floor(Math.random()*images.length);return last;}
    last=(last+1+Math.floor(Math.random()*(images.length-1)))%images.length;
    return last;
  }
  function pickImage(){return images[pickIndex()]}
  function reducedMotion(){return !!(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches)}
  function chime(){
    try{
      const Ctx=window.AudioContext||window.webkitAudioContext;
      if(!Ctx)return;
      if(!audioCtx)audioCtx=new Ctx();
      if(audioCtx.state==='suspended')audioCtx.resume().catch(()=>{});
      const now=audioCtx.currentTime;
      [[659.25,0,.15],[830.61,.12,.16],[1046.5,.26,.25]].forEach(([pitch,offset,duration])=>{
        const t=now+offset+.02;
        const o=audioCtx.createOscillator(),g=audioCtx.createGain();
        o.type='sine';o.frequency.setValueAtTime(pitch,t);
        g.gain.setValueAtTime(.0001,t);
        g.gain.exponentialRampToValueAtTime(.042,t+.014);
        g.gain.exponentialRampToValueAtTime(.0001,t+duration);
        o.connect(g).connect(audioCtx.destination);o.start(t);o.stop(t+duration+.02);
      });
    }catch(err){/* No sound on unsupported browsers. */}
  }
  function dismiss(){
    if(current){current.remove();current=null;currentImage=null;}
  }
  function replay(){
    if(!current||!currentImage)return false;
    const btn=current.querySelector('.chichi-celebration-replay');
    if(!reducedMotion()){
      const next=document.createElement('img');
      // Recreate the image with a unique fragment to restart the animation
      // without a new network download (also works for offline previews).
      next.src=currentImage+'#replay='+(++replayCount);
      next.alt='Chichi dancing to celebrate';
      next.draggable=false;
      const previous=btn.querySelector('img');
      if(previous)previous.replaceWith(next);else btn.prepend(next);
    }
    if(soundEnabled)chime();
    return true;
  }
  function show(options={}){
    dismiss();
    currentImage=pickImage();
    soundEnabled=options.sound!==false;
    const overlay=document.createElement('div');
    overlay.className='chichi-celebration-overlay';
    overlay.setAttribute('role','region');
    overlay.setAttribute('aria-label','Chichi Wheel completion celebration');
    const card=document.createElement('div');card.className='chichi-celebration-card';
    const close=document.createElement('button');
    close.className='chichi-celebration-close';close.type='button';
    close.setAttribute('aria-label','Close Chichi celebration');close.title='Close celebration';
    close.textContent='×';close.addEventListener('click',dismiss);
    const btn=document.createElement('button');
    btn.className='chichi-celebration-replay';btn.type='button';
    btn.setAttribute('aria-label','Make Chichi dance again');
    btn.addEventListener('click',replay);
    const img=document.createElement('img');
    img.src=reducedMotion()?'assets/chichi_celebrate_wheel.png':currentImage;
    img.alt='Chichi celebrating';img.draggable=false;
    btn.appendChild(img);
    const heading=document.createElement('strong');heading.textContent='Wheel complete!';
    card.append(close,btn,heading);overlay.appendChild(card);
    document.body.appendChild(overlay);
    current=overlay;
    if(soundEnabled)chime();
    return currentImage;
  }
  window.ChichiCelebrate={show,dismiss,replay,pickImage,images};
})();
