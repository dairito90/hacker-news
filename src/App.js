import React, {Component} from 'react';
import './App.css';

const list = [
    {
        title: 'React',
        url: 'https://facebook.github.io/react',
        author: 'Jordan Walke',
        num_comments: 3,
        points: 4,
        objectID: 0
    }, {
        title: 'Redux',
        url: 'https://facebook.github.io/react',
        author: 'Dan Abramov, Andrew Clarck',
        num_comments: 2,
        points: 5,
        objectID: 1
    }
];

const isSearched = (searchTerm) => (item) => !searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase());

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list,
            searchTerm: ''
        };

        this.onSearchChange = this.onSearchChange.bind(this);
        this.onDismiss = this.onDismiss.bind(this)
    }

    onDismiss(id) {
        const updateList = this.state.list.filter(item => item.objectID !== id);
        this.setState({list: updateList});
    }

    onSearchChange(event) {
        this.setState({searchTerm: event.target.value});
    }

    render() {
        return (
            <div className="app">
                <form>
                    <input type="text" onChange={this.onSearchChange}/>

                </form>
                
                {this.state.list.filter(isSearched(this.state.searchTerm)).map(item =>

                    <div key={item.objectID}>
                    <span>
                        <a href={item.url}>
                            {item.title}
                        </a>
                    </span>
                    <span>
                        {item.author}
                    </span>
                    <span>
                        {item.num_comments}
                    </span>
                    <span>
                        {item.points}
                    </span>
                    <span>
                        <button onClick={() => this.onDismiss(item.objectID)} type="button">
                            Dismiss
                        </button>
                    </span>
                </div>)}
            </div>
        );
    }
}

export default App;
