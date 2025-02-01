
import {mydialog , coursename, courseInfo, close, showInfo} from '../scripts/dailog.js'

const hamBurgerButton = document.querySelector("#menu");
const navigation = document.querySelector(".list");

if (hamBurgerButton && navigation) {
    console.log("Hamburger button:", hamBurgerButton);
    console.log("Navigation list:", navigation);

    hamBurgerButton.addEventListener('click', () => {
        navigation.classList.toggle("open");
        hamBurgerButton.classList.toggle("open");
    });
} else {
    console.error("Elements not found");
}


function footerUpdate(){
    const currentYear = new Date().getFullYear();
    const lastModified = new Date(document.lastModified);

    document.querySelector("#year").innerHTML = currentYear;
    document.querySelector("#modified-date").innerHTML = lastModified.toLocaleDateString();

   


}

// Course array 
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

const subjectColors = {
    WDD:{
        background: "#555546",
        color: 'White'
    },
    CSE:{
        background: "#737373",
        color: 'black'
    }
};

// Course display function
function displayCourses(courseToDisplay){
    const container  = document.getElementById("course-container")
    container.innerHTML = ""; // Clear the container before adding new courses  

    const totalCredits = courseToDisplay.reduce((sum, course) => sum + course.credits, 0);
    document.getElementById("credit").innerHTML = totalCredits; 

    courseToDisplay.forEach(course => {
        const courseDiv = document.createElement("div");
        courseDiv.classList.add("course-card");

        const subjectStyle = subjectColors[course.subject] || {background: "black", color: "white"};
        courseDiv.style.backgroundColor = subjectStyle.background;
        courseDiv.style.color = subjectStyle.color;

        if (course.completed){
            courseDiv.innerHTML = `
            <h3>${course.subject}${course.number} - completed ✅</h3>`;
        }

        else{
            courseDiv.innerHTML = `
            <h3>${course.subject}${course.number}</h3>`;
        }

        courseDiv.addEventListener('click', () => showInfo(course))       


        container.appendChild(courseDiv)    

      

    });

}

// function showInfo(course){
//     coursename.innerHTML = course.title
//     courseInfo.innerHTML = `Course Code: ${course.subject}${course.number}\n Certificate ${course.certificate} \n ${course.description}\n Technology: ${course.technology}`
//     mydialog.showModal()
// }

document.getElementById("btn-all").addEventListener("click", () =>{
    displayCourses(courses); //displays all courses
})

document.getElementById("btn-cse").addEventListener("click", () =>{
   const cseCourses = courses.filter(course => course.subject.startsWith("CSE"));
   displayCourses(cseCourses); //displays only CSE courses
})

document.getElementById("btn-wdd").addEventListener("click", () =>{
    const wddCourses = courses.filter(course => course.subject.startsWith("WDD"));
    displayCourses(wddCourses); //displays only CSE courses
 })
 


// initialize functions
footerUpdate();

displayCourses(courses);