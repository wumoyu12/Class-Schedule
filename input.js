window.addEventListener("load", addListener);
var firstname, lastname, idnum, idlength, grade, officeclass, counselor, office, period, course, room, teacher;

function addListener()
{
	document.getElementById("firstpart").style.display = "block";
	document.getElementById("secondpart").style.display = "none";
	document.getElementById("lastpart").style.display = "none";
	document.getElementById("btnnext").addEventListener("click",Next);
	document.getElementById("btnsubmit").addEventListener("click",Submit)
	document.getElementById("btnnoclass").addEventListener("click",Noclass);
}

function Next()
{
	GetInfo()
}

function GetInfo()
{
	firstname = document.getElementById("txtfirstname").value;
	lastname = document.getElementById("txtlastname").value;
	idnum = document.getElementById("txtid").value;
	idlength = idnum.length
	grade = document.getElementById("txtgrade").value;
	officeclass = document.getElementById("txtofficeclass").value;
	counselor = document.getElementById("txtcounselor").value;
	office = document.getElementById("txtoffice").value;
	CheckSInfo()
}

function CheckSInfo()
{
	
	if (firstname == "" || lastname == "" || grade == "" || officeclass == "" || counselor =="" || office == "" || idnum == ""|| idlength != 9)
	{
	    alert("Please fill out all the basic information fields before proceeding. If you alraedy enter all information, then you might enter the invild id number, it should be a  is a nine-digit number.");
		document.getElementById("txtid").value = "";
		return;
	}
	if(grade > 12 || grade < 9 || parseFloat(grade) % 1 !=0)
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

function Period0()
{
	GetClassInfo();
}

function Period1()
{
	alert("1");
	GetClassInfo();
}

function Period2()
{
	GetClassInfo();
}

function Period3()
{
	GetClassInfo();
}

function Period4()
{
	GetClassInfo();
}

function Period5()
{
	GetClassInfo();
}

function Period6()
{
	GetClassInfo();
}

function Period7()
{
	GetClassInfo();
}

function Period8()
{
	GetClassInfo();
}

function Period9()
{
	GetClassInfo();
}

function Period10()
{
	GetClassInfo();
}

function Submit()
{
	AskClassInfo()
}

function GetClassInfo()
{
	period = document.getElementById("txtperiod").value;
	course = document.getElementById("txtclass").value;
	room = document.getElementById("txtroom").value;
	teacher = document.getElementById("txtteacher").value;
	CheckCInfo()
}	

function CheckCInfo()
{
	if (period = "" || course == "" || room == "" || teacher == "")
	{
		alert("Please fill out all the class information fields before submitting.");
		return;
	}
	else
	{
		alert("wow")
	}
}


function StoreClass()
{
	localStorage.setItem("period", period);
	localStorage.setItem("course", course);
	localStorage.setItem("room", room);
	localStorage.setItem("teacher", teacher);
	DisplaySchedule()
}

function DisplaySchedule()
{
	document.getElementById("lastpart").style.display = "block";
}

function Noclass()
{
	alert("No Class");
}
