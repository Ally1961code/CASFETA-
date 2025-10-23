function submitForm() {
  const studentName = document.getElementById("student_name").value.trim();
  const courseName = document.getElementById("course_name").value.trim();
  const gpa = document.getElementById("gpa").value.trim();

  if(studentName === "" || courseName === "" || gpa === "") {
    document.getElementById("status").innerText = "Please fill all fields!";
    document.getElementById("status").style.color = "red";
    return;
  }

  const url = "PASTE_YOUR_WEB_APP_URL_HERE"; // Google Apps Script Web App URL

  fetch(url, {
    method: "POST",
    body: JSON.stringify({name: studentName, course: courseName, gpa: gpa})
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById("status").innerText = "Submission successful!";
    document.getElementById("status").style.color = "green";
    document.getElementById("casfetaForm").reset();
  })
  .catch(err => {
    document.getElementById("status").innerText = "Error submitting!";
    document.getElementById("status").style.color = "red";
    console.error(err);
  });
}