import React from 'react'

const About = (props) => {
    let modeStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? 'black' : 'white'
    }
    return (
        <div className='container my-3 '>
            <h1>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={modeStyle}>
                            About Our Website | Text-Modifier
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={modeStyle}>
                            Welcome to our versatile text modification tool! Transform your text effortlessly with our user-friendly online platform. Whether you need to convert text from uppercase to lowercase or vice versa, remove those pesky extra spaces, download your text as a .txt file, invert or reverse it, or simply copy and paste with ease, we've got you covered. Unlock a world of text editing possibilities at your fingertips. Explore our powerful text manipulation features and elevate your content to new heights. Try our tool today and streamline your text editing tasks with precision
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={modeStyle}>
                            Our Features
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={modeStyle}>
                            <ol>
                            <li> <strong>Text Case Conversion:</strong> Easily convert text between uppercase and lowercase, or vice versa, with a single click.</li>

                            <li> <strong>Space Removal:</strong> Effortlessly eliminate extra spaces from your text to make it clean and concise.</li>

                            <li> <strong>Download as .txt:</strong> Download your modified text as a .txt file for convenient offline use.</li>

                            <li> <strong>Invert and Reverse Text:</strong> Flip and reverse your text for creative and unique effects.</li>

                            <li> <strong>Copy and Paste:</strong> Seamlessly copy your modified text and paste it wherever you need it.</li>

                            <li> <strong>User-Friendly Interface:</strong> Our platform offers an intuitive and easy-to-use interface, making text modification a breeze.</li>

                            <li> <strong>Versatile Text Editing:</strong> Explore a wide range of text manipulation options to enhance and customize your content.</li>

                            <li> <strong>Save Time:</strong> Speed up your text editing tasks and save valuable time with our efficient tool.</li>

                            <li> <strong>Precise Results:</strong> Get accurate and precise text modifications to meet your specific needs.</li>

                            <li> <strong>Online Convenience:</strong> Access our text modifier tool from anywhere with an internet connection, without the need for downloads or installations.</li>

                            <li> <strong>Enhance Content:</strong> Elevate your content quality by refining your text with our powerful editing features.</li>

                            <li> <strong>Explore Possibilities:</strong> Discover endless possibilities for text customization and creative expression.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About