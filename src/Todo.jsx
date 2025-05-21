import React, { useState } from 'react'

const Todo = () => {
    const [showModal , getShowModal] = useState(false)
    return (
        <div className="bg-blue-50 font-sans min-h-screen">
            <div class="bg-blue-50 font-sans min-h-screen">
                <div class="text-center pt-10">
                    <h1 class="text-3xl font-semibold text-gray-800">Todo List</h1>
                    <button
                       onClick={() =>getShowModal(true)} class="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
                    >
                        Create Task
                    </button>
                </div>
            </div>
            {showModal && 
            <div className='fixed bg-blue-50 inset-0 flex justify-center item-center z-40'>
            <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md border-t-4 border-blue-600">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                    Create New Task
                </h2>
                {/* Task Title */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="taskTitle">Title</label>
                    <input type="text" id="taskTitle" placeholder="e.g. Meeting" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" />
                </div>
                {/* Task Description */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="taskDescription">Description</label>
                    <textarea id="taskDescription" rows={3} placeholder="e.g. Meeting with Jainish at 3PM" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" defaultValue={""} />
                </div>
                {/* Category */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="taskCategory">Category</label>
                    <select id="taskCategory" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
                        <option value>Select category</option>
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
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                        Save Task
                    </button>
                </div>
            </div>
            </div>
            }
            
        </div>

    )
}

export default Todo