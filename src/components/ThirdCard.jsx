import { useState } from "react";

const ThirdCard = ({ name, age }) => {
    const [member, setmember] = useState("")

    const clickHandler = (name) => {
        setmember(name);
    }

    return (
        <div onClick={() => clickHandler(name)} className='card'>
            <p>Name : {name}</p>
            <p>Age : {age}</p>
            {member && "Greeting " + member}
        </div>
    );
};

export default ThirdCard;