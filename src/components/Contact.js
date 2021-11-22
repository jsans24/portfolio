import React from "react";

const Contact = () => {
    return (
        <section>
            <h2>Give Feedback to Our Website.</h2>\
            <form action="mailto:info@w3docs.com" method="get" enctype="text/plain">
                <div>
                    <label for="name">Name:
                        <input type="text" name="name" id="name" />
                    </label>
                </div>
                <div>
                    <label for="email">Email:
                        <input type="text" name="email" id="email" />
                    </label>
                </div>
                <div>
                    <label>Comments:</label>
                    <br />
                    <textarea name="comments" rows="12" cols="35">Send your comments to us.</textarea>
                </div>
                <div>
                    <input type="submit" name="submit" value="Send" />
                    <input type="reset" name="reset" value="Clear Form" />
                </div>
            </form>
        </section>
    );
};