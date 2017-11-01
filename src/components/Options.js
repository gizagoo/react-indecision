import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3>Your Options ({props.options.length})</h3>
            <button
                className="button button--link" 
                onClick={props.handleDeleteOptions}
                >Clear All</button>
        </div>
        {props.options.length == 0 && <p className="widget__message">Please add an option to get started</p>}
        <ol>
        {
            props.options.map((option, index) => (
                <Option 
                    key={option} 
                    optionText={option}
                    count={index + 1} 
                    handleDeleteOption={props.handleDeleteOption} 
                />
            ))
        }
        </ol>
    </div>
    );

export default Options;
