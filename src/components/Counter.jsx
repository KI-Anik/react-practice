import { use } from "react";
import { CounterContext } from "../provider/counter.provider";


const Counter = () => {
    const {count,setCount} = use(CounterContext)

    const handleIncrement = () => {
        setCount(count + 1)
    }

    const handleDecrement = () => {
        if(count > 0){
            setCount(count - 1)
        }
    }

 
    return (
        <div className="card">
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
};

export default Counter;