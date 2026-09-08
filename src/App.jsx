import Card from "./components/Card"
import SecondCard from "./components/SecondCard"
import TestCompnent from "./TestCompnent"


const members = [
  { name: "Rahim", age: 23 },
  { name: "Rahim", age: 52 },
  { name: "Rahim", age: 32 },
  { name: "Rahim", age: 10 },
]

function App() {

  return (
    <>
      {/* <h1>Hello World</h1>
      <TestCompnent></TestCompnent>
      <Card firstName="Amir"
        lastName="khan"
        age="40">
          Welcome
      </Card> */}

      <div className="card">
        {
          members
            .filter((member) => member.age > 18)
            .sort((a, b) => a.age - b.age)
            .map((member) => <SecondCard  name={member.name} age={member.age}></SecondCard>)
        }
      </div>
    </>
  )
}

export default App
