const feedback = document.querySelector('.feedback-form');
const formData = {};
initPage();

function handleInput(event) {
    const { name, value } = event.target;
    formData[name] = value;

    const formDataJSON = JSON.stringify(formData);

    localStorage.setItem('formKey', formDataJSON)
    console.log(formDataJSON);
     console.log(formDataJSON);
  
}
function initPage () {
    const savedData = localStorage.getItem('formKey');
    if (!savedData) {
        return;
    }
    const savedDataObj = JSON.parse(savedData);
    // Масив масивів повертає Object.entries
    Object.entries(savedDataObj).forEach(([name, value]) => {
        feedback.elements[name].value = value;
       
    });
    
}

console.log();



feedback.addEventListener('input', handleInput);