import axios, { AxiosResponse } from "axios"

const baseUrl: string = "http://127.0.0.1:3000"

export const getTodos = async (): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const todos: AxiosResponse<ApiDataType> = await axios.get(
            baseUrl + "/to_dos"
        )
        console.log(todos)
        return todos
    } catch (error: any) {

        return error.message;
    }
}

export const addTodo = async (
    formData: ITodo
): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const todo: Omit<ITodo, "id"> = {
            name: formData.name,
            description: formData.description,
            status: false,
        }
        const saveTodo: AxiosResponse<ApiDataType> = await axios.post(
            baseUrl + "/to_dos",
            todo
        )
        return saveTodo
    } catch (error: any) {
        return error.message;
    }
}

export const updateTodo = async (
    todo: ITodo
): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const todoUpdate: Pick<ITodo, "status"> = {
            status: true,
        }
        const updatedTodo: AxiosResponse<ApiDataType> = await axios.put(
            `${baseUrl}/to_dos/${todo.id}`,
            todoUpdate
        )
        return updatedTodo
    } catch (error: any) {
        return error.message;
    }
}

export const deleteTodo = async (
    _id: string
): Promise<AxiosResponse<ApiDataType>> => {
    try {
        const deletedTodo: AxiosResponse<ApiDataType> = await axios.delete(
            `${baseUrl}/to_dos/${_id}`
        )
        return deletedTodo
    } catch (error: any) {
        return error.message;
    }
}
