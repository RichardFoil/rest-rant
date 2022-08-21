const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <div>
            <img src="/images/cat.jpg" alt="Tree" />
            <div>
            Photo by <a href="https://unsplash.com/@zane404?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Zane Lee</a> on <a href="https://unsplash.com/s/photos/free-cat?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </div>
          </div>
              <p>Oops, sorry, we can't find this page!</p>
          </main>
      </Def>
    )
  }
  

module.exports = error404
