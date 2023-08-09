const initValidation = () => {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        let formData = new FormData(form);

        if (error === 0) {
            form.classList.add('_sending');
            let response = await fetch('sendmail.php', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                let result = await response.json();
                alert(result.message);
                form.reset();
                form.classList.remove('_sending');
            } else {
                alert("Ошибка");
                form.classList.remove('_sending');
            }
        } else {
            alert("Заполните обязательные поля");
        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('_email')) {
                if (emailTest(input)) {
                    formAddError(input);
                    error++;
                }
            } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
                formAddError(input);
                error++;
            } else {
                if (input.value === '') {
                    formAddError(input);
                    error++;
                }
            }
        }

        return error;
    }

    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }

    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }


    // =========================================================================================
    //Функция теста email
    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }

    function emailTest2(input) {
        return /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+/.test(input.value);
    }

    // =========================================================================================
    // Валидация инпутов первой формы
    // Выделение цветом

    const inputName = document.querySelector('#formName');
    const inputEmail = document.querySelector('#formEmail');
    const inputPhone = document.querySelector('#formPhone');
    const inputMessage = document.querySelector('#formMessage');

    inputPhone.addEventListener('input', () => {
        if (inputPhone.value.length >= 18) {
            inputPhone.style.border = "2px solid rgb(0, 196, 0)";
            inputPhone.classList.remove('_error');
        }
        if (inputPhone.value.length <= 4) {
            inputPhone.style.border = "2px solid transparent";
            inputPhone.classList.remove('_error');
        }
        if (inputPhone.value.length > 4 && inputPhone.value.length <= 17) {
            inputPhone.style.border = "2px solid red";
        }
    });

    inputName.addEventListener('input', () => {
        if (inputName.value.length > 2) {
            inputName.classList.remove('_error');
            inputName.style.border = "2px solid rgb(0, 196, 0)";
            inputName.style.boxShadow = "none";
        }
        if (inputName.value.length === 0) {
            inputName.classList.remove('_error');
            inputName.style.boxShadow = "none";
            inputName.style.border = "2px solid transparent";
        }
    });
};

export { initValidation };