import React from "react";

function Card(props){
  console.log("props");
    return(
      <div class="card">
      <div class="card-image waves-effect waves-block waves-light">
        <img class="activator" src={props.img}/>
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">{props.title}<i class="material-icons right">more_vert</i></span>
        <p><a href="#">View Product</a></p>
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">{props.title}<i class="material-icons right">close</i></span>
        <p>{props.description.slice(0,40)+'...'}</p>
      </div>
    </div>
      
                
    );
}
export default Card;