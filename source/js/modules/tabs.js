const initTabs = () => {
    //Tabs

    let tabs_items = document.querySelectorAll("._tabs-item");
    let tabs_blocks = document.querySelectorAll("._tabs-block");

    for (let index = 0; index < tabs_items.length; index++) {
        let tabs_item = tabs_items[index];

        if (tabs_blocks[index].classList.contains('_active')) {
            tabs_blocks[index].style.maxHeight = tabs_blocks[index].scrollHeight + 'px';
        } else {
            tabs_blocks[index].style.maxHeight = null;
        }

        tabs_item.addEventListener("click", function (e) {
            e.preventDefault();

            for (let index = 0; index < tabs_items.length; index++) {
                let tabs_item = tabs_items[index];
                tabs_item.classList.remove('_active');
                tabs_blocks[index].classList.remove('_active');
                tabs_blocks[index].style.maxHeight = null;
            }

            tabs_item.classList.add('_active');
            tabs_blocks[index].classList.add('_active');
            tabs_blocks[index].style.maxHeight = tabs_blocks[index].scrollHeight + 'px';
        });
    }
};

export { initTabs };