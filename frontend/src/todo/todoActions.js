// Um Action Creator, cria uma action
// Action obrigatoriamente tem um atributo chamado type
export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})