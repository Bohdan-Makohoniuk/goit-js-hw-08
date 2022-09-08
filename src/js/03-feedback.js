const feedback = document.querySelector('.feedback-form');
const formData = {};
function handleInput(event) {
    const { name, value } = event.target;
    formData[name] = value;

    const formDataJSON = JSON.stringify(formData);

    localStorage.setItem('formKey', formDataJSON)
    console.log(formDataJSON);
     console.log(formDataJSON);
  
}

feedback.addEventListener('input', handleInput);