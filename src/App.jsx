import Card from "./components/Card"
import Counter from "./components/Counter"
import SecondCard from "./components/SecondCard"
import ThirdCard from "./components/ThirdCard"
import TestCompnent from "./TestCompnent"


const members = [
  { name: "Rahim", age: 23 },
  { name: "kahim", age: 52 },
  { name: "tahim", age: 32 },
  { name: "sahim", age: 10 },
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

      {/* <div className="card">
        {
          members
            .filter((member) => member.age > 18)
            .sort((a, b) => a.age - b.age)
            .map((member) => <SecondCard  name={member.name} age={member.age}></SecondCard>)
        }
      </div> */}
      <div className="card">
        {
          members
            .map((member) => <ThirdCard name={member.name} age={member.age}></ThirdCard>)
        }
      </div>

      <Counter></Counter>
    </>
  )
}

export default App
