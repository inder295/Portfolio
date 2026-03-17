import { useState, type ChangeEvent, type FormEvent } from "react";
import { motion } from "framer-motion";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const initialFormData: FormData = {
  name: "",
  email: "",
  message: "",
};

export const ContactUs = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
    setFormData(initialFormData);
  };

  return (
    <section id="contact" className="px-4 sm:px-6 lg:px-8 mt-20 mb-20">
      <motion.div
        className="max-w-6xl mx-auto rounded-3xl border border-gray-200 bg-white/80 backdrop-blur-sm shadow-xl p-6 sm:p-8 lg:p-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <motion.h1
              className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Let&apos;s Build Something Great
            </motion.h1>
            <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
              Have a project idea, freelance opportunity, or role to discuss?
              Send a message and I will get back to you.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-4">
                <p className="text-xs uppercase tracking-wide text-blue-700 font-semibold">
                  Email
                </p>
                <a
                  href="mailto:inderpreetsingh2017@gmail.com"
                  className="text-sm text-gray-900 hover:text-blue-700 break-all"
                >
                  inderpreetsingh2017@gmail.com
                </a>
              </div>
              <div className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-4">
                <p className="text-xs uppercase tracking-wide text-emerald-700 font-semibold">
                  Location
                </p>
                <p className="text-sm text-gray-900">Delhi, India</p>
              </div>
            </div>
          </div>

          <motion.form
            onSubmit={onSubmit}
            className="w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-800"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={onChange}
                  className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-800"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={onChange}
                  className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-800"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={onChange}
                  className="w-full min-h-32 rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto rounded-xl bg-gray-900 text-white px-6 py-3 text-sm font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Send Message
              </button>

              {isSubmitted && (
                <p className="text-sm text-emerald-700 font-medium">
                  Thanks for your message. I will reach out soon.
                </p>
              )}
            </div>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};


