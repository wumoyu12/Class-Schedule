window.addEventListener("load", addListener);
var firstname, lastname, idnum, idlength, grade, officeclass, counselor, office, period, course, room, teacher, schoolyear;
var course1, room1, teacher1, course2, room2, teacher2, course3, room3, teacher3, period4, room4, teacher4, course5, room5, teacher5, course6, room6, teacher6, course7, room7, teacher7, course8, room8, teacher8;

function addListener()
{
    document.getElementById("welmsg").style.display = "block";
    document.getElementById("firstpart").style.display = "none";
    document.getElementById("secondpart").style.display = "none";
    document.getElementById("lastpart").style.display = "none";
    document.getElementById("btnstart").addEventListener("click", Start);
    document.getElementById("btnnext").addEventListener("click", Next);
    document.getElementById("btnsubmit").addEventListener("click", Period1);
}

function Start()
{
    document.getElementById("welmsg").style.display = "none";
    document.getElementById("firstpart").style.display = "block";
}

function Next() {
    GetInfo();
}

function GetInfo()
{
    firstname = document.getElementById("txtfirstname").value;
    lastname = document.getElementById("txtlastname").value;
    idnum = document.getElementById("txtid").value;
    idlength = idnum.length;
    grade = document.getElementById("txtgrade").value;
    schoolyear = document.getElementById("txtyear").value;
    officeclass = document.getElementById("txtofficeclass").value;
    counselor = document.getElementById("txtcounselor").value;
    office = document.getElementById("txtoffice").value;
    CheckSInfo();
}

function CheckSInfo() {
    if (firstname == "" || lastname == "" || grade == "" || schoolyear == "" || officeclass == "" || counselor == "" || office == "" || idnum == "")
    {
        alert("Please fill out all the basic information fields before proceeding. If you already entered all information, then you might have entered an invalid ID number.");
	return;
    }

    if(idlength != 9)
    {
	alert("Your ID number is invalid, it should be a nine-digit number.");
	document.getElementById("txtid").focus();
        document.getElementById("txtid").value = "";
	return;
    }
	
    if (grade > 12 || grade < 9 || parseFloat(grade) % 1 != 0) {
        alert("Your grade level should be between 9 and 12. Please try again.");
        document.getElementById("txtgrade").value = "";
        document.getElementById("txtgrade").focus();
	return;
    } 
    else
    {
        StoreInfo();
    }
}

function StoreInfo() {
    localStorage.setItem("firstname", firstname);
    localStorage.setItem("lastname", lastname);
    localStorage.setItem("idnum", idnum);
    localStorage.setItem("grade", grade);
    localStorage.setItem("officeclass", officeclass);
    localStorage.setItem("counselor", counselor);
    localStorage.setItem("office", office);

    document.getElementById("firstpart").style.display = "none";
    document.getElementById("secondpart").style.display = "block";
}

function Period1()
{
    GetClassInfo();
    course1 = course;
    room1 = room;
    teacher1 = teacher;
    Clear();
    Period2();
}

function Period2()
{
    document.getElementById(lblperiod).innerHTML = "Period 2";
    GetClassInfo();
    course2 = course;
    room2 = room;
    teacher2 = teacher;
    Clear();
    Period3();
}

function Period3()
{
    document.getElementById(lblperiod).innerHTML = "Period 3";
    GetClassInfo();
    course3 = course;
    room3 = room;
    teacher3 = teacher;
    Clear();
    Period4();
}

function Period4()
{
    document.getElementById(lblperiod).innerHTML = "Period 4";
    GetClassInfo();
    course4 = course;
    room4 = room;
    teacher4 = teacher;
    Clear();
    Period5();
}

function Period5()
{
    document.getElementById(lblperiod).innerHTML = "Period 5";
    GetClassInfo();
    course5 = course;
    room5 = room;
    teacher5 = teacher;
    Clear();
    Period6();
}

function Period6()
{
    document.getElementById(lblperiod).innerHTML = "Period 6";
    GetClassInfo();
    course6 = course;
    room6 = room;
    teacher6 = teacher;
    Clear();
    Period7();
}

function Period7()
{
    document.getElementById(lblperiod).innerHTML = "Period 7";
    GetClassInfo();
    course7 = course;
    room7 = room;
    teacher7 = teacher;
    Clear();
    Period8();
}

function Period8()
{
    document.getElementById(lblperiod).innerHTML = "Period 8";
    GetClassInfo();
    course8 = course;
    room8 = room;
    teacher8 = teacher;
    Clear();
    StoreClass();
}

function GetClassInfo() 
{
    course = document.getElementById("txtclass").value;
    room = document.getElementById("txtroom").value;
    teacher = document.getElementById("txtteacher").value;
    CheckCInfo();
}

function CheckCInfo()
{
    if (course == "" || room == "" || teacher == "")
    {
        alert("Please fill out all the class information fields before submitting.");
        return;
    }
}

function Clear()
{
	document.getElementById("txtclass").value = "";
	document.getElementById("txtroom").value = "";
	document.getElementById("txtteacher").value = "";
}

function StoreClass()
{
    localStorage.setItem("course1", course1);
    localStorage.setItem("room1", room1);
    localStorage.setItem("teacher1", teacher1);

    localStorage.setItem("course2", course2);
    localStorage.setItem("room2", room2);
    localStorage.setItem("teacher2", teacher2);
	
    localStorage.setItem("course3", course3);
    localStorage.setItem("room3", room3);
    localStorage.setItem("teacher3", teacher3);

    localStorage.setItem("course4", course4);
    localStorage.setItem("room4", room4);
    localStorage.setItem("teacher4", teacher4);

    localStorage.setItem("course5", course5);
    localStorage.setItem("room5", room5);
    localStorage.setItem("teacher5", teacher5);
    
    localStorage.setItem("course6", course6);
    localStorage.setItem("room6", room6);
    localStorage.setItem("teacher6", teacher6);
	
    localStorage.setItem("course7", course7);
    localStorage.setItem("room7", room7);
    localStorage.setItem("teacher7", teacher7);

    localStorage.setItem("course8", course8);
    localStorage.setItem("room8", room8);
    localStorage.setItem("teacher8", teacher8);

    DisplaySchedule();
}

function DisplaySchedule() {
    document.getElementById("secondpart").style.display = "none";
    document.getElementById("lastpart").style.display = "block";
}
