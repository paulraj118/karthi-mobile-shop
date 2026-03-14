import { motion, AnimatePresence } from 'motion/react';
import { X, Scan, ShieldCheck, Cpu, Camera, Smartphone, AlertCircle } from 'lucide-react';
import type { Product } from '../data/products';
import { useState, useEffect, useRef } from 'react';

interface ProductScannerProps {
  product: Product;
  onClose: () => void;
  onViewDetails: (product: Product) => void;
}

export function ProductScanner({ product, onClose, onViewDetails }: ProductScannerProps) {
  const [scanStatus, setScanStatus] = useState<'scanning' | 'complete'>('scanning');
  const [progress, setProgress] = useState(0);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let stream: MediaStream | null = null;

    async function setupCamera() {
      try {
        stream = await navigator.mediaDevices.getUserMedia({ 
          video: { facingMode: 'environment' } 
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Camera access error:", err);
        setCameraError("Camera access denied. Using simulated environment.");
      }
    }

    setupCamera();

    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  useEffect(() => {
    if (scanStatus === 'scanning') {
      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer);
            setTimeout(() => setScanStatus('complete'), 500);
            return 100;
          }
          return prev + 2;
        });
      }, 30);
      return () => clearInterval(timer);
    }
  }, [scanStatus]);

  // Safe sensor ID derivation
  const sensorId = product.id.includes('-') ? product.id.split('-')[1] : 'AUTO';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4"
    >
      <div className="relative w-full max-w-lg aspect-[9/16] max-h-[90vh] bg-gray-950 rounded-[3rem] border-[8px] border-gray-900 overflow-hidden shadow-2xl flex flex-col">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-40" />

        {/* Camera View Area */}
        <div className="relative flex-1 bg-black overflow-hidden flex flex-col">
          {/* Real Camera Feed */}
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${scanStatus === 'complete' ? 'opacity-20' : 'opacity-100'}`}
          />

          {/* Camera Error Message */}
          {cameraError && (
             <div className="absolute top-12 left-0 right-0 px-6 z-30">
                <div className="bg-yellow-500/20 backdrop-blur-md border border-yellow-500/50 p-3 rounded-xl flex items-center gap-2 text-yellow-200 text-xs">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  {cameraError}
                </div>
             </div>
          )}

          {/* Simulated Camera Grain/Noise */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-10" />
          
          <AnimatePresence mode="wait">
            {scanStatus === 'scanning' ? (
              <motion.div
                key="scanning-state"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex flex-col items-center justify-center z-20"
              >
                {/* HUD Elements */}
                <div className="absolute inset-0 border-[2px] border-purple-500/30 m-8 rounded-2xl">
                  <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-purple-500 rounded-tl-lg" />
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-purple-500 rounded-tr-lg" />
                  <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-purple-500 rounded-bl-lg" />
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-purple-500 rounded-br-lg" />
                </div>

                {/* Scanning Line */}
                <motion.div
                  animate={{ top: ['10%', '90%', '10%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute left-8 right-8 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent shadow-[0_0_15px_rgba(168,85,247,0.8)] z-10"
                />

                <div className="absolute bottom-12 left-0 right-0 px-8 text-center space-y-4">
                  <div className="flex items-center justify-center gap-2 text-purple-400 font-mono text-sm tracking-widest">
                    <Scan className="w-4 h-4 animate-pulse" />
                    ANALYZING...
                  </div>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-purple-500" 
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                    />
                  </div>
                  <div className="text-white/50 font-mono text-[10px] uppercase tracking-tighter">
                    SENSOR_{sensorId} | BITRATE_42MBPS
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="complete-state"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex-1 flex flex-col p-6 z-20 overflow-y-auto"
              >
                <div className="bg-green-500 text-black py-1.5 px-4 rounded-full self-center flex items-center gap-2 mb-6 font-bold text-xs shadow-lg shadow-green-500/20">
                  <ShieldCheck className="w-4 h-4" />
                  IDENTITY VERIFIED
                </div>

                <div className="flex-1 flex flex-col min-h-0">
                    <div className="relative w-full aspect-[4/3] bg-white/5 backdrop-blur-xl rounded-2xl p-4 mb-4 border border-white/10 shadow-2xl flex-shrink-0">
                      <img src={product.image} alt={product.name} className="w-full h-full object-contain" />
                      <div className="absolute -bottom-2 -right-2 bg-purple-600 p-2 rounded-xl border border-white/20">
                          <Smartphone className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md p-3 rounded-xl border border-white/5">
                          <div className="bg-purple-500/20 p-2 rounded-lg">
                            <Cpu className="w-4 h-4 text-purple-400" />
                          </div>
                          <div>
                            <div className="text-gray-400 text-[9px] uppercase font-bold tracking-wider">Processor</div>
                            <div className="text-white font-semibold text-xs">{product.specs.processor || 'AI Engine'}</div>
                          </div>
                      </div>

                      <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md p-3 rounded-xl border border-white/5">
                          <div className="bg-blue-500/20 p-2 rounded-lg">
                            <Camera className="w-4 h-4 text-blue-400" />
                          </div>
                          <div>
                            <div className="text-gray-400 text-[9px] uppercase font-bold tracking-wider">Optics</div>
                            <div className="text-white font-semibold text-xs">{product.specs.camera} Main</div>
                          </div>
                      </div>
                    </div>

                    <div className="mt-auto pt-2">
                      <button
                          onClick={() => onViewDetails(product)}
                          className="w-full bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-2xl font-bold transition-all shadow-xl flex items-center justify-center gap-2 group border border-blue-400/20 text-sm"
                      >
                          EXPLORE SPECS
                          <X className="w-4 h-4 rotate-45 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="p-6 bg-gray-900 flex justify-between items-center border-t border-gray-800 z-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
              <Camera className="w-5 h-5 text-gray-500" />
            </div>
            <div>
              <div className="text-white font-bold text-sm truncate max-w-[120px]">{product.name}</div>
              <div className="text-purple-500 text-xs font-mono">₹{product.price.toLocaleString()}</div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-12 h-12 rounded-full bg-red-500/10 hover:bg-red-500/20 text-red-500 flex items-center justify-center transition-colors border border-red-500/20"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
