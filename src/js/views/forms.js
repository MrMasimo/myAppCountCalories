class FormUI {
  constructor () {
    this.formParametrs = document.forms['parameters'];
    this.formPhysicalActivity = document.forms['physical-activity'];
    this.ageInput = document.getElementById('ages');
    this.heightInput = document.getElementById('height');
    this.weightInput = document.getElementById('weight');
  }

  get form() {
    return this.formParametrs;
  }

  get ageValue() {
    return this.ageInput.value;
  }

  get heightValue() {
    return this.heightInput.value;
  }

  get weightValue() {
    return this.weightInput.value;
  }

  getChangeRadio() {
    const selectedActivity = document.querySelector('input[type=radio]:checked');
    return selectedActivity.value;
  }

}

const formUI = new FormUI();
export default formUI;