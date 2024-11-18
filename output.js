window.addEventListener("load", displaySchedule);

function displaySchedule() {
    // Fetch student data from localStorage
    const firstname = localStorage.getItem("firstname");
    const lastname = localStorage.getItem("lastname");
    const idnum = localStorage.getItem("idnum");
    const grade = localStorage.getItem("grade");
    const officeclass = localStorage.getItem("officeclass");
    const counselor = localStorage.getItem("counselor");
    const office = localStorage.getItem("office");

    // Populate student information in the table
    document.getElementById("firstname").textContent = firstname;
    document.getElementById("lastname").textContent = lastname;
    document.getElementById("idnum").textContent = idnum;
    document.getElementById("grade").textContent = grade;
    document.getElementById("officeclass").textContent = officeclass;
    document.getElementById("counselor").textContent = counselor;
    document.getElementById("office").textContent = office;

    // Loop through periods 1-8 and fill the schedule cells for Monday to Friday
    for (let period = 1; period <= 8; period++) {
        const monCourse = localStorage.getItem(`period${period}_mon_course`);
        const tueCourse = localStorage.getItem(`period${period}_tue_course`);
        const wedCourse = localStorage.getItem(`period${period}_wed_course`);
        const thuCourse = localStorage.getItem(`period${period}_thu_course`);
        const friCourse = localStorage.getItem(`period${period}_fri_course`);

        // Populate Monday to Friday cells for each period
        document.getElementById(`period${period}_mon`).textContent = monCourse || "No Class";
        document.getElementById(`period${period}_tue`).textContent = tueCourse || "No Class";
        document.getElementById(`period${period}_wed`).textContent = wedCourse || "No Class";
        document.getElementById(`period${period}_thu`).textContent = thuCourse || "No Class";
        document.getElementById(`period${period}_fri`).textContent = friCourse || "No Class";
    }
}
