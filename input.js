window.addEventListener("load", addListener);
var school, firstname, lastname, idnum, idlength, grade, officeclass, counselor, office, period, course, room, teacher;
var periodnum = 0;
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
}

function CheckSInfo()
{
	
	if (school == "" || firstname == "" || lastname == "" || grade == "" || officeclass == "" || counselor =="" || office == "" || idnum == ""|| idlength != 9)
	{
	    alert("Please fill out all the basic information fields before proceeding. If you alraedy enter all information, then you might enter the invild id number, it should be a  is a nine-digit number.");
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

function AskClassInfo()
{
	switch(periodnum)
	{
		case 0:
			Period0();
			break;
			
		case 1:
			Period1();
			break;
			
		case 2:
			Period2();
			break;
			
		case 3:
			Period3();
			break;
			
		case 4:
			Period4();
			break;
			
		case 5:
			Period5();
			break;

		case 6:
			Period6();
			break;

		case 7:
			Period7();
			break;

		case 8:
			Period8();
			break;

		case 9:
			Period9();
			break;

		case 10:
			Period10();
			break;
	}
		
}

function Period0()
{
	alert("period")
}

function Period1()
{
	alert("period")
}

function Period2()
{
	alert("period")
}

function Period3()
{
	alert("period")
}

function Period4()
{
	alert("period")
}

function Period5()
{
	alert("period")
}

function Period6()
{
	alert("period")
}

function Period7()
{
	alert("period")
}

function Period8()
{
	alert("period")
}

function Period9()
{
	alert("period")
}

function Period10()
{
	alert("period")
}

function StoreInfo()
{
	periodnum = periodnum + 1;
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
