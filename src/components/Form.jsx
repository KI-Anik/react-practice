import { useState } from 'react';
import ThirdCard from './ThirdCard';

const Form = () => {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [members, setMembers] = useState([
        { name: "Rahim", age: 23 },
        { name: "kahim", age: 52 },
        { name: "tahim", age: 32 },
        { name: "sahim", age: 10 },
    ])

    const handleSubmit = (e) => {
        e.preventDefault()
        setMembers([...members, { name, age }])

        setName("")
        setAge("")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <input
                    type="number"
                    onChange={(e) => setAge(e.target.value)}
                    value={age}
                />
                <button type="submit">Submit</button>
            </form>
            <div className="card">
                {
                    members
                        .map((member) => <ThirdCard name={member.name} age={member.age}></ThirdCard>)
                }
            </div>
        </div>

    );
};

export default Form;