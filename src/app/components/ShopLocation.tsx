import { MapPin, Navigation } from 'lucide-react';
import { motion } from 'motion/react';

export function ShopLocation() {
  const address = 'Aruppukottai Rd, Meenampigai Nagar, Virudhunagar, Tamil Nadu 626001';
  const mapsUrl = 'https://maps.app.goo.gl/RmKYTdYUX2CJdcXCA';

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-[#111827] mb-3" style={{ fontSize: '2rem', fontWeight: 700 }}>
            Visit Our Store
          </h2>
          <p className="text-gray-600" style={{ fontSize: '1.125rem' }}>
            Come experience our smartphones in person
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-xl h-96"
          >
            <iframe
              src="https://maps.google.com/maps?q=Meenambigai%20Pangala%20Virudhunagar%20Tamil%20Nadu&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

          {/* Location Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border-2 border-blue-100">
              <div className="flex items-start gap-4">
                <div className="bg-[#1E3A8A] p-3 rounded-xl">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-gray-900 mb-2" style={{ fontSize: '1.25rem', fontWeight: 700 }}>
                    Store Address
                  </h3>
                  <p className="text-gray-600" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                    Karthi Mobiles - Premium Smartphones<br />
                    Meenambigai Pangala,<br />
                    Virudhunagar, Tamil Nadu 626001
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 border-2 border-orange-100">
              <h4 className="text-gray-900 mb-3" style={{ fontSize: '1.125rem', fontWeight: 700 }}>
                Store Hours
              </h4>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Saturday:</span>
                  <span style={{ fontWeight: 600 }}>10:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span style={{ fontWeight: 600 }}>10:00 AM - 8:00 PM</span>
                </div>
              </div>
            </div>

            <motion.a
              whileHover={{ scale: 1.03, boxShadow: '0 20px 25px -5px rgba(30, 58, 138, 0.3)' }}
              whileTap={{ scale: 0.97 }}
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#1E3A8A] hover:bg-[#1E40AF] text-white px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl"
            >
              <Navigation className="w-5 h-5" />
              <span style={{ fontWeight: 600 }}>Get Directions</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
