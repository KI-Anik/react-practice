import Card from "./components/Card"
import TestCompnent from "./TestCompnent"

function App() {

  return (
    <>
      <h1>Hello World</h1>
      <TestCompnent></TestCompnent>
      <Card firstName="Amir"
        lastName="khan"
        age="40">
          Welcome
      </Card>
    </>
  )
}

export default App
