import {Component} from 'react';
import ReactDOM from 'react-dom';

class Author extends Component{


 render(){
   return(
    <div>
    <u><h1>{this.props.authorname}</h1></u>
    <button onClick={this.handleClick}>Buy</button>
    </div>
   );
 }

}
export default Author;
