export default `
        <section class="page-banner">
            <p class="eyebrow">LET'S TALK</p>
            <h1>Get in Touch</h1>
            <p>Have a question or an idea? I'd love to hear from you.</p>
        </section>

        <section class="contact-section section">
            <div class="contact-image">
                <img src="images/contact.jpg" alt="Let's connect">
            </div>

            <div class="contact-content">
                <p class="eyebrow">START A CONVERSATION</p>
                <h2>Let's connect.</h2>
                <p>
                    Whether you have a question, want to learn more,
                    or just want to say hello, reach out below.
                </p>

                <form id="contactForm">
                    <label for="name">Your Name</label>
                    <input type="text" id="name"
                        placeholder="Enter your name" required>

                    <label for="email">Email Address</label>
                    <input type="email" id="email"
                        placeholder="Enter your email" required>

                    <label for="message">Your Message</label>
                    <textarea id="message" rows="5"
                        placeholder="Write your message..." required></textarea>

                    <button type="submit" class="button">
                        Send Message
                    </button>

                    <p id="formMessage" class="form-message"
                        aria-live="polite"></p>
                </form>
            </div>
        </section>
    `;
