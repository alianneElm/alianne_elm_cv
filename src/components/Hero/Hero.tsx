import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { MapPin, FileText } from 'lucide-react'
import { Link } from 'react-router-dom'
import HeroChat from '../HeroChat'
import styles from './Hero.module.css'

const floatVariants: Variants = {
  animate: {
    y: [0, -18, 0],
    transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' as const },
  },
}

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          variants={floatVariants}
          animate="animate"
          className={`${styles.orbCyan} absolute top-1/4 left-1/4 w-96 h-96 rounded-full`}
        />
        <motion.div
          variants={floatVariants}
          animate="animate"
          className={`${styles.orbPurple} absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full`}
        />
        <div className={styles.gridPattern} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <div className={styles.avatarRing} />
            <div className={`${styles.avatarBorder} relative w-28 h-28 rounded-full overflow-hidden`}>
              <img
                src="/profile.jpg"
                alt="Alianne Elm"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(3rem,10vw,7rem)] font-bold tracking-tight leading-none mb-3 tracking-hero"
        >
          <span className="text-gradient-white">Alianne</span>{' '}
          <span className="text-gradient-cyan">Elm</span>
        </motion.h1>

        {/* Role + location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.38 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10"
        >
          <p className="text-lg md:text-xl text-white/40 tracking-widest uppercase">
            {t('hero.role')}
          </p>
          <span className="hidden sm:block text-white/20">·</span>
          <span className="flex items-center gap-1.5 text-sm text-white/30">
            <MapPin size={13} strokeWidth={1.5} />
            {t('hero.location')}
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-[clamp(1.1rem,3vw,1.5rem)] text-white/65 leading-relaxed max-w-2xl mx-auto mb-8 whitespace-pre-line"
        >
          {t('hero.tagline')}
        </motion.p>

        {/* Buttons row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.58 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-8"
        >
          <Link
            to="/cv"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-[#00f5ff]/20 to-[#a855f7]/20 hover:from-[#00f5ff]/35 hover:to-[#a855f7]/35 transition-all duration-300 border border-[#00f5ff]/40 shadow-[0_0_20px_rgba(0,245,255,0.15)]"
          >
            <FileText size={14} strokeWidth={1.5} />
            {t('cv.button')}
          </Link>
          
        </motion.div>

        {/* Inline AI Chat */}
        <HeroChat />

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-12 bg-gradient-to-b from-[#00f5ff]/40 to-transparent mx-auto"
          />
        </motion.div>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
              href="mailto:alianneelm@yahoo.se"
              className={`${styles.ctaPrimary} inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-[#00f5ff]/20 to-[#a855f7]/20 hover:from-[#00f5ff]/35 hover:to-[#a855f7]/35 transition-all duration-300 border border-[#00f5ff]/40 shadow-[0_0_20px_rgba(0,245,255,0.15)]`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              alianneelm@yahoo.se
            </a>
            <a
              href="tel:+46762547179"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-[#00f5ff]/20 to-[#a855f7]/20 hover:from-[#00f5ff]/35 hover:to-[#a855f7]/35 transition-all duration-300 border border-[#00f5ff]/40 shadow-[0_0_20px_rgba(0,245,255,0.15)]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              +46 76 254 71 79
          </a>
        </div>
      </div>
    </section>
  )
}
