import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-[#0d0b21] to-[#1a073e] text-white">
      <div className="max-w-3xl mx-auto" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-purple-400 text-center mb-8">Contact Me</h2>

        <form
          className="bg-white/5 backdrop-blur-md p-8 rounded-xl shadow-md space-y-6 border border-white/10"
          action="https://formspree.io/f/xeokwvkr" // optional
          method="POST"
        >
          {/* Name */}
          <div>
            <label className="block text-sm text-purple-300 mb-2">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-3 bg-[#1a073e] text-white rounded-lg border border-purple-600 focus:outline-nonef focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-purple-300 mb-2">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-3 bg-[#1a073e] text-white rounded-lg border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm text-purple-300 mb-2">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full p-3 bg-[#1a073e] text-white rounded-lg border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white font-bold rounded-lg shadow-lg transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
