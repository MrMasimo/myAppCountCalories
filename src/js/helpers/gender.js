function genderChange(id) {
  
  const genders = document.querySelectorAll(".btn-gender");
  genders.forEach((gender) => {
    if (gender.classList.contains('active'))
      gender.classList.remove('active');
    else gender.classList.add("active");
  })
}

export default genderChange;