import React from 'react'

class TodoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            task: "",
            tags: ""
        }
    }

    handleTaskInputChange = e => {
        if(e.target.value === '' && this.props.search !== false) {
            this.props.searchTask('')
        }
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div className="form">
                <input type="text" name="task" placeholder="Add a Task to add o to search" value={this.state.task} onChange={this.handleTaskInputChange}/>
                <input type="text" name="tags" placeholder="Add Tags use ',' to separate them (Optional)" value={this.state.tags} onChange={this.handleTaskInputChange}/>
                <div className="buttonPanel">
                    <button onClick={
                        () => {
                            if(this.state.task !== '') {
                                this.props.addTask(this.state)
                                this.setState({task: '', tags:''})
                            }
                        }
                    }>
                        Add Task
                    </button>
                    <button onClick={this.props.clearCompleted}>
                        Clear Task Completed
                    </button>
                    <button onClick={
                        () => {
                            this.props.searchTask(this.state.task)
                        }
                    }>
                        Search Tasks
                    </button>
                </div>
                
            </div>
            
        )
    }
}

export default TodoForm