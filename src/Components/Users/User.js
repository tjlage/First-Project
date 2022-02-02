
const User = (props) => {
    return (<li key={props.id}>{props.name} {props.age} (Years Old)</li>)
}

export default User;