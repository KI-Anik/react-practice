
import NestedDisplay from "./NestedDisplay";

const Display = ({ count }) => {
    return (
        <div className='card-blue'>
            <h3>child component</h3>
            <NestedDisplay count={count}></NestedDisplay>
        </div>
    );
};

export default Display;