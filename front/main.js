

async function create_cur_for_rub (){
    // получаем значение введенных рублей
    let value_rub = parseFloat(document.getElementById("rub-input").value);
    // получаем список всех input'ов, в которые надо перевести рубли
    let list_curs = document.getElementById("list-cur").children;
    for (let div_cur of list_curs) {
        // берем название денежной единицы
        let name_cur = div_cur.getElementsByTagName("span")[0].textContent;
        // теперь передает значение в Python для обработки
        let value_cur = await eel.convert_value_py(value_rub, "RUB", name_cur)();
        // выводим на экран полученное значение
        div_cur.getElementsByTagName("input")[0].value = value_cur;
    }
}


document.getElementById("btn-sum").onclick = create_cur_for_rub;