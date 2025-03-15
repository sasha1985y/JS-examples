function createDropdown() {
    // Создаем элемент select
    // var select = document.createElement("select");
    // var header = document.getElementsByTagName("header");
    // header.appendChild(select);
    // select.id = "linkSelect";
    select.onchange = navigate;

    // Создаем опции
    var options = [
        { value: "", text: "Выберите ссылку" },
        { value: "https://sasha1985y.github.io/JS-examples/index.html", text: "index" },
        { value: "https://sasha1985y.github.io/JS-examples/axios_get2", text: "axios_get2" },
        { value: "https://sasha1985y.github.io/JS-examples/axios_post3", text: "axios_post3" },
        { value: "https://sasha1985y.github.io/JS-examples/axios_config4", text: "axios_config4" },
        { value: "https://sasha1985y.github.io/JS-examples/axios_params5", text: "axios_params5" },
        { value: "https://sasha1985y.github.io/JS-examples/axios_parallel_queries6", text: "axios_parallel_queries6" },
        { value: "https://sasha1985y.github.io/JS-examples/axios_interceptors7", text: "axios_interceptors7" },
    ];

    options.forEach(function(option) {
        var opt = document.createElement("option");
        opt.value = option.value;
        opt.textContent = option.text;
        select.appendChild(opt);
    });

    // Добавляем select в body или в нужный контейнер
    //document.body.appendChild(select);
}

function navigate() {
    var select = document.getElementById("linkSelect");
    var url = select.value;
    if (url) {
        window.location.href = url; // Переход по выбранной ссылке
    }
}

// Вызываем функцию для создания dropdown при загрузке страницы
window.onload = createDropdown;
