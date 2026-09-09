import { use } from "react";
import { CounterContext } from "../provider/counter.provider";

const NestedDisplay = () => 
    {const {count} = use(CounterContext)

    return (
        <div className="card-orange">
            <h3>GrandChild</h3>
        {count}
        </div>
    );
};

export default NestedDisplay;