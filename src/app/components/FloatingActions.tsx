import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function FloatingActions() {
  const phoneNumber = '8012424220';
  const whatsappNumber = '8012424220';

  const handleCallClick = (e: React.MouseEvent) => {
    e.preventDefault();
    alert(`Calling ${phoneNumber}...`);
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20BA59] transition-colors"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleCallClick}
        className="bg-[#1E3A8A] text-white p-4 rounded-full shadow-2xl hover:bg-[#1E40AF] transition-colors"
        aria-label="Call Now"
      >
        <Phone className="w-6 h-6" />
      </motion.button>
    </div>
  );
}
