import React from 'react'
import './Footer.css'

class Footer extends React.Component {
  render(){
    return(
      <div>
        <footer className="footer is-primary">
          <div className="container">
            <div className="columns">
              <div className="column">
                <p>Dan ini adalah sebuah Footer, kita bisa masukan informasi tambahan</p>
              </div>
              <div className="column has-text-right">
                <a className="icon" href="#"><i className="fa fa-facebook"></i></a>
                <a className="icon" href="#"><i className="fa fa-twitter"></i></a>
                <a className="icon" href="#"><i className="fa fa-instagram"></i></a>
                <a className="icon" href="#"><i className="fa fa-youtube"></i></a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default Footer
