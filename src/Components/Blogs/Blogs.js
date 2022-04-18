import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blog-container'>
            <h2>Blogs</h2>
            <div className="ques-1">
                <h5><span>Question-1:</span> Difference between authorization and authentication.</h5>
                <div className="ans-1">
                    <p>Authentication
                        - Varifies you are who you say you are
                        - Methods <br />
                        a .Login form <br />
                        b. HTTP authentication <br />
                        C . HTTP digest <br />
                        d. X. 509 certificates <br />
                        e. Custom authentication method</p>
                    <p>
                        Authorization

                        - Decides if you are permission to access a resource
                        - Methods: <br />
                        a . Access controls for URLs <br />
                        b. Secure objects and methods <br />
                        c.Access comtrol list(ACLs) <br />
                    </p>
                </div>
            </div>
            <div className="ques-2">
                <h5><span>Question-2:</span> Why are you using firebase? What other options do you have to implement authentication?</h5>
                <div className="ans-2">
                    <p>
                        Firebase manages all the data in the database real-time. Thus, exchanging data from database is easy and fast. So, if you want to create mobile apps like live streaming, chat messaging, etc., you can use Firebase.
                    </p>
                    <p>
                        Other option can use to implement authentication. <br />
                        1. loginradius <br />
                        2. AWS <br />
                        3. Duo Prompt <br />
                        4. loginradius <br />
                        5. JWT
                    </p>
                </div>
            </div>
            <div className="ques-3">
                <h5><span>Question-3:</span> What other services does firebase provide other than authentication?</h5>
                <h6>Firebase provide other services without authentication.
                </h6>
                <br />
                <div className='other-services'>
                    <p>Incridibly built -in Analytics <br/>
                        a. Unlimited reporting <br/>
                        b . Audience segmentation <br/>
                        c. Integration with other services</p> 
                    <p>App development mode easy <br/>
                        a . Cloud messaging <br/>
                        b. Hosting <br/>
                        C. Authentication <br/>
                        d. Remote configuration <br/>
                        e. Dynamic links <br/>
                        f. crash reporting <br/>
                        g. Real -time database <br/>
                        h. Storage</p>
                    <p>
                        Growth & User Engagement <br/>
                        a. AdWords <br/>
                        b . App indexing <br/>
                        c. Invites <br/>
                        d. Notification
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Blogs;