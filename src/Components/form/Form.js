import { useState } from "react";

const Form = (props) => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (username === '' || age === '') {
            console.log("Invalid")
            return
        }
        console.log(username);
        console.log(age);
        setUsername('');
        setAge('');
    }
    const usernameChangeHandler = (event) => {
        setUsername(event.target.value)
    }
    const ageChangeHandler = (event) => {
        setAge(event.target.value)
    }
    return (<form onSubmit={onSubmitHandler}>
        <div>
            <h2>{props.labels[0]}</h2>
        </div>
        <div>
            <input onChange={usernameChangeHandler} value={username} type="text"></input>
        </div>
        <div>
            <h2>{props.labels[1]}</h2>
        </div>
        <div>
            <input onChange={ageChangeHandler} value={age} type="number" min="0"></input>
        </div>
        <button type="submit">Add User</button>
    </form>)
}

export default Form;