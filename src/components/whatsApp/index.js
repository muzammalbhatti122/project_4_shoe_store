import React from 'react';

const Contact = ({ name, phoneNumber }) => {
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}`;

    return (
        <div className="contact">
            {/* <h2>{name}</h2> */}
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <i class="fa fa-whatsapp" aria-hidden="true"></i>
            </a>
        </div>
    );
};

export default Contact;
