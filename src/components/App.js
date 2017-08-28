import React, {Component} from 'react';
import './Styles.scss'

class App extends Component {
    render() {
        console.log('test');
        return (
            <div>
                <h1 className="header">Hello, {this.props.name}</h1>
            </div>
        );
    }
}

export default App;