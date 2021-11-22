import React from "react";

const Contact = () => {
    return (
        <section id="contact">
            <h2>Reach Out</h2>
            <form className="email" action="mailto:jsans24@gmail.com" method="get" enctype="text/plain">
                <div>
                    <label for="name">Name:
                        <input type="text" name="name" id="name" size="50" />
                    </label>
                </div>
                <div>
                    <label for="email">Email:
                        <input type="text" name="email" id="email" size="50"/>
                    </label>
                </div>
                <div>
                    <label>Comments:</label>
                    <br />
                    <textarea name="comments"></textarea>
                </div>
                <div>
                    <input type="submit" name="submit" value="Send" />
                    <input type="reset" name="reset" value="Clear Form" />
                </div>
            </form>
        </section>
    );
};

export default Contact;