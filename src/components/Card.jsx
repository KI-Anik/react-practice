// props and children

const Card = (props) => {
    console.log(props);

    return (
        <div>
            <p>First Name : {props.firstName} </p>
            <p>Last Name : {props.lastName} </p>
            <p>Age : {props.age} </p>
        </div>
    );
};

export default Card;