import React, { Component } from "react"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { add, changeDescription, search, clear } from './todoActions'

class TodoForm extends Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }
    
    componentWillMount() {
        this.props.search()
    }

    keyHandler(e) {
        // Extrai de um objeto um conjunto de atributos
        const { add, search, description, clear } = this.props
        if (e.key === 'Enter') {
            e.shiftKey ? search() : add(description)
        } else if (e.key === 'Escape') {
            clear()
        }
    }
    //add e search sao actions creators, descricao eh um dado da store 
    render() {
        const { add, search, description } = this.props
        return (
            <div role="form" className="todoForm" >
                <Grid cols=' 12 9 10 '>
                    <input id="description" className="form-control"
                        placeholder="Adicione uma tarefa"
                        onKeyUp={this.keyHandler}
                        onChange={this.props.changeDescription}
                        value={this.props.description}></input>
                </Grid>

                <Grid cols=' 12 3 2 '>
                    <IconButton style="primary" icon="plus"
                        onClick={() => add(description)}></IconButton>

                    <IconButton style="info" icon="search"
                        onClick={() => search(description)}></IconButton>

                    <IconButton style="default" icon='close'
                        onClick={this.props.clear}></IconButton>
                </Grid>
            </div>
        )
    }

}

const mapStateToProps = state => ({ description: state.todo.description })
const mapDispatchToProps = dispatch =>
    bindActionCreators({ add, changeDescription, search, clear }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)