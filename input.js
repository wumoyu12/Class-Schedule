window.addEventListener("load", addListener);

function addListener() 
{
	document.getElementById("btnnext").addEventListener("click",Next);
}

function Next()
{
	GetInfo()
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
	
	CheckInfo()
}

function CheckInfo()
{
	
}
