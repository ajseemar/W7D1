import React from 'react';
import {uniqueId} from './../../util/util';

class TodoForm extends React.Component {
    constructor(props){
        super(props);

        this.state ={
            id: uniqueId(),
            title: "",
            body: "",
            done: false
        };
    }

    updateTitle(e) {
        // debugger 
        e.preventDefault();
        this.setState({
            title: e.target.value
        });
    }

    updateBody(e) {
        e.preventDefault();
        this.setState({
            body: e.target.value
        });
    }

    updateDone(e) {
        e.preventDefault();
        this.setState({
            done: e.target.value
        });
    }

    submitHandler(e) {
        e.preventDefault();
        this.props.receiveTodo(this.state);
        this.setState({
            id: uniqueId(),
            title: "",
            body: "",
            done: false
        });
    }

    render () {
        return(
            <form onSubmit={this.submitHandler.bind(this)}>
                <label>Title:
                    <input type="text" value={this.state.title} onChange={this.updateTitle.bind(this)}></input>
                </label>

                <label>Body:
                    <input type="text" value={this.state.body} onChange={this.updateBody.bind(this)}></input>
                </label>

                <label>
                    <input type="checkbox" value={this.state.done} onChange={this.updateDone.bind(this)}></input>Done?
                </label>

                <input type="submit" value="Add To-Do"></input>

            </form>
        )
    }
} 

export default TodoForm;