import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, EMAIL_JS_THANK_YOU_TEMPLATE_ID, EMAIL_JS_PUBLIC_KEY } from "../constants";
import Footer from "./Footer";

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        emailjs.init(EMAIL_JS_PUBLIC_KEY);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const sendThankYouEmail = async (name, email) => {
        console.log('Attempting to send thank you email to:', email);
        try {
            const result = await emailjs.send(
                EMAIL_JS_SERVICE_ID,
                EMAIL_JS_THANK_YOU_TEMPLATE_ID,
                {
                    to_name: name,
                    to_email: email,
                }
            );
            console.log('Thank you email sent successfully:', result.text);
            return result;
        } catch (error) {
            console.error('Error sending thank you email:', error);
            throw error;
        }
    };

    const sendNotificationEmail = async (name, email, message) => {
        try {
            const result = await emailjs.send(
                EMAIL_JS_SERVICE_ID,
                EMAIL_JS_TEMPLATE_ID,
                {
                    from_name: name,
                    reply_to: email,
                    message: message,
                }
            );
            console.log('Notification email sent successfully:', result.text);
            return result;
        } catch (error) {
            console.error('Error sending notification email:', error);
            throw error;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const { name, email, message } = form;

        if (!name.trim() || !email.trim() || !message.trim()) {
            setLoading(false);
            toast.error("Please fill all the fields.", {
                position: 'bottom-right',
            });
            return;
        }

        try {
            await Promise.all([
                sendThankYouEmail(name, email),
                sendNotificationEmail(name, email, message)
            ]);

            setLoading(false);
            toast.success("Message sent successfully!", {
                position: 'bottom-right',
            });
            setForm({ name: "", email: "", message: "" });
        } catch (error) {
            setLoading(false);
            console.error('Error in handleSubmit:', error);
            toast.error("Uh, oh! Something went wrong. Please try again later.", {
                position: 'bottom-right',
            });
        }
    };

    return (
        <div className='relative z-0 bg-black min-h-screen flex flex-col'>   
            <div className='text-white contact overflow-x-hidden pt-24 px-4 sm:px-6 lg:px-8 flex-grow' id='contact'>
                <div className='max-w-7xl mx-auto h-full'>
                    <div className='flex flex-col lg:flex-row justify-between items-center h-full'>
                        {/* Left side - Text */}
                        <div className='lg:w-1/3 mb-12 lg:mb-0 flex flex-col justify-center items-center lg:items-start text-center lg:text-left'>
                            <div>
                                <p className='font-light text-xl mb-2'>REACH OUT TO ME</p>
                                <h2 className='text-5xl font-extrabold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-pink-500'>Contact.</h2>
                                <p className='mt-6 text-gray-400'>
                                    Feel free to get in touch with me for any inquiries, collaborations, or just to say hello. I'm always excited to connect with new people and explore potential opportunities.
                                </p>
                            </div>
                        </div>

                        {/* Right side - Form */}
                        <div className='lg:w-1/2'>
                            <form
                                ref={formRef}
                                onSubmit={handleSubmit}
                                className='flex flex-col gap-8 bg-gray-900 p-8 rounded-xl shadow-lg'
                            >
                                <label className='flex flex-col'>
                                    <span className='font-medium mb-4 text-gray-300'>Your Name</span>
                                    <input
                                        type='text'
                                        name='name'
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="Enter your name"
                                        className='py-4 px-6 rounded-lg outline-none border border-gray-700 font-medium bg-gray-800 text-white'
                                        required
                                    />
                                </label>
                                <label className='flex flex-col'>
                                    <span className='font-medium mb-4 text-gray-300'>Your Email</span>
                                    <input
                                        type='email'
                                        name='email'
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="Ex: abc@gmail.com"
                                        className='py-4 px-6 rounded-lg outline-none border border-gray-700 font-medium bg-gray-800 text-white'
                                        required
                                    />
                                </label>
                                <label className='flex flex-col'>
                                    <span className='font-medium mb-4 text-gray-300'>Your Message</span>
                                    <textarea
                                        rows={7}
                                        name='message'
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder='Do you have anything to say?'
                                        className='py-4 px-6 rounded-lg outline-none border border-gray-700 font-medium bg-gray-800 text-white'
                                        required
                                    />
                                </label>

                                <button
                                    type='submit'
                                    className='py-3 px-8 rounded-xl outline-none w-full font-bold shadow-md bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 transition duration-300 ease-in-out'
                                >
                                    {loading ? "Sending..." : "Send Message"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
            <Footer/>
        </div>
    );
};

export default Contact;