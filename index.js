function createDropdown() {
    var select = document.getElementById("linkSelect");
    select.onchange = navigate;

    // Создаем опции
    var options = [
        { value: "", text: "Выберите ссылку" },
        { value: "https://sasha1985y.github.io/JS-examples/index.html", text: "index" },
        { value: "https://sasha1985y.github.io/JS-examples/axios_1.html", text: "axios_1" },
        { value: "https://sasha1985y.github.io/JS-examples/axios_get2", text: "axios_get2" },
        { value: "https://sasha1985y.github.io/JS-examples/axios_post3", text: "axios_post3" },
        { value: "https://sasha1985y.github.io/JS-examples/axios_config4", text: "axios_config4" },
        { value: "https://sasha1985y.github.io/JS-examples/axios_params5", text: "axios_params5" },
        { value: "https://sasha1985y.github.io/JS-examples/axios_parallel_queries6", text: "axios_parallel_queries6" },
        { value: "https://sasha1985y.github.io/JS-examples/axios_interceptors7", text: "axios_interceptors7" },
        { value: "https://sasha1985y.github.io/JS-examples/fetch_send_data8", text: "fetch_send_data8" },
        { value: "https://sasha1985y.github.io/JS-examples/fetch_put9", text: "fetch_put9" },
        { value: "https://sasha1985y.github.io/JS-examples/fetch_delete10", text: "fetch_delete10" },
    ];

    options.forEach(function(option) {
        var opt = document.createElement("option");
        opt.value = option.value;
        opt.textContent = option.text;
        select.appendChild(opt);
    });
}

function navigate() {
    var select = document.getElementById("linkSelect");
    var url = select.value;
    if (url) {
        window.location.href = url; // Переход по выбранной ссылке
    }
}


function getExample() {
    const codeExampleBtn = document.querySelector(".code-example-btn");
    const codeExample = document.querySelector(".code-example");
    
    codeExampleBtn.addEventListener('click', () => {
        codeExample.classList.toggle("visually-hidden")
    })
}

// Вызываем функцию для создания dropdown при загрузке страницы
window.onload = createDropdown;
