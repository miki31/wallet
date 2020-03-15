import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    state = {
        isLoading: true,
        groups: []
    };

    //test

    async componentDidMount() {
        const response = await fetch('/api/models');
        const body = await response.json();
        console.log(JSON.stringify(body));
        // console.log(body);
        // console.log("body");
        this.setState({groups: body, isLoading: false});
    };

    render() {
        const {groups, isLoading} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        return (
            <div className="App">
                <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <div>
                            <h1>Привіт марічка)))</h1>
                            <h2>Hello WORLD _____ in REACT and java_SPRING!!!!!!!!</h2>
                            {groups.map(group =>
                                <div key={group.age}>
                                    {group.name}
                                </div>
                            )}

                            <div className="alert alert-success" role="alert">
                                <h4 className="alert-heading">Well done!</h4>
                                <p>Aww yeah, you successfully read this important alert message. This example text is
                                    going to run a bit longer so that you can see how spacing within an alert works with
                                    this kind of content.</p>
                                <hr/>
                                <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep
                                    things nice and tidy.</p>
                            </div>
                        </div>
                </header>
            </div>
        );
    };


    // return (
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <p>
    //         Edit <code>src/App.js</code> and save to reload.
    //       </p>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React
    //       </a>
    //     </header>
    //   </div>
    // );
}

export default App;
