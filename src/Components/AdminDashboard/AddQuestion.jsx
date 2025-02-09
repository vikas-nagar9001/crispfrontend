import React, { useState, useRef, useMemo  } from 'react';
import { useSelector } from 'react-redux';
import { sendRequest } from '../../Auth/axiosUtil';
import JoditEditor from 'jodit-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddQuestion() {
    const editor = useRef(null);
	const [content, setContent] = useState('');
    const topics = useSelector((state) => state.topics.topics);

    const [formData, setFormData] = useState({
        topicid: '',
        topic_title: '',
        title: '',
        difficulty: '',
        skills: '',
        successrate: '',
        maxscore: '',
        card_description: '',
        question: '',
        functiondescription: '',
        inputformat: '',
        constraints: '',
        outputFormat: '',
        sampleInput: '',
        sampleoutput: '',
        explanation: '',
        example: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            const response = await sendRequest('post', 'add_question', formData);
            toast.success('Question submitted successfully', {
                position: "top-center"
              });
            // Clear form fields after successful submission if needed
            setFormData({
                topicid: '',
                topic_title: '',
                title: '',
                difficulty: '',
                skills: '',
                successrate: '',
                maxscore: '',
                card_description: '',
                question: '',
                functiondescription: '',
                inputformat: '',
                constraints: '',
                outputFormat: '',
                sampleInput: '',
                sampleoutput: '',
                explanation: '',
                example: '',
            });
        } catch (error) {
            console.error('Error adding question:', error);
        toast.error('An error occurred while submitting the Question.', {
                position: "top-center"
              });
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'topicid') {
            const selectedTopic = topics.find(topic => topic._id === e.target.value);
            if (selectedTopic) {
                setFormData({
                    ...formData,
                    topicid: selectedTopic._id,
                    topic_title: selectedTopic.heading,
                });
            }
        } else if (e.target.name === 'example') {
            // If the change is in the example field, set the content of the editor to the example field
            setContent(e.target.value);
            setFormData({
                ...formData,
                example: e.target.value,
            });
        } else {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value,
            });
        }
    };

    return (
        <>
              <ToastContainer />
            <form onSubmit={handleSubmit} className="p-4 md:p-8 bg-white border rounded-md shadow-md w-full max-w-lg mx-auto">
                {/* First Column */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Topic Title Dropdown */}
                    <select
                        name="topicid"
                        value={formData.topicid}
                        onChange={handleChange}
                        className="form-select border rounded-md p-2 focus:outline-none focus:border-indigo-500 col-span-1 md:col-span-2"
                    >
                        <option value="">Select Topic</option>
                        {topics.map(topic => (
                            <option key={topic._id} value={topic._id}>{topic.heading}</option>
                        ))}

                        {/* <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option> */}
                    </select>
                    <input
                        type="text" onChange={handleChange}
                        name="title"
                        placeholder="Title"
                        className="form-input border rounded-md p-2 focus:outline-none focus:border-indigo-500"
                    />
                    {/* Difficulty Dropdown */}
                    <select onChange={handleChange}
                        name="difficulty"
                        className="form-select border rounded-md p-2 focus:outline-none focus:border-indigo-500"
                    >
                        <option >
                            Select Difficulty
                        </option>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                    {/* Skills Dropdown */}
                    <select onChange={handleChange}
                        name="skills"
                        className="form-select border rounded-md p-2 focus:outline-none focus:border-indigo-500"
                    >
                        <option >
                            Select Skills
                        </option>
                        <option value="Basic">Basic</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                    </select>
                    <input
                        type="number" onChange={handleChange}
                        name="successrate"
                        placeholder="Success Rate"
                        className="form-input border rounded-md p-2 focus:outline-none focus:border-indigo-500"
                    />
                </div>
                {/* Second Column */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <input
                        type="number" onChange={handleChange}
                        name="maxscore"
                        placeholder="Max Score"
                        className="form-input border rounded-md p-2 focus:outline-none focus:border-indigo-500"
                    />
                    <input
                        type="text" onChange={handleChange}
                        name="card_description"
                        placeholder="Card Description"
                        className="form-input border rounded-md p-2 focus:outline-none focus:border-indigo-500"
                    />
                    <input
                        type="text" onChange={handleChange}
                        name="question"
                        placeholder="Question"
                        className="form-input border rounded-md p-2 focus:outline-none focus:border-indigo-500 col-span-1 md:col-span-2"
                    />
                    <input
                        type="text" onChange={handleChange}
                        name="functiondescription"
                        placeholder="Function Description"
                        className="form-input border rounded-md p-2 focus:outline-none focus:border-indigo-500 col-span-1 md:col-span-2"
                    />
                    <input
                        type="text" onChange={handleChange}
                        name="inputformat"
                        placeholder="Input Format"
                        className="form-input border rounded-md p-2 focus:outline-none focus:border-indigo-500 col-span-1 md:col-span-2"
                    />
                    <input
                        type="text" onChange={handleChange}
                        name="constraints"
                        placeholder="Constraints"
                        className="form-input border rounded-md p-2 focus:outline-none focus:border-indigo-500 col-span-1 md:col-span-2"
                    />
                    <input
                        type="text" onChange={handleChange}
                        name="outputFormat"
                        placeholder="Output Format"
                        className="form-input border rounded-md p-2 focus:outline-none focus:border-indigo-500 col-span-1 md:col-span-2"
                    />
                    <input
                        type="text" onChange={handleChange}
                        name="sampleInput"
                        placeholder="Sample Input"
                        className="form-input border rounded-md p-2 focus:outline-none focus:border-indigo-500 col-span-1 md:col-span-2"
                    />
                    <input
                        type="text" onChange={handleChange}
                        name="sampleoutput"
                        placeholder="Sample Output"
                        className="form-input border rounded-md p-2 focus:outline-none focus:border-indigo-500 col-span-1 md:col-span-2"
                    />
                    <input
                        type="text" onChange={handleChange}
                        name="explanation"
                        placeholder="Explanation"
                        className="form-input border rounded-md p-2 focus:outline-none focus:border-indigo-500 col-span-1 md:col-span-2"
                    />
                    {/* <input
                        type="text" onChange={handleChange}
                        name="example"
                        placeholder="Example"
                        className="form-input border rounded-md p-2 focus:outline-none focus:border-indigo-500 col-span-1 md:col-span-2"
                    /> */}
                </div>

                
                <JoditEditor
                    className='mt-4'
                    ref={editor}
                    value={content}
                    tabIndex={1}
                    onBlur={newContent => {
                        setContent(newContent);
                        setFormData({
                            ...formData,
                            example: newContent,
                        });
                    }}
                    onChange={newContent => {}}
                />
                {/* Submit Button */}
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded self-center mt-4">
                    Add Question
                </button>
            </form>
        </>
    );
}

export default AddQuestion;