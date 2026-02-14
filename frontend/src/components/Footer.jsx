import { motion } from "framer-motion";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const currentYear = new Date().getFullYear();

  // Liens de navigation
  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "Projets", href: "/projects" },
    { name: "Expérience", href: "/experience" },
    { name: "Formation", href: "/education" },
    { name: "Upload", href: "/upload" }
  ];

  // Liens sociaux
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/francois-louis-marie-ntonga",
      icon: "🔗",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      name: "GitHub",
      href: "https://github.com",
      icon: "🐙",
      gradient: "from-gray-700 to-gray-900"
    },
    {
      name: "Twitter",
      href: "https://twitter.com",
      icon: "🐦",
      gradient: "from-sky-400 to-sky-500"
    },
    {
      name: "Medium",
      href: "https://medium.com",
      icon: "📝",
      gradient: "from-gray-800 to-gray-900"
    }
  ];

  // Technologies favorites
  const techStack = [
    "Python", "Databricks", "Spark", "SQL", "Power BI", "Streamlit", "Airflow"
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const floatAnimation = {
    y: [0, -5, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <footer className="relative bg-white border-t border-gray-100 overflow-hidden">

      {/* Éléments décoratifs animés */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-r from-blue-200/10 to-orange-200/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -60, 0]
        }}
        transition={{ duration: 25, repeat: Infinity }}
        className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-r from-orange-200/10 to-blue-200/10 rounded-full blur-3xl"
      />

      {/* Grille de points décorative */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-1/4 w-1 h-1 bg-blue-400 rounded-full" />
        <div className="absolute top-40 right-1/3 w-1.5 h-1.5 bg-orange-400 rounded-full" />
        <div className="absolute bottom-20 left-1/3 w-1 h-1 bg-blue-400 rounded-full" />
        <div className="absolute bottom-40 right-1/4 w-1.5 h-1.5 bg-orange-400 rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">

        {/* Section principale - 4 colonnes */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16"
        >

          {/* Colonne 1 - Identité */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-2">
              <motion.div
                animate={floatAnimation}
                className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-orange-500 flex items-center justify-center text-white text-xl font-bold shadow-lg"
              >
                FL
              </motion.div>
              <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                François Ntonga
              </span>
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              Data Engineer & Scientist passionné par l'innovation et la transformation data.
              Basé à Paris, disponible pour de nouvelles opportunités.
            </p>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Disponible pour mission
            </div>
          </motion.div>

          {/* Colonne 2 - Navigation */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 text-sm flex items-center gap-2 group transition-colors"
                  >
                    <span className="w-1 h-1 bg-gray-300 rounded-full group-hover:bg-blue-500 transition-colors" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Colonne 3 - Stack technique */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Stack principal
            </h3>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-3 py-1.5 bg-gray-50 text-gray-700 text-xs font-medium rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-orange-50 transition-all duration-300"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            <div className="pt-2">
              <span className="text-xs text-gray-400">
                ⚡ +15 technologies maîtrisées
              </span>
            </div>
          </motion.div>

          {/* Colonne 4 - Newsletter & Contact */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Restons connectés
            </h3>

            <div className="space-y-3">
              {/* Formulaire newsletter */}
              <form onSubmit={handleSubscribe} className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre email"
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  required
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="mt-2 w-full px-4 py-2.5 bg-gradient-to-r from-blue-500 to-orange-500 text-white text-sm font-medium rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  S'abonner
                </motion.button>
              </form>

              {/* Message de confirmation */}
              {isSubscribed && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="p-2 bg-green-50 text-green-700 text-xs rounded-lg text-center"
                >
                  ✓ Merci pour votre abonnement !
                </motion.div>
              )}

              {/* Contact direct */}
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-400">✉️</span>
                <a
                  href="mailto:contact@francois-ntonga.fr"
                  className="text-gray-600 hover:text-blue-600 text-sm transition-colors"
                >
                  francoislouismarie.contact@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Séparateur décoratif */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-8"
        />

        {/* Section inférieure - Social & Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >

          {/* Réseaux sociaux */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${social.gradient} rounded-full blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
                <div className="relative w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-lg border border-gray-200 group-hover:border-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-orange-500 group-hover:text-white transition-all duration-300">
                  {social.icon}
                </div>
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-500 text-center md:text-right">
            <p>© {currentYear} François-Louis-Marie Ntonga. Tous droits réservés.</p>
            <p className="text-xs text-gray-400 mt-1">
              Design & Développement avec
              <span className="inline-block mx-1 animate-pulse">❤️</span>
              et
              <span className="inline-block mx-1">⚡</span>
              Data
            </p>
          </div>

          {/* Bouton retour haut de page */}
          <motion.button
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 md:relative md:bottom-0 md:right-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <span className="text-xl group-hover:-translate-y-1 transition-transform duration-300">
              ↑
            </span>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;