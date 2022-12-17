
window.onload = pageLoad;
function pageLoad() {

    $(".firstList").hide();
    $(".secondList").hide();
    $(".workForTaskScore").hide();
    $(".cworkForTaskScore").hide();
    //$(".error").hide();

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
    //var ER = document.getElementById("error");

    if (firstSelect.value == "EX") {
        Taskdescription = "Exercise for x hours";
    }else if (firstSelect.value == "RE") {
        Taskdescription = "Read x chapters";
    }else if (firstSelect.value == "GR") {
        Taskdescription = "Get x groceries";
    }else if (firstSelect.value == "T4") {
        Taskdescription = "Attend x meeting";
    }else if (firstSelect.value == "T5") {
        Taskdescription = "Submit x assignments";
    }else if (firstSelect.value == "T6") {
        Taskdescription = "Send x applications";
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
    }//else if (List1.innerHTML != "" && Taskdescription == List1.innerHTML){
        //ER.innerHTML = "*** This task has already been selected.";
       // $(".error").show();
    //}



    $(".firstList").show();
    

    //console.log(firstInput.value);

    var WFTS1 = document.getElementById("L1");
    WFTS1.innerHTML = List1.innerHTML;
    var WFTS2 = document.getElementById("L2");
    WFTS2.innerHTML = List2.innerHTML;
    var WFTS3 = document.getElementById("L3");
    WFTS3.innerHTML = List3.innerHTML;
    var WFTS4 = document.getElementById("L4");
    WFTS4.innerHTML = List4.innerHTML;
    var WFTS5 = document.getElementById("L5");
    WFTS5.innerHTML = List5.innerHTML;
    var WFTS6 = document.getElementById("L6");
    WFTS6.innerHTML = List6.innerHTML;

    
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


    var pp = " of today's task";
    var p1 = document.getElementById("LL1");
    var p2 = document.getElementById("LL2");
    var p3 = document.getElementById("LL3");
    var p4 = document.getElementById("LL4");
    var p5 = document.getElementById("LL5");
    var p6 = document.getElementById("LL6");
    //console.log(p1);
    p1.innerHTML = (firstInput.value * 10) + "%" + pp;
    p2.innerHTML = (secondInput.value * 10) + "%" + pp;
    p3.innerHTML = (thirdInput.value * 10) + "%" + pp;
    p4.innerHTML = (fourthInput.value * 10) + "%" + pp;
    p5.innerHTML = (fifthInput.value * 10) + "%" + pp;
    p6.innerHTML = (sixthInput.value * 10) + "%" + pp;
    //taskScore1 = number(firstInput.value);
    //console.log(taskScore1);



    //console.log(firstInput.value);

    //console.log(typeof(Number(firstInput.value)))
    //var sum = Number(firstInput.value) + Number(secondInput.value) + Number(thirdInput.value) + Number(fourthInput.value) + Number(fifthInput.value) + Number(sixthInput.value);
    //alert(sum);
    //alert(firstInput.value);

    //alert("This is my second form");

    $(".workForTaskScore").show();
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

var fourthForm = document.forms.fourthSubmit;
fourthForm.onsubmit = fourthform;

function fourthform(){


    var firstInput1 = document.getElementById("clistfirst");
    var secondInput2 = document.getElementById("clistsecond");
    var thirdInput3 = document.getElementById("clistthird");
    var fourthInput4 = document.getElementById("clistfourth");
    var fifthInput5 = document.getElementById("clistfifth");
    var sixthInput6 = document.getElementById("clistsixth");

    var cpp = " of today's task";
    var cp1 = document.getElementById("cLL1");
    var cp2 = document.getElementById("cLL2");
    var cp3 = document.getElementById("cLL3");
    var cp4 = document.getElementById("cLL4");
    var cp5 = document.getElementById("cLL5");
    var cp6 = document.getElementById("cLL6");
    //console.log(p1);
    cp1.innerHTML = (firstInput1.value * 10) + "%" + cpp;
    cp2.innerHTML = (secondInput2.value * 10) + "%" + cpp;
    cp3.innerHTML = (thirdInput3.value * 10) + "%" + cpp;
    cp4.innerHTML = (fourthInput4.value * 10) + "%" + cpp;
    cp5.innerHTML = (fifthInput5.value * 10) + "%" + cpp;
    cp6.innerHTML = (sixthInput6.value * 10) + "%" + cpp;


    //console.log(firstInput1.value);
    //console.log(fourthInput4.value);

    $(".cworkForTaskScore").show();

    return false;
}



    
   




}