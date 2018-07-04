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
                    <td>{todo.description}</td>
                    <td>
                        <IconButton style='danger' icon='trash-o'
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