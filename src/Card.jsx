import './Card.css';

function Card({student}){
    const {name , color} = student
    return(
        <div className="card">
            <div className="container">
                <h4 style={{color: color}}><b>{name}</b></h4>
            </div>
        </div>
    )
    
}
export default Card