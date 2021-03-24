import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap";


import formUI from './views/forms';
import activityChange from './helpers/activity';
import genderChange from './helpers/gender';

// const rezCal = (weight*10 + height*6.25 - ages*5 - 161/5)*activity

const coefPhysicalActivity = {
  minimal: 1.2,
  low: 1.38,
  medium: 1.46,
  high: 1.55,
  extraHigh: 1.64,
  hard: 1.73,
  extraHard: 1.9,
}
const currentCoef = {
  activityCoef: 1.2,
  genderCoef: 5,
}
const genderCoef = {
  male: 5,
  female: -161,

}

document.addEventListener("DOMContentLoaded", () => {
  const formGenders = formUI.formGender;
  const form = formUI.form;
  const formActivity = formUI.formPhysicalActivity;
  let activityCoef = 1.2;


  formGenders.addEventListener('click', (e) => {
    e.preventDefault();
    genderChange();
    const gender = getCoefGender();
    currentCoef.genderCoef = genderCoef[gender];
    console.log(currentCoef);
  });

  formActivity.addEventListener('change', (e) => {
    e.preventDefault();
    activityChange(e.target);
    currentCoef.activityCoef = getCoefActivity();
  });

});

function getCoefActivity() {
  const select = formUI.getCheckedRadio();
  return select;
}

function getCoefGender() {
  const active = formUI.getActiveButton();
  return active;
}

