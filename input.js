window.addEventListener("load", addListener);
var school, firstname, lastname, idnum, grade, officeclass, counselor, office, course, room, teacher;
function addListener() 
{
	document.getElementById("firstpart").style.display = "block";
	document.getElementById("secondpart").style.display = "none";
	document.getElementById("lastpart").style.display = "none";
	document.getElementById("btnnext").addEventListener("click",Next);
	document.getElementById("btnsubmit").addEventListener("click",Submit);
}

function Next()
{
	GetInfo()
	Schedule()
}

function GetInfo()
{
	school = document.getElementById("txtschool").value;
	firstname = document.getElementById("txtfirstname").value;
	lastname = document.getElementById("txtlastname").value;
	idnum = document.getElementById("txtid").value;
	grade = document.getElementById("txtgrade").value;
	officeclass = document.getElementById("txtofficeclass").value;
	counselor = document.getElementById("txtcounselor").value;
	office = document.getElementById("txtoffice").value;
	CheckSInfo()
	
}

function CheckSInfo()
{
	if (school == "" || firstname == "" || lastname == "" || idnum == "" || grade == "" || officeclass == "" || counselor =="" || office == "")
	{
	    alert("Please fill out all the basic information fields before proceeding.");
	    return;
	}
	else
	{
		StoreInfo()
	}
}
function StoreInfo()
{
	localStorage.setItem("school", school);
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

function Submit()
{
	course = document.getElementById("txtclass").value;
	room = document.getElementById("txtroom").value;
	teacher = document.getElementById("txtteacher").value;
	CheckCInfo()
}

function CheckCInfo()
{
	if (course == "" || room == "" || teacher == "")
	{
		alert("Please fill out all the class information fields before submitting.");
		return;
	}
	else
	{
		StoreClass();
	}
}

function StoreClass()
{
	localStorage.setItem("course", course);
	localStorage.setItem("room", room);
	localStorage.setItem("teacher", teacher);
	DisplaySchedule()
}

function DisplaySchedule()
{
	document.getElementById("lastpart").style.display = "block";
}
