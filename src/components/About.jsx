import React from 'react';

//functional components take props as the argument, as we dont have immediate access to props
//pointing the arrow at parentheses is going to return whatever is inside the parentheses

const About = props => (
    //React will not render elements for these empty tags, it allows us to export multiple childern for a single parent div
    <>
        <h1>About Page</h1>
        <p>Welcome to the About Page</p>
    </>
);
export default About;