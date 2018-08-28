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
        var elementObj = this.arr[i];
        for(var key in elementObj){
            if(key == 'id'){
                var nameDataId = elementObj[key];
                tr.setAttribute('data-id',nameDataId)

            }
        }
        for (var j=0; j <this.colums.length;j++){

            var column = this.colums[j];
            //for(var key in elementObj){
            var rezForCutTable = elementObj[column.propertyName];
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
    for(var key in objForCut){
        if(key == 'id'){
            var nameDataId = objForCut[key]
            tr.setAttribute('data-id',nameDataId)

        }
    }
    for (var j=0; j <this.colums.length;j++){
        var column = this.colums[j];
        var rez =objForCut[column.propertyName];
        var td = document.createElement('td');
        tr.appendChild(td);
        td.innerHTML = rez;
    }
};

SmartTable.prototype.addSomeElements = function (arrSomeEl){
    this.arrSomeEl = arrSomeEl;
    //  var table = document.getElementById(this.containerId).children[0];
    for ( var i=0; i <this.arrSomeEl.length;i++){
        this.addElement(this.arrSomeEl[i]);
        /*var tr = document.createElement('tr');
        table.appendChild(tr);

        for (var j=0; j <this.colums.length;j++){
            var objFromArr = arrSomeEl[i]
            var column = this.colums[j];
            var rez =objFromArr[column.propertyName]
            var td = document.createElement('td');
            tr.appendChild(td);
            td.innerHTML = rez;
        }*/
    }
};

SmartTable.prototype.deleteAll = function (){

    var table = document.getElementById(this.containerId).children[0];
    table.parentNode.removeChild(table);
};

SmartTable.prototype.deleteEl = function (ind){
    var table = document.getElementById(this.containerId).children[0];
    var trs = table.rows;
    for(var i=0; i<trs.length; i++){
        var indexForData = trs[i].getAttribute('data-id');
        if(indexForData == ind){
            table.deleteRow(i)
        }
    }
    /*  var trs = table.rows;
      for(var i=0; i<trs.length; i++){
          if(i == ind){
              table.deleteRow(i)
          }
      }*/


};

/*Связать данные в таблице с htm
Для этого добавить в каждую tr таблицы атрибут data-id
Типа <tr data-id=1...>...
Это нужно чтобы к соответствующим объектам была соответствующа строчка в таблице*/
/*
теперь нужно добавить выделение строчки в таблице
если я нажму на строчку она должна выдлеиться
если на другую то должна выделиться другая*/

/*
теперь сделай так чтобы выделенная строчка по кнопке удалить строчку - удалялась
корректно
и из data
и из html
т.е. в smart Table у тебя есть свойство arr переименуй это в data
data должна быть всегда синхронизирована с html
*/



