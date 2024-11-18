window.addEventListener("load", addListener);
var firstname, lastname, idnum, idlength, grade, officeclass, counselor, office;
var period1, course1, room1, teacher1;
var period2, course2, room2, teacher2;
var period3, course3, room3, teacher3;
var period4, course4, room4, teacher4;
var period5, course5, room5, teacher5;
var period6, course6, room6, teacher6;
var period7, course7, room7, teacher7;
var period8, course8, room8, teacher8;

function addListener() {
    document.getElementById("firstpart").style.display = "block";
    document.getElementById("secondpart").style.display = "none";
    document.getElementById("lastpart").style.display = "none";
    document.getElementById("btnnext").addEventListener("click", Next);
    document.getElementById("btnsubmit").addEventListener("click", Submit);
}

function Next() {
    GetInfo();
}

function GetInfo() {
    firstname = document.getElementById("txtfirstname").value;
    lastname = document.getElementById("txtlastname").value;
    idnum = document.getElementById("txtid").value;
    idlength = idnum.length;
    grade = document.getElementById("txtgrade").value;
    officeclass = document.getElementById("txtofficeclass").value;
    counselor = document.getElementById("txtcounselor").value;
    office = document.getElementById("txtoffice").value;
    CheckSInfo();
}

function CheckSInfo() {
    if (firstname == "" || lastname == "" || grade == "" || officeclass == "" || counselor == "" || office == "" || idnum == "" || idlength != 9) {
        alert("Please fill out all the basic information fields before proceeding. If you already entered all information, then you might have entered an invalid ID number. It should be a nine-digit number.");
        document.getElementById("txtid").value = "";
        return;
    }
    if (grade > 12 || grade < 9 || parseFloat(grade) % 1 != 0) {
        alert("Your grade level should be between 9 and 12. Please try again.");
        document.getElementById("txtgrade").value = "";
        return;
    } else {
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

function GetClassInfo() {
    var period = document.getElementById("txtperiod").value; // Manually entered or selected period
    var course = document.getElementById("txtclass").value;
    var room = document.getElementById("txtroom").value;
    var teacher = document.getElementById("txtteacher").value;

    switch (period) {
        case "1":
            period1 = period;
            course1 = course;
            room1 = room;
            teacher1 = teacher;
            break;
        case "2":
            period2 = period;
            course2 = course;
            room2 = room;
            teacher2 = teacher;
            break;
        case "3":
            period3 = period;
            course3 = course;
            room3 = room;
            teacher3 = teacher;
            break;
        case "4":
            period4 = period;
            course4 = course;
            room4 = room;
            teacher4 = teacher;
            break;
        case "5":
            period5 = period;
            course5 = course;
            room5 = room;
            teacher5 = teacher;
            break;
        case "6":
            period6 = period;
            course6 = course;
            room6 = room;
            teacher6 = teacher;
            break;
        case "7":
            period7 = period;
            course7 = course;
            room7 = room;
            teacher7 = teacher;
            break;
        case "8":
            period8 = period;
            course8 = course;
            room8 = room;
            teacher8 = teacher;
            break;
        default:
            alert("Invalid period selected.");
            return;
    }
    CheckCInfo();
}

function CheckCInfo() {
    if (course == "" || room == "" || teacher == "") {
        alert("Please fill out all the class information fields before submitting.");
        return;
    } else {
        StoreClass();
    }
}

function StoreClass() {
    // Store each class individually for the respective period
    if (period1) {
        localStorage.setItem("period1", period1);
        localStorage.setItem("course1", course1);
        localStorage.setItem("room1", room1);
        localStorage.setItem("teacher1", teacher1);
    }
    if (period2) {
        localStorage.setItem("period2", period2);
        localStorage.setItem("course2", course2);
        localStorage.setItem("room2", room2);
        localStorage.setItem("teacher2", teacher2);
    }
    if (period3) {
        localStorage.setItem("period3", period3);
        localStorage.setItem("course3", course3);
        localStorage.setItem("room3", room3);
        localStorage.setItem("teacher3", teacher3);
    }
    if (period4) {
        localStorage.setItem("period4", period4);
        localStorage.setItem("course4", course4);
        localStorage.setItem("room4", room4);
        localStorage.setItem("teacher4", teacher4);
    }
    if (period5) {
        localStorage.setItem("period5", period5);
        localStorage.setItem("course5", course5);
        localStorage.setItem("room5", room5);
        localStorage.setItem("teacher5", teacher5);
    }
    if (period6) {
        localStorage.setItem("period6", period6);
        localStorage.setItem("course6", course6);
        localStorage.setItem("room6", room6);
        localStorage.setItem("teacher6", teacher6);
    }
    if (period7) {
        localStorage.setItem("period7", period7);
        localStorage.setItem("course7", course7);
        localStorage.setItem("room7", room7);
        localStorage.setItem("teacher7", teacher7);
    }
    if (period8) {
        localStorage.setItem("period8", period8);
        localStorage.setItem("course8", course8);
        localStorage.setItem("room8", room8);
        localStorage.setItem("teacher8", teacher8);
    }

    DisplaySchedule();
}

function DisplaySchedule() {
    document.getElementById("secondpart").style.display = "none";
    document.getElementById("lastpart").style.display = "block";
    DisplaySavedSchedule();
}

function DisplaySavedSchedule() {
    var scheduleDiv = document.getElementById("lastpart");
    var scheduleHTML = '<h2>Student Schedule</h2>';
    scheduleHTML += '<p>Name: ' + localStorage.getItem("firstname") + ' ' + localStorage.getItem("lastname") + '</p>';
    scheduleHTML += '<p>ID: ' + localStorage.getItem("idnum") + '</p>';
    scheduleHTML += '<p>Grade: ' + localStorage.getItem("grade") + '</p>';
    scheduleHTML += '<p>Office Class: ' + localStorage.getItem("officeclass") + '</p>';
    scheduleHTML += '<p>Counselor: ' + localStorage.getItem("counselor") + '</p>';
    scheduleHTML += '<p>Counselor Office: ' + localStorage.getItem("office") + '</p>';
    scheduleHTML += '<h3>Classes:</h3>';

    // Display each period's class if it exists
    for (var i = 1; i <= 8; i++) {
        if (localStorage.getItem("course" + i)) {
            scheduleHTML += '<p>Period ' + i + ': ' + localStorage.getItem("course" + i) + ' - Room: ' + localStorage.getItem("room" + i) + ' - Teacher: ' + localStorage.getItem("teacher" + i) + '</p>';
        }
    }

    scheduleDiv.innerHTML = scheduleHTML;
}