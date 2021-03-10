import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import formUI from './views/forms';

const coefPhysicalActivity = {
  minimal: 1.2,
  low: 1.38,
  medium: 1.46,
  high: 1.55,
  extraHigh: 1.64,
  hard: 1.73,
  extraHard: 1.9,
}

document.addEventListener("DOMContentLoaded", () => {
  const form = formUI.formParametrs;
  const formActivity = formUI.formPhysicalActivity;
  formActivity.addEventListener('change', (e) => {
    e.preventDefault();
    getCoefActivity();
  });

});

function getCoefActivity() {
  const select = formUI.getChangeRadio();
  console.log(select, coefPhysicalActivity[select]);
}

