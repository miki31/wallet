import React, {Component, useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Alert from "react-bootstrap/Alert";

import 'bootstrap/dist/css/bootstrap.min.css';

const url = '/api/models';

export const App = () => {
    const [ isLoading, setLoading ] = useState(true);
    const [ groups, setGroups] = useState([]);

    async function fetchUrl() {
        const response = await fetch(url);
        const json = await response.json();
        setGroups(json);

        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }

    useEffect(() => {
        fetchUrl();
    }, []);


    // async componentDidMount() {
    //     const response = await fetch('/api/models');
    //     const body = await response.json();
    //     console.log(JSON.stringify(body));
    //     // console.log(body);
    //     // console.log("body");
    //     this.setState({groups: body, isLoading: false});
    // };

    return (
        <div className="App">
            { isLoading ? (
                <p>Loading...</p>
            ) :
                (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <div>
                    <h1>Привіт марічка)))</h1>
                    <h2>Hello WORLD _____ in REACT and java_SPRING!!!!!!!!</h2>
                    {groups.map(group =>
                        <div key={group.id}>
                            ID__{group.id} :_  Name : {group.name} ___ age : {group.age}
                        </div>
                    )}

                    <div className="alert alert-success" role="alert">
                        <h4 className="alert-heading">Well done!</h4>
                        <p>Aww yeah, you successfully read this important alert message. This example text is
                            going to run a bit longer so that you can see how spacing within an alert works with
                            this kind of content.</p>
                        <hr/>
                        <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep
                            things nice and tidy.</p>
                    </div>
                </div>

                <Alert variant="warning">
                    <Alert.Heading>Hey, nice to see you</Alert.Heading>
                    <p>
                        Aww yeah, you successfully read this important alert message. This example
                        text is going to run a bit longer so that you can see how spacing within an
                        alert works with this kind of content.
                    </p>
                    <hr />
                    <p className="mb-0">
                        Whenever you need to, be sure to use margin utilities to keep things nice
                        and tidy.
                    </p>
                </Alert>
            </header>)}
        </div>
    );
};
