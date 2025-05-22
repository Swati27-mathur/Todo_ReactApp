import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit,faTrash } from '@fortawesome/free-solid-svg-icons';

const Todo = () => {
    const [showModal, getShowModal] = useState(false)
    const [tasks, setTask] = useState([])
    const [formTask, setFormTask] = useState({
        title: " ",
        desc: " ",
        category: " "
    })
    const onHandleChange = (e) => {
        setFormTask({ ...formTask, [e.target.name]: e.target.value })

    }
    const onSubmit = (e) => {
        e.preventDefault();
        setTask([...tasks, formTask])
        getShowModal(false)
    }
    return (
        <div className="bg-blue-50 font-sans min-h-screen">
            <div>
                <div className="text-center pt-10">
                    <h1 className="text-3xl font-semibold text-gray-800">Todo List</h1>
                    <button
                        onClick={() => getShowModal(true)} className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
                    >
                        Create Task
                    </button>
                </div>
            </div>
            {showModal &&
                <form onSubmit={onSubmit}>
                    <div className='fixed bg-blue-50 inset-0 flex justify-center item-center z-40'>
                        <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md border-t-4 border-blue-600">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                                Create New Task
                            </h2>
                            {/* Task Title */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="taskTitle">Title</label>
                                <input onChange={onHandleChange} name='title' type="text" id="taskTitle" placeholder="e.g. Meeting" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
                            </div>
                            {/* Task Description */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="taskDescription">Description</label>
                                <textarea onChange={onHandleChange} name='desc' id="taskDescription" rows={3} placeholder="e.g. Meeting with Jainish at 3PM" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" defaultValue={""} />
                            </div>
                            {/* Category */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="taskCategory">Category</label>
                                <select onChange={onHandleChange} name='category' id="taskCategory" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
                                    <option value=" ">Select category</option>
                                    <option value="Meeting">Meeting</option>
                                    <option value="PCM">PCM</option>
                                    <option value="Drink">Drink</option>
                                    <option value="Gym">Gym</option>
                                </select>
                            </div>
                            {/* Buttons */}
                            <div className="flex justify-end gap-3 mt-6">
                                <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">
                                    Cancel
                                </button>
                                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                                    Save Task
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            }

            {/* Task List */}
            <div className="mt-10 px-10 flex justify-center gap-6 flex-wrap">
                {/* Task 1 */}
                {tasks.map((task,index)=>(
                    <div key={index} className="w-64 bg-white shadow-lg rounded-md p-4 border-t-4 border-blue-500">
                        <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded">{task.title}</span>
                        <p className="mt-4 text-gray-700">{task.desc}</p>
                        <div className="mt-6 flex justify-end gap-3 text-blue-600">
                            <button title="Edit"><FontAwesomeIcon icon={faEdit}/></button>
                            <button title="Delete"><FontAwesomeIcon icon={faTrash}/><i className="fas fa-trash-alt" /></button>
                        </div>
                    </div>
                ))}
                
            </div>




        </div>

    )
}

export default Todo