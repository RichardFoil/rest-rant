const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            <h2>{ data.place.pic }</h2>
            <h3> Rating </h3>
                <p>
                    currently unrated
                </p>
            <h3>Description</h3>
            Located in { data.place.city },{ data.place.state } and serving { data.place.cuisines }
            <h3> Comments</h3>
          </main>
        </Def>
    )
}

module.exports = show

