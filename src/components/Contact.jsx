import React from 'react';
import ContactForm from './ContactForm';

function Contact() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className='text-center'>
                <h1 className='text-3xl font-bold text-yellow-500'>Contact <span className='text-blue-800'>Hengrabari (Head Office)</span></h1>
            </div>

            <div className='mt-12 text-center space-y-2'>
                <h1 className='text-2xl font-semibold underline'>Contact Details</h1>
                <p className="text-lg">Guidance Educare</p>
                <p className="text-lg">Best Coaching Near You</p>
                <p className="text-lg">Address: Hengrabari</p>
                <p className="text-lg">Contact: +91 XXXXXXXXX</p>

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Email Us
                </button>

                <p className="text-lg">Website: <a href="http://www.educareguidance.in" className="text-blue-500">www.educareguidance.in</a></p>
            </div>

            <div>
                <ContactForm />
            </div>
        </div>
    );
}

export default Contact;
