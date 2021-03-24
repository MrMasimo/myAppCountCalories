class FormUI {
  constructor() {
    this.formGender = document.querySelector(".genders");
    this.formParametrs = document.forms["parameters"];
    this.formPhysicalActivity = document.forms["physical-activity"];
    this.ageInput = document.getElementById("ages");
    this.heightInput = document.getElementById("height");
    this.weightInput = document.getElementById("weight");
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

  getCheckedRadio() {
    const selectedActivity = document.querySelector(
      "input[class=custom-control-input]:checked"
    );
    return selectedActivity.value;
  }

  getActiveButton() {
    const selectedActivity = document.querySelector(".active");
    return selectedActivity.getAttribute('id');
  }
}

const formUI = new FormUI();
export default formUI;