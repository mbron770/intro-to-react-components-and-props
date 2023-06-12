function Cake(props){
    console.log(props)
    return(
        <div className="cake">
            <p>Name: {props.name}</p>
            <img src={props.image} alt={props.name} />
            <p>Description: {props.description}</p>
            <p>Price: ${props.price}</p>
        </div>
    )
}

export default Cake;