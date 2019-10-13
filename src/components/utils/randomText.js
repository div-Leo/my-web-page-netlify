const letters = "abcdefghijklmnopqrstuvwxyz"; //!@#$%^&* // ABCDFGHIJKLMNOPQRSTUVWXYZ
const speed = 20;
const increment = 2;

function useRandomText (ref, content) {
  let steps = 0;
  let strIndex = 0;
  let fixedStart = '';
  let fixedEnd = '';

  (function rustle (i) {          
    setTimeout(function () {
      if (--i) rustle(i);
      nextFrame(i);
      steps++;
    }, speed);
  })((content.length/2) * increment + 1);

  function nextFrame(pos){
    let block = '';
    for (let i = 0; i < pos; i++) {
      let num = Math.floor(letters.length * Math.random());
      let letter = letters.charAt(num);
      block = block + letter;
    }
    if (steps === (increment-1)) strIndex++;
    if (steps === increment){
      fixedStart = fixedStart + content.charAt(strIndex - 1);
      fixedEnd = content.charAt(content.length-strIndex) + fixedEnd;
      steps = 0;
    } 
    else block = block + content[Math.floor((content.length-1)/2)]
    ref.current.textContent = fixedStart + block + fixedEnd;
  }
}

export default useRandomText;