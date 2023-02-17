let inputFields = document.querySelectorAll('.input__field');

const onInputValueChange = (e) => {
    if(e.target.value) e.target.classList.add('input__field--value');
    else {
        e.target.classList.remove('input__field--value');
    }
}

const onInputMouseEnter = (e) => {
    e.target.classList.add('input__field--hover');
}
const onInputMouseLeave = (e) => {
    e.target.classList.remove('input__field--hover');
}

const onInputFocus = (e) => {
    e.target.parentElement.classList.add('input__field--focus');
}
const onInputBlur = (e) => {
    e.target.parentElement.classList.remove('input__field--focus');
}

//handle deafult values on submit button click
inputFields.forEach((input) => {
    input.addEventListener('input', onInputValueChange);
    input.addEventListener('mouseenter', onInputMouseEnter);
    input.addEventListener('mouseleave', onInputMouseLeave);
    input.addEventListener('focus', onInputFocus);
    input.addEventListener('blur', onInputBlur);
});

