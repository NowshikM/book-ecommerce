import React from "react";

function Card(title,description){
  console.log("props");
    return(
        <div className="row">
        <div className="col s12 m6">
          <div className="card">
            <div className="card-image">
              <span >{title}</span>
              <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
            </div>
            <div className="card-content">
              <p>{description}ppp</p>
            </div>
          </div>
        </div>
        </div>
      
                
    );
}
export default Card;