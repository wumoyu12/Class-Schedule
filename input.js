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
	idlength = idnum.length
	grade = document.getElementById("txtgrade").value;
	officeclass = document.getElementById("txtofficeclass").value;
	counselor = document.getElementById("txtcounselor").value;
	office = document.getElementById("txtoffice").value;
	CheckSInfo()
	CheckId()
}

function CheckSInfo()
{
	if (school == "" || firstname == "" || lastname == "" || grade == "" || officeclass == "" || counselor =="" || office == "" || idnum == ""|| idlength != 9)
	{
	    alert("Please fill out all the basic information fields before proceeding. If alraedy enter all information, then you might enter the invild id number.");
	    return;
	}
	
	
	else if((grade > 12 || grade < 9) && (parseFloat(grade) % 2 != 0))
	{
		alert("Your grade level should be 9-12, please try again.")
		document.getElementById("txtgrade").value = "";
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
