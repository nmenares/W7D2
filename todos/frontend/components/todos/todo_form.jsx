import React from 'react';
import uniqueId from '../../util/utils';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.createHandler = this.createHandler.bind(this);
  }

  createHandler(event) {
    event.preventDefault();
    const id = uniqueId();
    const title = document.querySelector("input.input").value;
    const body = document.querySelector("textarea.input").value;
    const todo = {id: id, title: title, body: body};
    this.props.receiveTodo(todo);
  }

  render() {
    const {createHandler} = this;
    return(
      <div>
        <form>
          <label>Title:
            <input className='input' placeholder='buy milk' required/>
          </label>

          <label>Body:
            <textarea className='input' cols='20' rows='5' required></textarea>
          </label>

          <button onClick={createHandler} className='create-button'>Create Todo!</button>
        </form>
      </div>
    );
  }
}
export default TodoForm;
