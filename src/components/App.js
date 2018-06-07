import React from 'react';
import TodoList from './Todo';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index'

class App extends React.Component {
    render () {
        return(
        <div>
           <h3>Todo List:</h3>
           <TodoList items={this.props.items} onAddTodo={this.props.onAddTodo}/>
        </div>
    )}
}

function mapDispatchToProps (dispatch){
    return {
        onAddTodo: todo => dispatch(addTodo(todo))
    }
}
function mapStateToProps (state) {
	return {
  	    items: state.items
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);