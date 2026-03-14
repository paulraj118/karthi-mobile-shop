import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function FloatingActions() {
  const phoneNumber = '9952597145';
  const whatsappNumber = '9952597145';

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
        animate={{
          scale: [1, 1.1, 1],
          boxShadow: [
            "0 10px 15px -3px rgba(37, 211, 102, 0.3)",
            "0 20px 25px -5px rgba(37, 211, 102, 0.5)",
            "0 10px 15px -3px rgba(37, 211, 102, 0.3)"
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20BA59] transition-colors relative"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
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
