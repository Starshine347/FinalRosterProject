import "./styles.css";

function createRosterItem(persondata) {
  let rosterItem = (
    <div className="studentRow">
      <div className="studentData name">
        {persondata.fn + " " + persondata.ln}
      </div>
      <div className="studentData pronouns">{persondata.pr}</div>
      <div className="studentData highschool">{persondata.sc}</div>
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
    return createRosterItem(person);
  });

  return (
    <div className="App">
      <h1>Code Nation Roster</h1>
      {elements}
    </div>
  );
}
