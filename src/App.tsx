/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './pages/HomePage';
import TicketsPage from './pages/TicketsPage';
import LineupPage from './pages/LineupPage';
import LocatiePage from './pages/LocatiePage';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/tickets', label: 'Tickets' },
  { to: '/line-up', label: 'Line-up' },
  { to: '/locatie', label: 'Locatie' },
];

function Navigation() {
  const location = useLocation();

  return (
    <nav id="main-navigation" className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#05000a]/70 border-b border-cyan-500/10" aria-label="Hoofdnavigatie">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3 no-underline group" aria-label="Naar homepage">
            <span className="font-orbitron text-sm md:text-base font-bold tracking-[0.2em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 group-hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.5)] transition-all duration-300">
              BOTB
            </span>
            <span className="hidden sm:inline font-rajdhani text-xs text-gray-500 tracking-[0.15em] uppercase border-l border-gray-700 pl-3">
              BJJ Edition
            </span>
          </NavLink>

          {/* Nav Links */}
          <ul className="flex items-center gap-1 sm:gap-2 list-none m-0 p-0">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    id={`nav-${link.label.toLowerCase().replace(/[^a-z]/g, '-')}`}
                    className={`relative px-3 py-2 sm:px-4 font-orbitron text-[10px] sm:text-xs font-medium tracking-[0.15em] uppercase rounded-md transition-all duration-300 no-underline ${
                      isActive
                        ? 'text-cyan-300 bg-cyan-500/10 text-glow-cyan'
                        : 'text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/5'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full"></span>
                    )}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <div className="relative min-h-screen flex flex-col overflow-hidden bg-[#05000a] font-sans selection:bg-pink-500/30">
        
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 mix-blend-screen"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-connection-lines-loop-27419-large.mp4" type="video/mp4" />
        </video>

        {/* Premium Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#05000a] via-transparent to-[#05000a] z-0 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,0,255,0.05)_0%,rgba(0,0,0,0.6)_100%)] z-0 pointer-events-none"></div>

        {/* Animated Synthwave Grid */}
        <div className="absolute bottom-0 left-0 right-0 h-[50vh] synthwave-grid opacity-40 z-0 pointer-events-none"></div>

        {/* Navigation */}
        <Navigation />

        {/* Main Content Area with top padding for fixed nav */}
        <main className="relative z-10 flex-1 flex flex-col pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tickets" element={<TicketsPage />} />
            <Route path="/line-up" element={<LineupPage />} />
            <Route path="/locatie" element={<LocatiePage />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="relative z-10 border-t border-cyan-500/10 bg-[#05000a]/80 backdrop-blur-md py-6 px-4">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-rajdhani text-xs text-gray-600 tracking-wider uppercase">
              © 2026 Best of the Best BJJ Edition. Alle rechten voorbehouden.
            </p>
            <div className="flex items-center gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className="font-rajdhani text-xs text-gray-500 tracking-wider uppercase hover:text-cyan-400 transition-colors duration-300 no-underline"
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </HelmetProvider>
  );
}
