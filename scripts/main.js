const inputFields = document.querySelectorAll('.input__field');
const selectFields = document.querySelectorAll('.form__select');

const onInputValueChange = (e) => {
    if(e.target.value === e.target.placeholder) e.target.classList.add('input__field--placeholder');
    else {
        e.target.classList.remove('input__field--placeholder');
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

// TODO handle submit click, add error classes
inputFields.forEach((input) => {
    input.addEventListener('input', onInputValueChange);
    input.addEventListener('mouseenter', onInputMouseEnter);
    input.addEventListener('mouseleave', onInputMouseLeave);
    input.addEventListener('focus', onInputFocus);
    input.addEventListener('blur', onInputBlur);
});

const onSelectFocus = (e) => {
    let targetParent = e.target.parentElement;
    let dropdownArrow = targetParent.querySelector('.dropdown-arrow');
    let dropdownList = targetParent.querySelector('.form__select__options-wrapper')

    targetParent.classList.add('input__field--focus');
    dropdownArrow.classList.add('dropdown-arrow--focus');
    dropdownList.style.display = 'flex';
}
const onSelectBlur = (e) => {
    let targetParent = e.target.parentElement;
    let dropdownArrow = targetParent.querySelector('.dropdown-arrow');
    let dropdownList = targetParent.querySelector('.form__select__options-wrapper')

    targetParent.classList.remove('input__field--focus');
    dropdownArrow.classList.remove('dropdown-arrow--focus');
    dropdownList.style.display = 'none';
}

selectFields.forEach((select) => {
    select.addEventListener('focus', onSelectFocus);
    select.addEventListener('blur', onSelectBlur);
})

