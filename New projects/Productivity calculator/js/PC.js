
window.onload = pageLoad;
function pageLoad() {

    $(".firstList").hide();
    $(".secondList").hide();
//alert("This is my space");

//console.log(document.forms.firstSubmit);
var firstForm = document.forms.firstSubmit;
firstForm.onsubmit = Firstform;

function Firstform() {

    var firstSelect = document.getElementById("taskDesc");
    //console.log(firstSelect.value);

    var Taskdescription = "";
    var List1 = document.getElementById("list1");
    var List2 = document.getElementById("list2");
    var List3 = document.getElementById("list3");
    var List4 = document.getElementById("list4");
    var List5 = document.getElementById("list5");
    var List6 = document.getElementById("list6");

    if (firstSelect.value == "EX") {
        Taskdescription = "Exercise";
    }else if (firstSelect.value == "RE") {
        Taskdescription = "Read";
    }else if (firstSelect.value == "GR") {
        Taskdescription = "Groceries";
    }else if (firstSelect.value == "T4") {
        Taskdescription = "Task4";
    }else if (firstSelect.value == "T5") {
        Taskdescription = "Task5";
    }else if (firstSelect.value == "T6") {
        Taskdescription = "Task6";
    }

    
    

    $(".firstList").show();
    
    return false;
}

var SecondForm = document.forms.secondSubmit;
SecondForm.onsubmit = secondform;

function secondform(){

    var firstInput = document.getElementById("FirstList1");
    var secondInput = document.getElementById("FirstList2");
    var thirdInput = document.getElementById("FirstList3");
    var fourthInput = document.getElementById("FirstList4");
    var fifthInput = document.getElementById("FirstList5");
    var sixthInput = document.getElementById("FirstList6");

    //console.log(typeof(Number(firstInput.value)))
    //var sum = Number(firstInput.value) + Number(secondInput.value) + Number(thirdInput.value) + Number(fourthInput.value) + Number(fifthInput.value) + Number(sixthInput.value);
    //alert(sum);
    //alert(firstInput.value);

    //alert("This is my second form");
    return false;
}

var thirdForm = document.forms.thirdSubmit;
thirdForm.onsubmit = thirdform;

function thirdform(){


    var taskDesc = document.getElementById("cTaskDesc");
    var ctaskinput = taskDesc.value;

    var Clist1 = document.getElementById("clist1");
    var Clist2 = document.getElementById("clist2");
    var Clist3 = document.getElementById("clist3");
    var Clist4 = document.getElementById("clist4");
    var Clist5 = document.getElementById("clist5");
    var Clist6 = document.getElementById("clist6");

    if (Clist1.innerHTML == ""){
        Clist1.innerHTML = ctaskinput;
    }else if (Clist1.innerHTML != "" && Clist2.innerHTML == "" && ctaskinput != Clist1.innerHTML){
        Clist2.innerHTML = ctaskinput;
    }else if (Clist1.innerHTML != "" && Clist2.innerHTML != "" && Clist3.innerHTML == "" && ctaskinput != Clist1.innerHTML && Clist2.innerHTML != ctaskinput) {
        Clist3.innerHTML = ctaskinput;
    }else if (Clist1.innerHTML != "" && Clist2.innerHTML != "" && Clist3.innerHTML != "" && Clist4.innerHTML == "" && ctaskinput != Clist1.innerHTML && Clist2.innerHTML != ctaskinput && Clist3.innerHTML != ctaskinput) {
        Clist4.innerHTML = ctaskinput;
    }else if (Clist1.innerHTML != "" && Clist2.innerHTML != "" && Clist3.innerHTML != "" && Clist4.innerHTML != "" && Clist5.innerHTML == "" && ctaskinput != Clist1.innerHTML && Clist2.innerHTML != ctaskinput && Clist3.innerHTML != ctaskinput && Clist4.innerHTML != ctaskinput) {
        Clist5.innerHTML = ctaskinput;
    }else if (Clist1.innerHTML != "" && Clist2.innerHTML != "" && Clist3.innerHTML != "" && Clist4.innerHTML != "" && Clist5.innerHTML != "" && Clist6.innerHTML == "" && ctaskinput != Clist1.innerHTML && Clist2.innerHTML != ctaskinput && Clist3.innerHTML != ctaskinput && Clist4.innerHTML != ctaskinput && Clist5.innerHTML != ctaskinput) {
        Clist6.innerHTML = ctaskinput;
    }

    $(".secondList").show();
   
    //alert(taskDesc.value);
//alert("This is my third form");
    return false;
}



    
   




}