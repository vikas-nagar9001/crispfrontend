import React, { useState } from 'react';
import { sendRequest } from '../../Auth/axiosUtil'; // Import sendRequest function from axiosUtils
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await sendRequest('post', '/contact', formData); // Using sendRequest function
            // alert('Form submitted successfully!');
            toast.success('Form submitted successfully', {
                position: "top-center"
            });
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Error submitting form. Please try again later.');
        }
    };

    return (
        <>
            <ToastContainer position="top-right" />
            <section className="bg-[#F7FAFF] " id="contact">
                <div className="mx-auto max-w-7xl px-4 py-28 sm:px-6 lg:px-8 lg:py-32">
                    <div className="mb-4">
                        <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                            <p className="text-base font-semibold uppercase tracking-wide text-blue-600 ">
                                Contact
                            </p>
                            <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900  text-3xl sm:text-5xl">
                                Get in Touch
                            </h2>
                            <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600">

                                "Connect with Us: Your Message Matters to Us."
                            </p>
                        </div>
                    </div>
                    <div className="flex items-stretch justify-center">
                        <div className="grid md:grid-cols-2">
                            <div className="h-full pr-6">
                                <p className="mt-3 mb-12 text-lg text-gray-600 ">


                                    "CodeCrisp: Elevate Your Coding Skills. Expert Guidance, Comprehensive Resources.
                                    Unleash Your Potential in the World of Programming. Join Us for an Exciting Journey!"
                                </p>
                                <ul className="mb-6 md:mb-0">
                                    <li className="flex">
                                        <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-600 text-gray-50">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="h-6 w-6"
                                            >
                                                <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                                <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                                            </svg>
                                        </div>
                                        <div className="ml-4 mb-4">
                                            <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 ">
                                                Our Address
                                            </h3>
                                            <p className="text-gray-600 ">
                                                442, Part I, Scheme No 114, Indore, 
                                            </p>
                                            <p className="text-gray-600 ">
                                            Madhya Pradesh 452010
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex">
                                        <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-600 text-gray-50">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="h-6 w-6"
                                            >
                                                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                                                <path d="M15 7a2 2 0 0 1 2 2" />
                                                <path d="M15 3a6 6 0 0 1 6 6" />
                                            </svg>
                                        </div>
                                        <div className="ml-4 mb-4">
                                            <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 ">
                                                Contact
                                            </h3>
                                            <p className="text-gray-600 ">
                                                Mobile: +91  98068 51570
                                            </p>
                                            <p className="text-gray-600 ">
                                                Mail: codecrisp@gmail.com
                                            </p>
                                        </div>
                                    </li>
                                    <li className="flex">
                                        <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-600 text-gray-50">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="h-6 w-6"
                                            >
                                                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                                                <path d="M12 7v5l3 3" />
                                            </svg>
                                        </div>
                                        <div className="ml-4 mb-4">
                                            <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 ">
                                                Working hours
                                            </h3>
                                            <p className="text-gray-600 ">
                                                Monday - Friday: 09:00 - 05:00
                                            </p>
                                            <p className="text-gray-600 ">
                                                Saturday &amp; Sunday: Closed
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div  className="card rounded-2xl h-fit max-w-6xl p-5 md:p-12 bg-[#E7F1FF] "  id="form ">
                                <h2 className="mb-4 text-2xl font-bold ">
                                    Ready to Get Started?
                                </h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-6">
                                        <div className="mx-0 mb-1 sm:mb-4">
                                            <div className="mx-0 mb-1 sm:mb-4">
                                                <label
                                                    htmlFor="name"
                                                    className="pb-1 text-xs uppercase tracking-wider"
                                                />
                                                <input
                                                    type="text"
                                                    id="name"
                                                    autoComplete="given-name"
                                                    placeholder="Your name"
                                                    className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md  sm:mb-0"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="mx-0 mb-1 sm:mb-4">
                                                <label
                                                    htmlFor="email"
                                                    className="pb-1 text-xs uppercase tracking-wider"
                                                />
                                                <input
                                                    type="email"
                                                    id="email"
                                                    autoComplete="email"
                                                    placeholder="Your email address"
                                                    className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md  sm:mb-0"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="mx-0 mb-1 sm:mb-4">
                                            <label
                                                htmlFor="textarea"
                                                className="pb-1 text-xs uppercase tracking-wider"
                                            />
                                            <textarea
                                                id="textarea"
                                                name="message"
                                                cols={30}
                                                rows={5}
                                                placeholder="Write your message..."
                                                className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md  sm:mb-0"
                                                value={formData.message}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button
                                            type="submit"
                                            className="w-full bg-blue-600 text-white px-6 py-3 font-xl rounded-md sm:mb-0"
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;