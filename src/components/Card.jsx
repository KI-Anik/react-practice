// props and children
import "./Card.css"

const Card = (props) => {
    const { age } = props

    return (
        <>
            {age > 18 ? (
                <div className="card">
                    <h1>{props.children}</h1>
                    <p>First Name : {props.firstName} </p>
                    <p>Last Name : {props.lastName} </p>
                    <p>Age : {props.age} </p>
                </div>) 
                :
                <div className="card">
                    you are too young
                </div>
            }

        </>
    );
};

export default Card;