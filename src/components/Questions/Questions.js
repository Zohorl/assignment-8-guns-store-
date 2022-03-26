import React from 'react';
import './Questions.css';
const Questions = () => {
    return (
        <div className='questions'>
            <div>
                <h4>Q.1 :What's different between props and state ? </h4>
                <p>
                    Props:
                    <li>Data can pass one component to another component</li>
                    <li>It is Immutable</li>
                    <li>Props can be used with state and functional components.</li>
                    <li>Props are read-only.</li>
                </p>
                <p>
                    State :
                    <li>Data can passed within the component only</li>
                    <li>It is mutable</li>
                    <li>State can be used only with the state components</li>
                    <li>State is both read and write</li>
                </p>
            </div>
            <div>
                <h4> Q.2 : How useState works ?</h4>
                <p>useState is a Hook that allows state variables in functional components.Pass an initial state a function and it returns a variable with current state value and another function to update this value.useState in a class is always an object with hook.It is immutability.React initializes the list of Hooks and the variable that keeps track of the current Hook
                    it calls component for the first time finds a call to useState, creates a new Hook object can changes the current Hook variable to point to this object, adds the object to the Hooks list, and return the array with the initial state and the function to update it</p>
            </div>

        </div>
    );
};

export default Questions;