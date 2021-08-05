function retrieveFromSession(){
    var obj = sessionStorage.getItem("budget-Info");
    dataObj = JSON.parse(obj);
    //document.write(dataObj);
    insertNewRecord(dataObj) ;

}
function insertNewRecord(data){
    var table = document.getElementById("Budget_Details")

    var body = table.getElementsByTagName("tbody")[0];

    //var newRow = body.insertRow(body.length);
    for(var i = 0; i < data.length; i++){
        var newRow = body.insertRow(body.length);
        var cell1 = newRow.insertCell(0);
            cell1.innerHTML= data[i].ClientName;

        var cell2 = newRow.insertCell(1);
            cell2.innerHTML= data[i].ProjectName;

        var cell3 = newRow.insertCell(2);
        cell3.innerHTML= data[i].Budget + "<br/>";

    }
}