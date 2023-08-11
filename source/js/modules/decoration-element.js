const initDecoration = () => {

    // Получаем все элементы с классом 'decor-section' на странице
    const decorSections = document.querySelectorAll('.decor-section');

    function updateLineWidth() {
        // Итерация по каждому элементу decorSection
        decorSections.forEach(decorSection => {
            // Для текущего элемента decorSection, получаем соответствующий элемент с классом 'decor-section-line'
            const line = decorSection.querySelector('.decor-section-line');

            // Получаем позиционные параметры элемента decorSection
            const rect = decorSection.getBoundingClientRect();

            // Проверяем, находится ли элемент полностью за пределами видимой области сверху или снизу
            if (rect.bottom < 0 || rect.top - 200 > window.innerHeight) {
                line.style.width = '0%';  // Если да, устанавливаем ширину линии в 0%
                return;
            }

            // Вычисляем максимальное возможное расстояние для прокрутки без учета высоты decorSection
            const totalPotentialScroll = window.innerHeight - 200 - rect.height;

            // Вычисляем прокрученное расстояние от нижней границы элемента до нижней границы видимой области окна
            const scrolledDistance = window.innerHeight - rect.bottom;

            // Вычисляем процент прокрутки
            const scrolledPercentage = scrolledDistance / totalPotentialScroll;

            // Устанавливаем ширину линии, учитывая что она не может быть меньше 0% и больше 100%
            line.style.width = Math.max(0, Math.min(100, scrolledPercentage * 100)) + "%";
        });
    }

    // Обновляем ширину линий при загрузке страницы
    updateLineWidth();

    // Добавляем слушатель событий на прокрутку окна, чтобы обновлять ширину линий при каждой прокрутке
    window.addEventListener('scroll', updateLineWidth);

}

export { initDecoration }