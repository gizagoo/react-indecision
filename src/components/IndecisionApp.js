import React from 'react';
import Action from './Action';
import AddOption from './AddOption';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {  
    state = {
        options: [],
        selectedOption: undefined
    }
    handleDeleteOptions = () => {
        this.setState(() => ({ options: []}));
    }

    handleDeleteOption = (optionToRemove) => {
        console.log('Remove', optionToRemove);
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({selectedOption: option}));      
    }
    handleAddOption = (option) => {
        if (!option) {
            return 'Enter a valid value';
        }
        else if (this.state.options.indexOf(option) > -1) {
            return 'That is already in the list';
        }

        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    }
    closeSelectedOptionModal = () => {
        this.setState(() => ({ selectedOption: undefined }));
    }

    componentDidMount() {
        try
        {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options }) );
            }
        } catch (err) {
            // Do nothing
        }
    }
    componentDidUpdate(prevProps, prevState) {

        if (!prevProps.options) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
        else if (prevProps.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    componentWillUnmount() {
        console.log('Will unmount');
    }
    render() {
        const appSubtitle = 'Trust in computers';
        
            return (
            <div>
                <Header subtitle={appSubtitle}/>
                <div className="container">
                    <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}/>
                    <div className="widget">
                        <Options 
                            options={this.state.options} 
                            handleDeleteOptions={this.handleDeleteOptions} 
                            handleDeleteOption={this.handleDeleteOption} />
                        <AddOption handleAddOption={this.handleAddOption}/>
                    </div>
                </div>
                <OptionModal 
                    selectedOption={this.state.selectedOption} 
                    closeSelectedOptionModal={this.closeSelectedOptionModal} />
            </div>
        );
    }
}
