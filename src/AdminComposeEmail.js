// import '../editor/css/froala_editor.css';
// import '../editor/css/froala_style.css';
// import '/index.css';
// import 'editor/js/froala_editor.min.js';
import { useEffect } from 'react';
import Menu from "./Menu";
export default function AdminComposeEmail() {
    useEffect(() => {
        function appendScript(src) {
            const script = document.createElement('script');
            script.src = src;
            document.body.appendChild(script);
        }

        function appendLink(href) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = href;
            document.head.appendChild(link);
        }

        // Append stylesheets
          // Append external scripts
       
        

        // Your FroalaEditor code
        
        const inlineScript = document.createElement('script');
        inlineScript.type = 'text/javascript';
       
        document.body.appendChild(inlineScript);


    });
    return (<>
        <Menu />
        <main id="main" className="main">
            <div className="pagetitle">
                <h1>Doctor Management</h1>
            </div>{/* End Page Title */}
            <div className="card shadow">
                <div className="card-header text-bg-primary">
                    <h5>Compose Mail - [Ankit Patel]</h5>
                </div>
                <div className="card-body">
                    <form>
                        <div className="mb-3 mt-2">
                            <div className="form-floating">
                                <input type="email" className="form-control" id="recipient" placeholder="name@example.com" defaultValue="ankit3385@gmail.com" readOnly />
                                <label htmlFor="recipient">Recipient Email</label>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="subject" placeholder="Subject" />
                                <label htmlFor="subject">Subject</label>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Your Message</label>
                            <textarea className="form-control" id="message" placeholder="Your message" style={{ "height": "100px" }} />
                        </div>
                        <div className="text-end">
                            <button type="submit" className="btn btn-primary">Send Email</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    </>);
}