import User from "./User";
import styles from "./Users.module.css";
import Card from "../UI/Card";

const UserList = (props) => {
    return <Card className={styles.users} >
        <ul>{props.users.map((user) => (<User name={user.username} age={user.age} key={user.id} />))}</ul>
    </Card >
}

export default UserList;