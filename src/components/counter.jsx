import React, { Component } from "react";
class Counter extends Component {
  // state = {
  //   // state: special property and it's an object that includes any data that the component needs!
  //   value: this.props.counter.value // property
  //   // tags: [],
  // };
  //tag is a string inside the map function., map has {key, value} pair.
  //Inside list tag there is a {tag} which refers list to render dynamically.

  // //Conditional Render Concept::
  //  renderTags() {
  //    if(this.state.tags.length === 0) return <p> There are no tags! </p>;

  //    return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;

  // }


  
  // handleIncrement = product => { 
  //   console.log(product);
  //   // console.log("Increment Clicked",this);  //this refer to current counter object
  //   this.setState({ value: this.state.value + 1});
  // };

  // dohandleIncrement = () =>{
  //   this.handleIncrement({ id:1 }) 
  // }
  render() {

    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={()=> this.props.onIncrement(this.props.counter)}
         className="btn btn-secondary btn-sm"
         >
          Increment
        </button>

        {/* <ul>
          {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul> */}

        {/*  { this.state.tags.length === 0 && "Please create a new tag!!"}
         { this.renderTags() } */}
        <button 
        onClick={ () => this.props.onDelete(this.props.counter.id)} 
        className="btn btn-danger btn-sm m-2">
          Delete
        </button>

      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
