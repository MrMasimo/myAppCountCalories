class FormUI {
  constructor() {
    this.formCard = document.querySelector(".card-body");
    this.formGender = document.querySelector(".genders");
    this.formParametrs = document.forms["parameters"];
    this.formPhysicalActivity = document.forms["physical-activity"];
    this.ageInput = document.getElementById("age");
    this.heightInput = document.getElementById("height");
    this.weightInput = document.getElementById("weight");
    this.calcButton = document.querySelector(".button-count");
    this.clearButton = document.querySelector(".button-clear");
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

  checkValidParametrs(height, weight, age) {
    let invalidCoef = 0;
    if (age < 14 || age > 120) invalidCoef += 1;
    if (height < 80 || height > 280) invalidCoef += 1;
    if (weight < 30 || weight > 600) invalidCoef += 1;

    this.removeInvalidTemplate();

    if (invalidCoef)
      this.showInvalidTemplate();

    return invalidCoef;
  }

  showInvalidTemplate() {
    const invalidTemplate = `
      <p class="data-invalid ml-2 text-danger">
        Пожалуйста введите реальные параметры
      </p>`;
    this.formCard.insertAdjacentHTML("beforeend", invalidTemplate);
  }

  removeInvalidTemplate() {
    const invalidTemplate = document.querySelector(".data-invalid");
    if (invalidTemplate) invalidTemplate.remove();
  }

  getCheckedRadio() {
    const selectedActivity = document.querySelector(
      "input[class=custom-control-input]:checked"
    );
    return selectedActivity.value;
  }

  getActiveButton() {
    const selectedActivity = document.querySelector(".active");
    return selectedActivity.getAttribute("id");
  }

  createTemplateRez(rez = 0) {

    const template = `
    <div class="card rezult-card mb-2 mx-auto w-50 border-dark">
      <div class="card-body">
        <h4 class="card-title center">Результат</h4>
        <div class="card-text row">
          <div class="d-flex flex-column col-md-4"> Похудение: <span class="font-weight-bold">${Math.round(
            0.9 * rez
          )} kkal</span></div>
          <div class="d-flex flex-column col-md-4"> Поддержание веса: <span class="font-weight-bold">${Math.round(
            rez
          )} kkal</span></div>
          <div class="d-flex flex-column col-md-4"> Набор массы: <span class="font-weight-bold">${Math.round(
            1.1 * rez
          )} kkal</span></div>
        </div>
      </div>
    </div>`;
    document.body.insertAdjacentHTML("afterend", template);
  }

  removeTemplateRez() {
    const templateRezult = document.querySelector(".rezult-card");
    if (templateRezult) templateRezult.remove();
  }

  resetForms() {
    this.formParametrs.reset();
  }
}

const formUI = new FormUI();
export default formUI;