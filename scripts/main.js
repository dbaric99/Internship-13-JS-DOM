const inputFields = document.querySelectorAll('.input__field');
const selectFields = document.querySelectorAll('.form__select');
const allDropdownOptions = document.querySelectorAll('.form__select__option');
const form = document.querySelector('form');

const firstNameInput = document.querySelector('#first-name-input');
const lastNameInput = document.querySelector('#last-name-input');
const educationSelect = document.querySelector('#education-level');
const experienceSelect = document.querySelector('#experience-level');

const formDataFromLocalStorage = localStorage.getItem('form');

function saveToLocalStorage() {
    let obj = {
        'first-name-input': firstNameInput.value,
        'last-name-input': lastNameInput.value,
        'education-level': educationSelect.value,
        'experience-level': experienceSelect.value,
    };

    localStorage.setItem('form', JSON.stringify(obj));
}

function getFromLocalStorage() {
    if(!formDataFromLocalStorage) return;

    let objFromLocalStorage = JSON.parse(formDataFromLocalStorage);
    firstNameInput.value = objFromLocalStorage[firstNameInput.id];
    lastNameInput.value = objFromLocalStorage[lastNameInput.id];
    educationSelect.value = objFromLocalStorage[educationSelect.id];
    experienceSelect.value = objFromLocalStorage[experienceSelect.id];
}
getFromLocalStorage();

(function fillSelectFields() {
    selectFields.forEach((select) => {
        let dropdownList = select.parentElement.querySelector('.form__select__options-wrapper').children;
        select.value = dropdownList[0].innerHTML;
    })
})()

// INPUT HANDLERS
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

inputFields.forEach((input) => {
    input.addEventListener('input', onInputValueChange);
    input.addEventListener('mouseenter', onInputMouseEnter);
    input.addEventListener('mouseleave', onInputMouseLeave);
    input.addEventListener('focus', onInputFocus);
    input.addEventListener('blur', onInputBlur);
});


// SELECT HANDLERS
const onSelectFocus = (e) => {
    let targetParent = e.target.parentElement;
    let dropdownArrow = targetParent.querySelector('.dropdown-arrow');
    let dropdownList = targetParent.querySelector('.form__select__options-wrapper')

    targetParent.classList.add('input__field--focus');
    dropdownArrow.classList.add('dropdown-arrow--focus');
    dropdownList.style.display = 'flex';
    e.target.classList.add('form__select--open');
    Array.from(dropdownList.children).forEach((option) => {
        if(option.innerHTML === e.target.value)
            option.classList.add('form__select__option--hover');
    });
}
const onSelectBlur = (e) => {
    let targetParent = e.target.parentElement;
    let dropdownArrow = targetParent.querySelector('.dropdown-arrow');
    let dropdownList = targetParent.querySelector('.form__select__options-wrapper')

    targetParent.classList.remove('input__field--focus');
    dropdownArrow.classList.remove('dropdown-arrow--focus');
    dropdownList.style.display = 'none';
    e.target.classList.remove('form__select--open');
}

selectFields.forEach((select) => {
    select.addEventListener('focus', onSelectFocus);
    select.addEventListener('blur', onSelectBlur);
});

const onOptionMouseEnter = (e) => {
    e.target.classList.add('form__select__option--hover');
};
const onOptionMouseLeave = (e) => {
    e.target.classList.remove('form__select__option--hover');
};
const onOptionSelect = (e) => {
    let optionsWrapper = e.target.parentElement;
    let wrapper = optionsWrapper.parentElement;
    let inputElement = wrapper.querySelector('.form__select');
    
    inputElement.classList.add('form__select--open');
    inputElement.value = e.target.innerHTML;
};

allDropdownOptions.forEach((option) => {
    option.addEventListener('mouseenter', onOptionMouseEnter);
    option.addEventListener('mouseleave', onOptionMouseLeave);
    option.addEventListener('mousedown', onOptionSelect);
});


// BUTTONS
const onFormSubmit = (e) => {
    e.preventDefault();
    saveToLocalStorage();
    let prevent = Array.from(inputFields).some(field => field.value === '');
    inputFields.forEach((input) => {
        if(!input.value) {
            input.parentElement.classList.add('input__field--error');
            input.parentElement.querySelector('.error-message').style.display = "inline-block";
        } else {
            input.parentElement.classList.remove('input__field--error');
            input.parentElement.querySelector('.error-message').style.display = "none";
        }
    });
}

form.addEventListener('submit', onFormSubmit);

