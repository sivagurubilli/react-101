const Card = ({title,arr})=>{
    return(
        <div>
            <h2>{title}</h2>
            <ul>{arr.map((ele)=>{
                return<li>{ele}</li>
            })}</ul>
        </div>
    )
}

export default Card;