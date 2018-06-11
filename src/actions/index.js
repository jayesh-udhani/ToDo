export const addTask = text => ({
    type: 'ADD',
    task: text
  })

  export const deleteTask = id => ({
    type: 'DELETE',
    id
  })

  export const editTask = (text,id) => ({
    type: 'EDIT',
    task: text,
    id
  })

  