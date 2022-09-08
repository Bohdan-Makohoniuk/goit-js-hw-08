const e=document.querySelector(".feedback-form"),o={};e.addEventListener("input",(function(e){const{name:t,value:n}=e.target;o[t]=n;const c=JSON.stringify(o);localStorage.setItem("formKey",c),console.log(c),console.log(c)}));
//# sourceMappingURL=03-feedback.1615f082.js.map
