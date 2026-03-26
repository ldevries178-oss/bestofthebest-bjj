import React from 'react';
import PageLayout from '../components/PageLayout';
import { useLang } from '../LangContext';

export default function Contact() {
  const { t } = useLang();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    const subject = `General Contact Inquiry from ${data.name}`;
    const body = `Name: ${data.name}%0D%0AMessage: ${data.message}`;
    window.location.href = `mailto:info@bestofthebestbjj.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <PageLayout title={t('navContact') || "Contact Us"}>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
        <p className="text-center italic opacity-60 mb-8 font-orbitron text-xs">Reach out for any questions or inquiries.</p>
        
        <div className="space-y-2">
          <label className="block text-[10px] font-orbitron text-synth-pink uppercase tracking-widest pl-2">Full Name</label>
          <input 
            name="name"
            type="text" 
            required 
            className="w-full bg-[#0a0a0f]/80 border border-synth-blue/30 rounded-lg p-3 text-white focus:border-synth-blue focus:shadow-[0_0_10px_rgba(0,255,255,0.3)] outline-none transition-all"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-[10px] font-orbitron text-synth-pink uppercase tracking-widest pl-2">Email Address</label>
          <input 
            name="email"
            type="email" 
            required 
            className="w-full bg-[#0a0a0f]/80 border border-synth-blue/30 rounded-lg p-3 text-white focus:border-synth-blue focus:shadow-[0_0_10px_rgba(0,255,255,0.3)] outline-none transition-all"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-[10px] font-orbitron text-synth-pink uppercase tracking-widest pl-2">Your Message</label>
          <textarea 
            name="message"
            rows={5}
            required
            className="w-full bg-[#0a0a0f]/80 border border-synth-blue/30 rounded-lg p-3 text-white focus:border-synth-blue focus:shadow-[0_0_10px_rgba(0,255,255,0.3)] outline-none transition-all placeholder:text-white/20"
            placeholder="How can we help you?"
          ></textarea>
        </div>

        <button 
          type="submit"
          className="w-full py-4 mt-8 font-orbitron font-bold text-sm bg-gradient-to-r from-synth-pink to-synth-blue text-white rounded-lg shadow-[0_0_20px_rgba(255,0,255,0.5)] hover:shadow-[0_0_30px_rgba(255,0,255,0.8)] hover:scale-[1.02] transition-all"
        >
          SEND MESSAGE
        </button>
      </form>
    </PageLayout>
  );
}
