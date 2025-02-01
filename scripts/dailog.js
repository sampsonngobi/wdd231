export const mydialog = document.querySelector("#mydialog");
export const coursename = document.querySelector("#mydialog h2");
export const courseInfo = document.querySelector("#mydialog p");
export const close = document.querySelector("#mydialog button");

// Ensure elements exist
if (!mydialog) console.error("Modal not found!");
if (!coursename || !courseInfo || !close) console.error("Modal content elements missing!");

export function showInfo(course) {
    if (!mydialog) return; // Prevent errors if modal is missing

    console.log("Opening modal for:", course.title);

    coursename.innerText = course.title;
    courseInfo.innerHTML = `
        <strong>Course Code:</strong> ${course.subject}${course.number} <br><br>
        <strong>Certificate:</strong> ${course.certificate} <br><br>
        ${course.description} <br><br>
        <strong>Technology:</strong> ${course.technology.join(", ")} <br><br>
        <strong>credits:</strong> ${course.credits}
    `;

    mydialog.showModal();
}

// Close modal on button click
if (close) {
    close.addEventListener("click", () => mydialog.close());
}
