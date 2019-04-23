import React from 'react';
import {uniqueId} from './../../util/util';

class TodoForm extends React.Component {
    constructor(props){
        super(props)

        this.state ={
            id: uniqueId(),
            title: "",
            body: "",
            done: false
        };
    }

    updateTitle(e) {
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

    render () {
        return(
            <form>
                <label>Title:
                    <input type="text" value={this.state.title} onChange={this.updateTitle}></input>
                </label>

                <label>Body:
                    <input type="text" value={this.state.body} onChange={this.updateBody}></input>
                </label>

                <label>
                    <input type="checkbox" value={this.state.done} onChange={this.updateDone}></input>Done?
                </label>

            </form>
        )
    }
} 