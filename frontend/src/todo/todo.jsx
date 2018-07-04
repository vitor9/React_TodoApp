import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import TodoForm from '../todo/todoForm'
import TodoList from '../todo/todoList'

export default class Todo extends Component {
  constructor(props) {
    super(props);
    // A propriedade bind garante que um dado vai ser
    // aquilo que queremos
    this.handleAdd = this.handleAdd.bind(this);
  }
  handleAdd() {
    console.log('Add');
    // This muda o valor de acordo com quem chamou a funcao
    // Na maioria das lingaugens um this esta associado
    // em um lugar que ele foi escrito.
    console.log(this);
    
  }

    render() {
      return (
        <div>
          <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
          <TodoForm handleAdd={this.handleAdd}/>
          <TodoList />
        </div>
      )
    }
}