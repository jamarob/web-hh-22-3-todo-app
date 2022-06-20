import connectToMongodb from '../../src/api/db/connect-to-mongodb'
import Todo from '../../src/api/model/Todo'

const enclosingHandler = async (request, response) => {
  try {
    await connectToMongodb()

    const { method } = request

    if (method === 'GET') {
      const allTodos = await Todo.find()
      return response.status(200).json(allTodos)
    }

    if (method === 'POST') {
      const todoToCreate = request.body
      const createdTodo = await Todo.create(todoToCreate)
      return response.status(200).json(createdTodo)
    }
  } catch (error) {
    return response.status(400).json(error)
  }

  response.status(405).send()
}

export default enclosingHandler
