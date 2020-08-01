let exponentState = 0;

window.addEventListener("keyup", e => {
  if (e.code == 'ArrowRight' && exponentState < 7) { //The largest image I have is of 10e7
    exponentState++;
  } else if (e.code == 'ArrowLeft' && exponentState > -7) { //The smallest image I have is of 10e-7
    exponentState--;
  }
  updateDocument();
});

function updateDocument() {
  //Takes the exponent state and puts it into the span inside the superscript tag
  document.getElementById('exponentText').innerText = exponentState.toString();

  let src1 = '';
  let src2 = '';
  let text1 = '';
  let text2 = '';

  switch (exponentState) {
    case -7:
      src1 = 'data/10e-7 - S Ribosome.svg';
      text1 = 'Cell Ribosome';
      src2 = 'data/10e-7 - B Nucleus.svg';
      text2 = 'Cell Nucleus';
      break;
    case -6:
      src1 = 'data/10e-6 - S Nucleus.svg';
      text1 = 'Cell Nucleus';
      src2 = 'data/10e-6 - B Cell.svg';
      text2 = 'Human Cell';
      break;
    case -5:
      src1 = 'data/10e-5 - S Cell.svg';
      text1 = 'Human Cell';
      src2 = 'data/10e-5 - B Needle Tip.svg';
      text2 = 'Tip of a Needle';
      break;
    case -4:
      src1 = 'data/10e-4 - S Needle Tip.svg';
      text1 = 'Tip of a Needle';
      src2 = 'data/10e-4 - B Ant.svg';
      text2 = 'Ant';
      break;
    case -3:
      src1 = 'data/10e-3 - S Ant.svg';
      text1 = 'Ant';
      src2 = 'data/10e-3 - B Book.svg';
      text2 = 'Book';
      break;
    case -2:
      src1 = 'data/10e-2 - S Book.svg';
      text1 = 'Book';
      src2 = 'data/10e-2 - B Man.svg';
      text2 = 'Man';
      break;
    case -1:
      src1 = 'data/10e-1 - S Man.svg';
      text1 = 'Man';
      src2 = 'data/10e-1 - B House.svg';
      text2 = 'Two Story House';
      break;
    case 0:
      src1 = 'data/10e0 - S House.svg';
      text1 = 'Two Story House';
      src2 = 'data/10e0 - B Eiffel Tower.svg';
      text2 = 'Eiffel Tower';
      break;
    case 1:
      src1 = 'data/10e1 - S Eiffel Tower.svg';
      text1 = 'Eiffel Tower';
      src2 = 'data/10e1 - B Burj Khalifa.svg';
      text2 = 'Burj Khalifa';
      break;
    case 2:
      src1 = 'data/10e2 - S Burj Khalifa.svg';
      text1 = 'Burj Khalifa';
      src2 = 'data/10e2 - B Manhattan.svg';
      text2 = 'Manhattan City, New York';
      break;
    case 3:
      src1 = 'data/10e3 - S Manhattan.svg';
      text1 = 'Manhattan City, New York';
      src2 = 'data/10e3 - B Hawaii.svg';
      text2 = 'Hawaii';
      break;
    case 4:
      src1 = 'data/10e4 - S Hawaii.svg';
      text1 = 'Hawaii';
      src2 = 'data/10e4 - B Moon.svg';
      text2 = 'Moon';
      break;
    case 5:
      src1 = 'data/10e5 - S Moon.svg';
      text1 = 'Moon';
      src2 = 'data/10e5 - B Earth.svg';
      text2 = 'Earth';
      break;
    case 6:
      src1 = 'data/10e6 - S Earth.svg';
      text1 = 'Earth';
      src2 = 'data/10e6 - B Jupiter.svg';
      text2 = 'Jupiter';
      break;
    case 7:
      src1 = 'data/10e7 - S Jupiter.svg';
      text1 = 'Jupiter';
      src2 = 'data/10e7 - B Sun.svg';
      text2 = 'Sun';
      break;
    default:
  }

  document.getElementById('content-small').setAttribute('data', src1);
  document.getElementById('content-large').setAttribute('data', src2);
  document.getElementById('content-small-text').innerHTML = text1;
  document.getElementById('content-large-text').innerHTML = text2;
}