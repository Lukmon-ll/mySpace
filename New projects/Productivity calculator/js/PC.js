
window.onload = pageLoad;
function pageLoad() {

    $(".firstList").hide();
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

    if (List1.innerHTML == ""){
        List1.innerHTML = Taskdescription;
    }else if (List1.innerHTML != "" && List2.innerHTML == "" && Taskdescription != List1.innerHTML){
        List2.innerHTML = Taskdescription;
    }else if (List1.innerHTML != "" && List2.innerHTML != "" && List3.innerHTML == "" && Taskdescription != List1.innerHTML && List2.innerHTML != Taskdescription) {
        List3.innerHTML = Taskdescription;
    }else if (List1.innerHTML != "" && List2.innerHTML != "" && List3.innerHTML != "" && List4.innerHTML == "" && Taskdescription != List1.innerHTML && List2.innerHTML != Taskdescription && List3.innerHTML != Taskdescription) {
        List4.innerHTML = Taskdescription;
    }else if (List1.innerHTML != "" && List2.innerHTML != "" && List3.innerHTML != "" && List4.innerHTML != "" && List5.innerHTML == "" && Taskdescription != List1.innerHTML && List2.innerHTML != Taskdescription && List3.innerHTML != Taskdescription && List4.innerHTML != Taskdescription) {
        List5.innerHTML = Taskdescription;
    }else if (List1.innerHTML != "" && List2.innerHTML != "" && List3.innerHTML != "" && List4.innerHTML != "" && List5.innerHTML != "" && List6.innerHTML == "" && Taskdescription != List1.innerHTML && List2.innerHTML != Taskdescription && List3.innerHTML != Taskdescription && List4.innerHTML != Taskdescription && List5.innerHTML != Taskdescription) {
        List6.innerHTML = Taskdescription;
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



    
   




}