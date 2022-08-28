const React = require('react')
const Def = require('../default')

function show (data) {
     console.log(data)
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            <img src={data.place.pic} alt={data.place.name}></img>
                <h3>
                Located in { data.place.city },{ data.place.state }
                </h3>
                <h3> Rating </h3>
                <p>
                    currently unrated
                </p>
            <h2>Description</h2>
            <h3>
                {data.place.showEstablished()}
            </h3>
            <h4>
                Serving {data.place.cuisines}
            </h4>

           


            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                Edit
            </a>  
           
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                <button type="submit" className="btn btn-danger">
                    Delete
                </button>
           
            </form>     
            
            <h3> Comments</h3>

          </main>
        </Def>
    )
}

module.exports = show

