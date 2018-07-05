import React from 'react'
import IconButton from '../template/iconButton'

export default props => {

    const renderRows = () => {
        // Se a lista no props esta settada/existe
        // eh guardado a lista na constante.
        // Se nao tiver, colocamos um array vazio
        // para garantirmos nao chamarmos um metodo
        const list = props.list || []
        return (
            list.map(todo => (
                <tr key={todo._id}>
                    <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                    <td>
                        <IconButton style='success' icon='check' hide={todo.done}
                            onClick={() => props.handleMarkAsDone(todo)}></ IconButton>

                        <IconButton style='warning' icon='undo' hide={!todo.done}
                            onClick={() => props.handleMarkAsPending(todo)}></IconButton>

                        <IconButton style='danger' icon='trash-o' hide={!todo.done}
                            onClick={() => props.handleRemove(todo)}></IconButton>
                    </td>
                </tr>
                    ))
                )
            }
        
            return (
        <table className='table'>
                        <thead>
                            <tr>
                                <th>Descrição</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderRows()}
                        </tbody>
                    </table>
                    )
}