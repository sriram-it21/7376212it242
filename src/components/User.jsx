const User = (props) => {


    return (
    <>
    <h2>Name:{`${props.fName} ${props.lName}` }  </h2>
    <h2>Age:{props.age}</h2>
    </>
    )
}
export default User