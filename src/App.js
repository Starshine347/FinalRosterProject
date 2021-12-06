import "./styles.css";

function createRosterItem(studentName, studentPronouns, studentHS) {
  let rosterItem = (
    <div className="studentRow">
      <div className="studentData name">{studentName}</div>
      <div className="studentData pronouns">{studentPronouns}</div>
      <div className="studentData highschool">{studentHS}</div>
    </div>
  );
  return rosterItem;
}

export default function App() {
  let people = [
    {
      fn: "Mikkail",
      ln: "Allan",
      pr: "He/His",
      sc: "Williamsburg Charter Highschool"
    },
    { fn: "Justin", ln: "Apupalo", pr: "He/His", sc: "NYIT" },
    {
      fn: "Christopher",
      ln: "Bonifacio",
      pr: "He/His",
      sc: "Orchard Collegiate Academy"
    },
    { fn: "Chinaza", ln: "Onwukanjo", pr: "She/Her", sc: "FDA1" }
  ];

  let elements = [];

  elements = people.map(function (person) {
    return createRosterItem(person.fn, person.pr, person.sc);
  });

  return (
    <div className="App">
      <h1>Code Nation Roster</h1>
      {elements}
    </div>
  );
}
