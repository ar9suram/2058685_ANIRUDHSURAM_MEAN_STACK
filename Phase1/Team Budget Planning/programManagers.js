var budgetObj=[];
function storeInSession(){
    var obj = sessionStorage.getItem("budget-Info");
    if(obj != undefined){
        var objParse = JSON.parse(obj);
        for(var i = 0; i < objParse.length; i++){
            budgetObj.push(objParse[i]);
        }
        sessionStorage.setItem("budget-Info",JSON.stringify(budgetObj))
    }else{
        sessionStorage.setItem("budget-Info",JSON.stringify(budgetObj))
    }
}

function onFormSubmit(){
    var data=readFormData();
    resetData();
    budgetObj.push(data);
    storeInSession();
}
function readFormData(){
    var obj ={}
    obj.ClientName = document.getElementById("ClientName").value;
    obj.ProjectName = document.getElementById("ProjectName").value;
    obj.Budget = document.getElementById("BudgetName").value;
    console.log(obj);
    return obj;
}

function resetData(){
    document.getElementById("ClientName").value="";
    document.getElementById("ProjectName").value="";
    document.getElementById("BudgetName").value="";
}