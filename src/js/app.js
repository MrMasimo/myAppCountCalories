import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap";

import formUI from './views/forms';
import activityChange from './helpers/activity';
import genderChange from './helpers/gender';

const coefPhysicalActivity = {
  minimal: 1.2,
  low: 1.38,
  medium: 1.46,
  high: 1.55,
  extraHigh: 1.64,
  hard: 1.73,
  extraHard: 1.9,
};
const currentCoef = {
  activityCoef: 1.2,
  genderCoef: 5,
};
const genderCoef = {
  male: 5,
  female: -161,
};

document.addEventListener("DOMContentLoaded", () => {
  const formGenders = formUI.formGender;
  const formActivity = formUI.formPhysicalActivity;
  const calcButton = formUI.calcButton;
  const clearButton = formUI.clearButton;

  formGenders.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("gender");
    genderChange();
    const gender = getCoefGender();
    currentCoef.genderCoef = genderCoef[gender];
    console.log(currentCoef);
  });

  formActivity.addEventListener('change', (e) => {
    e.preventDefault();
    activityChange(e.target);
    currentCoef.activityCoef = coefPhysicalActivity[getCoefActivity()];
  });

  calcButton.addEventListener('click', (e) => {
    e.preventDefault();
    formUI.removeTemplateRez();

    const weight = formUI.weightValue;
    const height = formUI.heightValue;
    const age = formUI.ageValue;
    const isInvalidForm = formUI.checkValidParametrs(height, weight, age);

    const rezCal =
      (weight * 10 + height * 6.25 - age * 5 + currentCoef.genderCoef) *
      currentCoef.activityCoef;
    if (!isInvalidForm)
    formUI.createTemplateRez(rezCal);
  });

  clearButton.addEventListener("click", (e) => {
      e.preventDefault();
    formUI.removeTemplateRez();
    formUI.removeInvalidTemplate();
    formUI.resetForms();

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

