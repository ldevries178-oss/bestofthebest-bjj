import React from 'react';
import PageLayout from '../components/PageLayout';
import { useLang } from '../LangContext';

export default function TeamAdmissions() {
  const { t } = useLang();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    const subject = `Team Admission Request for ${data.teamName}`;
    const body = `Team Name: ${data.teamName}%0D%0AContact Name: ${data.contactName}%0D%0AEmail: ${data.email}%0D%0AExperience: ${data.experience}`;
    window.location.href = `mailto:info@bestofthebestbjj.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <PageLayout title={t('teamsAdmissions') || "Team Admissions"}>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
        <p className="text-center italic opacity-60 mb-8 font-orbitron text-xs">{t('teams_subtitle')}</p>
        
        <div className="space-y-2">
          <label className="block text-[10px] font-orbitron text-synth-pink uppercase tracking-widest pl-2">{t('teams_teamname')}</label>
          <input 
            name="teamName"
            type="text" 
            required 
            className="w-full bg-[#0a0a0f]/80 border border-synth-blue/30 rounded-lg p-3 text-white focus:border-synth-blue focus:shadow-[0_0_10px_rgba(0,255,255,0.3)] outline-none transition-all placeholder:text-white/20"
            placeholder="e.g. Neon Grapplers Acad."
          />
        </div>

        <div className="space-y-2">
          <label className="block text-[10px] font-orbitron text-synth-pink uppercase tracking-widest pl-2">{t('teams_contact')}</label>
          <input 
            name="contactName"
            type="text" 
            required 
            className="w-full bg-[#0a0a0f]/80 border border-synth-blue/30 rounded-lg p-3 text-white focus:border-synth-blue focus:shadow-[0_0_10px_rgba(0,255,255,0.3)] outline-none transition-all placeholder:text-white/20"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-[10px] font-orbitron text-synth-pink uppercase tracking-widest pl-2">{t('teams_email')}</label>
          <input 
            name="email"
            type="email" 
            required 
            className="w-full bg-[#0a0a0f]/80 border border-synth-blue/30 rounded-lg p-3 text-white focus:border-synth-blue focus:shadow-[0_0_10px_rgba(0,255,255,0.3)] outline-none transition-all placeholder:text-white/20"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-[10px] font-orbitron text-synth-pink uppercase tracking-widest pl-2">{t('teams_experience')}</label>
          <textarea 
            name="experience"
            rows={3}
            className="w-full bg-[#0a0a0f]/80 border border-synth-blue/30 rounded-lg p-3 text-white focus:border-synth-blue focus:shadow-[0_0_10px_rgba(0,255,255,0.3)] outline-none transition-all placeholder:text-white/20"
            placeholder={t('teams_experience_placeholder')}
          ></textarea>
        </div>

        <button 
          type="submit"
          className="w-full py-4 mt-8 font-orbitron font-bold text-sm bg-gradient-to-r from-synth-pink to-synth-blue text-white rounded-lg shadow-[0_0_20px_rgba(255,0,255,0.5)] hover:shadow-[0_0_30px_rgba(255,0,255,0.8)] hover:scale-[1.02] transition-all"
        >
          {t('teams_submit')}
        </button>
      </form>
    </PageLayout>
  );
}
