import { useState, useRef } from "react";
import styles from "./AddUsers.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredUsername = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: "Invalid input",
                message: "Please enter a valid name and age.(non empty values)."
            });
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: "Invalid age",
                message: "Please enter a valid age > 0."
            });
            return;
        }
        props.addUser(enteredUsername, enteredAge);
        nameInputRef.current.value = "";
        ageInputRef.current.value = "";
    }
    const errorHandler = () => {
        setError(null);
    };
    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" ref={nameInputRef} type="text"></input>
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" ref={ageInputRef}></input>
                    <Button type="submit">Add User</Button>
                </form>
            </Card></div>)
}

export default AddUser;