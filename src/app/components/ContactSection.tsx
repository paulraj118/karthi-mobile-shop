import { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, MessageCircle, Mail, Send } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const phoneNumber = '8925163362';
  const whatsappNumber = '9952597145';
  const email = 'contact@karthimobiles.com';

  const handleCallClick = (e: React.MouseEvent) => {
    e.preventDefault();
    alert(`Calling ${phoneNumber}...`);
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Name: ${formData.name}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-[#111827] mb-3" style={{ fontSize: '2rem', fontWeight: 700 }}>
            Get in Touch
          </h2>
          <p className="text-gray-600" style={{ fontSize: '1.125rem' }}>
            Have questions? We're here to help!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-gray-900 mb-6" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                Contact Information
              </h3>
            </div>

            {/* Phone */}
            <motion.a
              whileHover={{ x: 5, scale: 1.02 }}
              href={`tel:${phoneNumber}`}
              onClick={handleCallClick}
              className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all group cursor-pointer"
            >
              <div className="bg-[#1E3A8A] group-hover:bg-[#1E40AF] p-3 rounded-lg transition-colors group-hover:scale-110 transform duration-300">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-gray-600" style={{ fontSize: '0.875rem' }}>Call Us</div>
                <div className="text-gray-900 group-hover:text-[#1E3A8A] transition-colors" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                  +91 89251 63362
                </div>
              </div>
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              whileHover={{ x: 5, scale: 1.02 }}
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all group cursor-pointer"
            >
              <div className="bg-[#25D366] group-hover:bg-[#20BA59] p-3 rounded-lg transition-colors group-hover:scale-110 transform duration-300">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-gray-600" style={{ fontSize: '0.875rem' }}>WhatsApp</div>
                <div className="text-gray-900 group-hover:text-[#25D366] transition-colors" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                  Chat with us
                </div>
              </div>
            </motion.a>

            {/* Email */}
            <motion.a
              whileHover={{ x: 5, scale: 1.02 }}
              href={`mailto:${email}`}
              className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all group cursor-pointer"
            >
              <div className="bg-[#F97316] group-hover:bg-[#EA580C] p-3 rounded-lg transition-colors group-hover:scale-110 transform duration-300">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-gray-600" style={{ fontSize: '0.875rem' }}>Email</div>
                <div className="text-gray-900 group-hover:text-[#F97316] transition-colors" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
                  {email}
                </div>
              </div>
            </motion.a>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] rounded-xl p-6 text-white mt-8">
              <h4 className="mb-4" style={{ fontSize: '1.125rem', fontWeight: 700 }}>Why Choose Us?</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span>✓</span>
                  <span>100% Authentic Products</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>✓</span>
                  <span>Official Warranty</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>✓</span>
                  <span>Free Home Delivery</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>✓</span>
                  <span>Easy EMI Options</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-gray-900 mb-6" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                Send us a Message
              </h3>

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1E3A8A] focus:ring-2 focus:ring-[#1E3A8A]/20 outline-none transition-all"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1E3A8A] focus:ring-2 focus:ring-[#1E3A8A]/20 outline-none transition-all"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1E3A8A] focus:ring-2 focus:ring-[#1E3A8A]/20 outline-none transition-all resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: '0 20px 25px -5px rgba(249, 115, 22, 0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-[#F97316] hover:bg-[#EA580C] text-white px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl"
                >
                  <Send className="w-5 h-5" />
                  <span style={{ fontWeight: 600 }}>Send Message via WhatsApp</span>
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
