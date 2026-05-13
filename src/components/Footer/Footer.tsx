import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FileText } from 'lucide-react'
import styles from './Footer.module.css'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer id="contact" className="py-32 px-6 relative overflow-hidden">
      <div className={styles.bottomGlow} />

      <div className="max-w-4xl mx-auto relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs tracking-widest uppercase text-[#00f5ff]/60 mb-6">
            {t('footer.contact')}
          </p>

          <h2
            className="text-[clamp(2.5rem,8vw,6rem)] font-bold mb-8 leading-none tracking-hero"
          >
            <span className="text-gradient-white">Alianne</span>{' '}
            <span className="text-gradient-cyan">Elm</span>
          </h2>

          <p className="text-white/40 mb-10 text-lg">{t('footer.role')}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:alianneelm@yahoo.se"
              className={`${styles.ctaPrimary} inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full font-semibold text-base tracking-wide transition-all duration-300 glow-cyan`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              alianneelm@yahoo.se
            </a>
            <a
              href="tel:+46762547179"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full font-semibold text-base tracking-wide transition-all duration-300 border border-[#00f5ff]/20 text-[#00f5ff]/70 hover:text-[#00f5ff] hover:border-[#00f5ff]/50 hover:bg-[#00f5ff]/5"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              +46 76 254 71 79
            </a>
            <Link
              to="/cv"
              className="inline-flex items-center justify-center gap-2 px-8 py-5 rounded-full font-semibold text-base tracking-wide transition-all duration-300 border border-[#00f5ff]/20 text-[#00f5ff]/70 hover:text-[#00f5ff] hover:border-[#00f5ff]/50 hover:bg-[#00f5ff]/5"
            >
              <FileText size={16} strokeWidth={1.5} />
              {t('cv.button')}
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/20"
        >
          <span>© 2026 Alianne Elm</span>
          <a href="#hero" className="hover:text-white/40 transition-colors">↑ {t('footer.backToTop')}</a>
        </motion.div>
      </div>
    </footer>
  )
}
