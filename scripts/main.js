const students = [
  {
    name: "Chris Miller",
    subject: "History",
    info: "Failed last exam",
    score: 59,
  },
  {
    name: "Courtney Seward",
    subject: "History",
    info: "Has completed all homework",
    score: 91,
  },
  {
    name: "Garrett Ward",
    subject: "History",
    info: "Wonderful at helping other students",
    score: 88,
  },
  {
    name: "John Dulaney",
    subject: "History",
    info: "Has never missed a class or exam",
    score: 92,
  },
  {
    name: "Greg Lawrence",
    subject: "History",
    info: "Sub-par performance all around",
    score: 64,
  },
  {
    name: "Leah Duvic",
    subject: "History",
    info: "Wonderful student",
    score: 97,
  },
  {
    name: "Jesse Page",
    subject: "History",
    info: "Smokes too much. Distracting.",
    score: 76,
  },
  {
    name: "Kevin Haggerty",
    subject: "History",
    info: "Falls asleep in class",
    score: 79,
  },
  {
    name: "Max Wolf",
    subject: "History",
    info: "Talks too much",
    score: 83,
  },
  {
    name: "Lissa Goforth",
    subject: "History",
    info: "Asks pointless, unrelated questions",
    score: 78,
  },
  {
    name: "Tyler Bowman",
    subject: "History",
    info: "When was the last time he attended class?",
    score: 48,
  },
  {
    name: "Ray Medrano",
    subject: "History",
    info: "Needs to contribute to in-class discussions",
    score: 95,
  },
];

const createStudentComponent = (object) => {
  return `
      <div class="student">
          <h1 class="${object.h1Class}">${object.name}</h1>
          <section class="${object.sectionClass}">${object.subject}</section>
          <aside class="${object.asideClass}">${object.info}</aside>
      </div>
  `;
};

// // Iterate the array of students, and apply the correct style to the h1
// // depending on the score of the student being below 60, or above it.
// // You want passing students' names to be green, and non-passing students to be orange.
let studentContainer = document.querySelector("#container");

for (const item of students) {
  let object = item;
  let studentComponent = "";
  if (item.score >= 60) {
    object.h1Class = "xx-large passing";
    object.sectionClass = "bordered dashed section--padded";
    object.asideClass = "pushRight";
    studentComponent = createStudentComponent(object);
  } else {
    object.h1Class = "failing";
    studentComponent = createStudentComponent(object);
  }
  studentContainer.innerHTML += studentComponent;
}

createStudentComponent(students);
