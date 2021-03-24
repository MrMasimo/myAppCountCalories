function activityChange(id) {
  const formsActivity = document.querySelectorAll(".custom-control-input");
  formsActivity.forEach((form) => {
    if ((form !== id) & form.checked) form.checked = false;
  });
}

export default activityChange;