const Links =({linkarr})=>{
    return(
        <div>
            <ul>
                {linkarr.map(link=>{
                    return <li>{link}</li>
                })}
            </ul>
        </div>
    )
}

export default Links