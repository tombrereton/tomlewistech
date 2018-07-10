import React from 'react';
import HighlightText from '../HighlightText/HighlightText';
import { css } from "react-emotion";

const contactContainer = css({
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    alignItems: 'flex-start',
    zIndex: -1,
    backgroundColor: "#EEEEEF",
    color: "#727373"
});

const Contact = () => (
    <div className={contactContainer}>
        <HighlightText backgroundColor="#C5EBF1" text="Contact Me" type="h1" />
        <p>You can reach me via email: <strong>hello@example.com</strong></p>
    </div>
);

export default Contact;
