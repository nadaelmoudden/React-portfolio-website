import './contact.css';

export default function Contact() {
    return (
        <section className='contact-us'>
            <h1 className='title'>
                <span className='icon-envelope'></span>
                    Contact us
            </h1>
            <p className='sub-title'>Reach out to us for further details and stay informed about our latest updates.</p>


            <div className="flex">
                <form>
                    <div className='flex'>
                        <label htmlFor="email">Email Address:</label>
                        <input required type="email" name="email" id="email" />
                    </div>

                    <div className='flex' style={{ marginTop: "24px" }}>
                        <label htmlFor="message">Your message :</label>
                        <textarea required name="message" id="message"></textarea>
                    </div>

                    <button className='submit'>Submit</button>
                </form>
                <div className="animation">animation</div>
            </div>
        </section>
    )
}
