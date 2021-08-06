var blogs=[];   
    
function onFormSubmit(){
    var data=readFormData();
    resetData();
    //blogs.push(data);
    populateBlogs(data);
}
function readFormData(){
    var obj ={}
    obj.title = document.getElementById("title").value;
    obj.blogText = document.getElementById("blog_text").value;
    console.log(obj);
    return obj;
}


function populateBlogs(data){
    var table = document.getElementById("blog_items")

    var body = table.getElementsByTagName("tbody")[0];

    
        var newRow = body.insertRow(0);
        var cell1 = newRow.insertCell(0);
            cell1.innerHTML= "Title: " + data.title;

        newRow = body.insertRow(1);

        var cell2 = newRow.insertCell(0);
            cell2.innerHTML= "Description: " + data.blogText;
}

function resetData(){
    document.getElementById("title").value="";
    document.getElementById("blog_text").value="";
}