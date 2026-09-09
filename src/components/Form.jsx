import { useState } from 'react';

const Form = () => {
    const [name, setName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setName(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;