import React from 'react'

class Todo extends React.Component {
   dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: "2-digit", minute: "2-digit", second: "2-digit" };

    render() {
        return (
        <div className={`task${this.props.item.completed ? ' completed' : '' }`} onClick={()=>{this.props.completeTask(this.props.item.id)}}>
            <span>{new Date(this.props.item.id).toLocaleDateString("en-US", this.dateOptions)}</span>
            <p>{this.props.item.task}</p>
            {this.props.item.tags !== '' ? <ul>{this.props.item.tags.split(",").map(el => (
                <li>{el}</li>
            ))}</ul>
            : <div className="no-tags">No Tags</div>}
            
        </div>
        )
    }
}

export default Todo