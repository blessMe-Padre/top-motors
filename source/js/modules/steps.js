const initSteps = () => {
    const stepSection = document.querySelector('.steps');

    if (stepSection) {
        function getSteps() {
            const stepNumbers = document.querySelectorAll('.step__number');
            const progressSuccess = document.querySelector('.steps__progress-success');
            const stepItems = document.querySelectorAll('.steps__item');
            const prevButton = document.querySelector('.step__button--prev');
            const nextButton = document.querySelector('.step__button--next');

            let step = 0;

            prevButton.addEventListener('click', () => {
                step--;
                stepNumbers[step + 1].classList.remove('step__number--active');
                updateSteps();
            })

            nextButton.addEventListener('click', () => {
                step++;
                updateSteps();
            })

            function updateSteps() {
                stepItems.forEach(item => {
                    item.classList.contains('active') && item.classList.remove('active');
                })

                stepItems[step].classList.add('active');
                stepNumbers[step].classList.add('step__number--active');

                if (step === 0) {
                    prevButton.setAttribute('disabled', '');
                } else {
                    prevButton.disabled = false;
                }

                if (step === stepItems.length - 1) {
                    nextButton.disabled = true;
                } else {
                    nextButton.disabled = false;
                }

                // закрашивает активный прогресбар (задает ширину, через стили добавляем цвет)
                const stepNumberActives = document.querySelectorAll('.step__number--active');
                const percent = ((stepNumberActives.length - 1) / (stepNumbers.length - 1)) * 100 + '%';
                progressSuccess.style.width = percent;
            }
            updateSteps();
        }
        getSteps();
    }

};

export { initSteps };
