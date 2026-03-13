import { motion } from 'motion/react';
import { Percent, Gift, Zap, Tag } from 'lucide-react';

const offers = [
  {
    icon: Gift,
    title: 'Festival Special Offer',
    description: 'Up to 40% OFF on selected smartphones',
    color: 'from-purple-500 to-pink-500',
    badge: 'Limited Time',
  },
  {
    icon: Percent,
    title: 'Exchange Bonus',
    description: 'Get up to ₹15,000 extra on exchange',
    color: 'from-blue-500 to-cyan-500',
    badge: 'Best Deal',
  },
  {
    icon: Zap,
    title: 'Flash Sale',
    description: 'Midnight deals every Friday',
    color: 'from-orange-500 to-red-500',
    badge: 'Hot',
  },
  {
    icon: Tag,
    title: 'Bank Offers',
    description: 'Extra 10% off with HDFC, SBI, ICICI cards',
    color: 'from-green-500 to-emerald-500',
    badge: 'Trending',
  },
];

export function OffersSection() {
  return (
    <section id="offers" className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-[#111827] mb-3" style={{ fontSize: '2rem', fontWeight: 700 }}>
            Exclusive Offers & Deals
          </h2>
          <p className="text-gray-600" style={{ fontSize: '1.125rem' }}>
            Save more with our amazing deals and offers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer, index) => {
            const Icon = offer.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all overflow-hidden group cursor-pointer"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${offer.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>

                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`bg-gradient-to-r ${offer.color} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                    {offer.badge}
                  </span>
                </div>

                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${offer.color} mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-gray-900 mb-2" style={{ fontSize: '1.125rem', fontWeight: 700 }}>
                  {offer.title}
                </h3>
                <p className="text-gray-600" style={{ fontSize: '0.875rem', lineHeight: '1.5' }}>
                  {offer.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Large Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] rounded-2xl p-8 md:p-12 text-white shadow-2xl overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <div className="max-w-3xl">
              <div className="inline-block bg-[#F97316] px-4 py-2 rounded-full mb-4">
                <span style={{ fontSize: '0.875rem', fontWeight: 700 }}>🎉 DIWALI SPECIAL OFFER</span>
              </div>
              <h3 className="text-white mb-4" style={{ fontSize: '2rem', fontWeight: 700 }}>
                Mega Festive Sale - Up to 40% OFF
              </h3>
              <p className="text-blue-100 mb-6" style={{ fontSize: '1.125rem' }}>
                Don't miss out on our biggest sale of the year! Premium smartphones at unbeatable prices.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 25px -5px rgba(249, 115, 22, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.getElementById('products');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[#F97316] hover:bg-[#EA580C] text-white px-8 py-3 rounded-lg transition-all shadow-lg hover:shadow-xl"
                style={{ fontWeight: 600 }}
              >
                Shop Now
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
