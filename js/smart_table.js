function SmartTable (obj){
    this.arr = obj.data;
    this.colums = obj.colums;
    this.containerId = obj.containerId;
    this.drawArray();
}

SmartTable.prototype.drawArray = function (){
    var divElement = document.getElementById(this.containerId);
    var table = document.createElement('table');
    table.id = 'tableForArr';
    divElement.appendChild(table);
    //
    var i;
    for ( i=0; i <this.colums.length;i++){
        var th = document.createElement('th');
        table.appendChild(th);
        th.innerHTML = this.colums[i].title;
    }
    for ( i =0; i <this.arr.length;i++){//по колонкам а внуитри-по массиву
        var tr = document.createElement('tr');
        table.appendChild(tr);
        for (var j=0; j <this.colums.length;j++){
            var elementObj = this.arr[i];
            var column = this.colums[j];
            //for(var key in elementObj){
            var rezForCutTable = elementObj[column.propertyName]
            var td = document.createElement('td');
            tr.appendChild(td);
            if (rezForCutTable instanceof Date){
                rezForCutTable = formatDate(rezForCutTable);
            }
            td.innerHTML = rezForCutTable;
        }
    }
};

SmartTable.prototype.addElement = function (objForCut){
    this.objForCut = objForCut;
    var table = document.getElementById(this.containerId).children[0];
    var tr = document.createElement('tr');
    table.appendChild(tr);
    for (var j=0; j <this.colums.length;j++){
        var column = this.colums[j];
        var rez =objForCut[column.propertyName]
        var td = document.createElement('td');
        tr.appendChild(td);
        td.innerHTML = rez;
    }
};
/*function addElement(objForCut) {
    this.addElement(objForCut);


}*/
/*addElement.prototype=
    Object.create(SmartTable.prototype);
addElement.prototype.constructor=addElement;
*/

SmartTable.prototype.addSomeElements = function (arrSomeEl){
    this.arrSomeEl = arrSomeEl;
    var table = document.getElementById(this.containerId).children[0];
    for ( var i=0; i <this.arrSomeEl.length;i++){
        var tr = document.createElement('tr');
        table.appendChild(tr);

        for (var j=0; j <this.colums.length;j++){
            var objFromArr = arrSomeEl[i]
            var column = this.colums[j];
            var rez =objFromArr[column.propertyName]
            var td = document.createElement('td');
            tr.appendChild(td);
            td.innerHTML = rez;
        }
    }
};

/*function addSomeElements() {
    this.addSomeElements(arrSomeEl)

}
addSomeElements.prototype=
    Object.create(SmartTable.prototype);
addSomeElements.prototype.constructor = addSomeElements;*/

//

SmartTable.prototype.deleteAll = function (){

    var table = document.getElementById(this.containerId).children[0];
    table.parentNode.removeChild(table);
};

/*
function deleteAll() {
    this.deleteAll();
}


deleteAll.prototype=
    Object.create(SmartTable.prototype);
deleteAll.prototype.constructor=deleteAll;
*/


SmartTable.prototype.deleteEl = function (ind){
    var table = document.getElementById(this.containerId).children[0];
    var trs = table.rows;
    for(var i=0; i<trs.length; i++){
        if(i == ind){
            table.deleteRow(i)
        }
    }

};

/*function deleteEl(ind) {
    this.deleteEl(ind);
}
deleteEl.prototype=
    Object.create(SmartTable.prototype);
deleteEl.prototype.constructor=deleteEl;*/
//smartTable.deleteEl(idx)



/* table.deleteElement()
table.deleteAll()
deleteElement пока не знаю как нам реализовать
опустим*/
/*    В конструктуре избаваиться от аргументов, на этот раз будет всего один аргумент options
    options - это будет объект js
    пример
    var table = new SmartTable({
    data: [ [dsds, dsds,dsds]...],
    containerId: 'id',
    ....
    })
второе задание: избавиться от двумерного массива
    у тебя на этот раз будет массив обьектов
    т.к. это распрастраненная практика в таблицах
    всегда почти работаем с массивом объектов
    к примеру у тебя данные должны быть вида
	типа так должно работать
    data и columns обязательные параметры для таблицы
	Ты строишь свою таблицу на основе колонок
	Т.е. В columns хранится информация как извлекать данные и в какую колонку данные нужно записывать
*/
/*переделать функции addElement
добавить в прототипа SmartTable функцию addElement., которая будет принимать один аргумент - объект
{
id: 1,
firstName: 'Vasya',
lastName: 'Ivanov',
age: 12,
birthDate: '16.07.1991'
}
var s = {
id: 1,
firstName: 'Vasya',
lastName: 'Ivanov',
age: 12,
birthDate: '16.07.1991'
}


var table = new SmartTable(......
table.addElement(s)
и соотвественно addElements
var data = [
{
id: 1,
firstName: 'Vasya',
lastName: 'Ivanov',
age: 12,
birthDate: '16.07.1991'
},
{
id: 2,
firstName: 'Vasya',
lastName: 'Ivanov',
age: 12,
birthDate: '16.07.1991'
},
{
id: 3,
firstName: 'Vasya',
lastName: 'Ivanov',
age: 12,
birthDate: '16.07.1991'
}
]
table.addElements(data)*/
/*написать функцию удаления
smartTable.delete(idx)
idx - номер эелемента или строки которую нужно удалить
первый элемент принять за 0, т.е. отсчет идет с 0
удалять эелемент из data и html*/

