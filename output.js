window.addEventListener("load", displaySchedule);

function displaySchedule() {
    const firstname = localStorage.getItem("firstname");
    const lastname = localStorage.getItem("lastname");
    const idnum = localStorage.getItem("idnum");
    const grade = localStorage.getItem("grade");
    const officeclass = localStorage.getItem("officeclass");
    const counselor = localStorage.getItem("counselor");
    const office = localStorage.getItem("office");

    document.getElementById("firstname").textContent = firstname;
    document.getElementById("lastname").textContent = lastname;
    document.getElementById("idnum").textContent = idnum;
    document.getElementById("grade").textContent = grade;
    document.getElementById("officeclass").textContent = officeclass;
    document.getElementById("counselor").textContent = counselor;
    document.getElementById("office").textContent = office;
    
    for (let period = 1; period <= 8; period++) {
        const monCourse = localStorage.getItem(`period${period}_mon_course`);
        const tueCourse = localStorage.getItem(`period${period}_tue_course`);
        const wedCourse = localStorage.getItem(`period${period}_wed_course`);
        const thuCourse = localStorage.getItem(`period${period}_thu_course`);
        const friCourse = localStorage.getItem(`period${period}_fri_course`);

        document.getElementById(`period${period}_mon`).textContent = monCourse;
        document.getElementById(`period${period}_tue`).textContent = tueCourse;
        document.getElementById(`period${period}_wed`).textContent = wedCourse;
        document.getElementById(`period${period}_thu`).textContent = thuCourse;
        document.getElementById(`period${period}_fri`).textContent = friCourse;
    }
}
