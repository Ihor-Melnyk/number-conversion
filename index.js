let valueForAlert = "";
let system = 10;

const reset = () => {
  system = 10;
};
const toStrSystem = (num, system) => {
  const number = Number(num);
  return number.toString(system);
};

const ref = {
  form: document.querySelector(".form"),
  text: document.querySelector(".forAlert"),
};

const handleSubmit = (e) => {
  e.preventDefault();

  const {
    elements: { binary, octal, sixteen, number },
  } = e.currentTarget;

  if (binary.checked) system = 2;
  if (octal.checked) system = 8;
  if (sixteen.checked) system = 16;

  const value = toStrSystem(number.value, system);
  ref.text.textContent = value;
  e.currentTarget.reset();
  reset();
};
ref.form.addEventListener("submit", handleSubmit);
