import { motion } from "framer-motion";
import { useState } from "react";

const education = [
  {
    degree: "Master 1 en Informatique & Science des données",
    institution: "ESTIAM Paris",
    period: "Septembre 2025 - En Cours",
    description: "Formation approfondie en science des données et intelligence artificielle",
    gradient: "from-blue-400 to-orange-400",
    icon: "🎓",
    color: "blue",
    competencies: ["Machine Learning", "Big Data", "Data Science", "Python", "SQL"],
    type: "Master"
  },
  {
    degree: "Master 2 en Intelligence Artificielle et Big Data",
    institution: "Keyce Informatique",
    period: "2023 - 2025",
    description: "Spécialisation en IA et traitement massif de données",
    gradient: "from-orange-400 to-blue-400",
    icon: "🤖",
    color: "orange",
    competencies: ["IA", "Deep Learning", "Big Data", "Cloud Computing", "Data Engineering"],
    type: "Master"
  },
  {
    degree: "Licence professionnelle en administration et sécurité réseau",
    institution: "ISSAM",
    period: "2022 - 2023",
    description: "Formation en administration système et sécurité informatique",
    gradient: "from-blue-400 to-orange-400",
    icon: "🔐",
    color: "blue",
    competencies: ["Réseaux", "Sécurité", "Administration", "Linux", "TCP/IP"],
    type: "Licence"
  }
];

// Données pour la timeline verticale
const timelineEvents = [
  {
    year: "2025 - Présent",
    title: "Master 1",
    institution: "ESTIAM Paris",
    gradient: "from-blue-400 to-orange-400"
  },
  {
    year: "2023 - 2025",
    title: "Master 2",
    institution: "Keyce Informatique",
    gradient: "from-orange-400 to-blue-400"
  },
  {
    year: "2022 - 2023",
    title: "Licence Pro",
    institution: "ISSAM",
    gradient: "from-blue-400 to-orange-400"
  }
];

function Education() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [viewMode, setViewMode] = useState("cards"); // "cards" ou "timeline"

  // Animations
  const floatAnimation = {
    y: [0, -8, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
  };

  const pulseAnimation = {
    scale: [1, 1.02, 1],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">

      {/* Hero Section avec design asymétrique */}
      <div className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/20 to-white">
        {/* Éléments décoratifs flottants */}
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 30, repeat: Infinity }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-200/20 to-orange-200/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360, scale: [1, 1.3, 1] }}
          transition={{ duration: 35, repeat: Infinity }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-orange-200/20 to-blue-200/20 rounded-full blur-3xl"
        />

        {/* Diplômes flottants */}
        <motion.div
          animate={floatAnimation}
          className="absolute top-32 right-1/4 text-6xl opacity-10"
        >
          🎓
        </motion.div>
        <motion.div
          animate={{ ...floatAnimation, y: [0, -12, 0] }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-32 left-1/4 text-6xl opacity-10"
        >
          📚
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Badge académique */}
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-orange-100 text-gray-800 text-sm font-medium mb-6"
            >
              ✦ Parcours d'excellence
            </motion.span>

            {/* Titre principal avec effet */}
            <div className="relative inline-block">
              <motion.h1
                animate={pulseAnimation}
                className="text-6xl md:text-7xl font-black mb-4"
              >
                <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Formation
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent relative">
                  & Diplômes
                  <motion.span
                    animate={floatAnimation}
                    className="absolute -right-12 -top-6 text-4xl"
                  >
                    ⚡
                  </motion.span>
                </span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto mt-6 leading-relaxed"
            >
              De la sécurité réseau à l'intelligence artificielle,
              un parcours construit autour de la <span className="font-semibold text-blue-600">passion des données</span>
            </motion.p>

            {/* Toggle de vue */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center gap-4 mt-12"
            >
              <button
                onClick={() => setViewMode("cards")}
                className={`relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  viewMode === "cards"
                    ? "bg-gradient-to-r from-blue-500 to-orange-500 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span className="relative z-10">Vue Cartes</span>
              </button>
              <button
                onClick={() => setViewMode("timeline")}
                className={`relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  viewMode === "timeline"
                    ? "bg-gradient-to-r from-blue-500 to-orange-500 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span className="relative z-10">Vue Timeline</span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {viewMode === "cards" ? (
          /* Vue 1: Design en escalier/zigzag */
          <div className="relative">
            {/* Ligne de connexion décorative */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-orange-400 to-blue-400 hidden lg:block" />

            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                onHoverStart={() => setActiveIndex(index)}
                onHoverEnd={() => setActiveIndex(null)}
                className={`relative mb-16 last:mb-0 flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } items-center gap-8`}
              >
                {/* Point de timeline */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 hidden lg:block">
                  <motion.div
                    animate={{
                      scale: activeIndex === index ? [1, 1.5, 1] : 1,
                      backgroundColor: activeIndex === index ? '#3b82f6' : '#9ca3af'
                    }}
                    transition={{ duration: 0.5 }}
                    className={`w-full h-full rounded-full bg-gradient-to-r ${edu.gradient} shadow-lg`}
                  />
                </div>

                {/* Contenu carte */}
                <motion.div
                  animate={{
                    y: activeIndex === index ? -8 : 0,
                    boxShadow: activeIndex === index ? '0 20px 40px rgba(0,0,0,0.08)' : '0 4px 20px rgba(0,0,0,0.03)'
                  }}
                  className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}
                >
                  <div className="relative group cursor-pointer">
                    {/* Bordure dégradée */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${edu.gradient} rounded-3xl blur opacity-30 group-hover:opacity-70 transition duration-500`} />

                    <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-50">

                      {/* Badge de type */}
                      <div className="absolute -top-3 -right-3">
                        <span className={`px-4 py-2 rounded-full bg-gradient-to-r ${edu.gradient} text-white text-xs font-bold shadow-lg`}>
                          {edu.type}
                        </span>
                      </div>

                      {/* En-tête avec icône */}
                      <div className="flex items-start gap-4 mb-4">
                        <motion.div
                          animate={floatAnimation}
                          className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${edu.gradient} flex items-center justify-center text-3xl shadow-lg`}
                        >
                          {edu.icon}
                        </motion.div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-orange-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                            {edu.degree}
                          </h3>
                          <p className="text-lg text-gray-700">{edu.institution}</p>
                        </div>
                      </div>

                      {/* Période avec design */}
                      <div className="inline-block px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-700 mb-4">
                        📅 {edu.period}
                      </div>

                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {edu.description}
                      </p>

                      {/* Compétences */}
                      <div className="border-t border-gray-100 pt-4">
                        <p className="text-xs uppercase tracking-wider text-gray-400 mb-3">
                          Compétences clés
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {edu.competencies.map((skill, i) => (
                            <motion.span
                              key={i}
                              whileHover={{ scale: 1.05, y: -2 }}
                              className="px-3 py-1.5 bg-gray-50 text-gray-700 text-xs font-medium rounded-lg border border-gray-200"
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Élément décoratif */}
                      <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-r ${edu.gradient} opacity-5 rounded-full -mb-12 -mr-12`} />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Vue 2: Timeline horizontale moderne */
          <div className="relative py-12">
            {/* Timeline line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-orange-200 to-blue-200 transform -translate-y-1/2 hidden md:block" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Point de timeline */}
                  <motion.div
                    animate={pulseAnimation}
                    className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gradient-to-r ${event.gradient} shadow-lg hidden md:block z-10`}
                  />

                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow duration-300 md:mt-8">
                    {/* Année */}
                    <div className="text-center mb-4">
                      <span className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${event.gradient} bg-opacity-10 text-gray-800 font-bold`}>
                        {event.year}
                      </span>
                    </div>

                    {/* Contenu */}
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {event.title}
                      </h3>
                      <p className="text-gray-600">
                        {event.institution}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Section "En chiffres" */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 shadow-sm border border-gray-100"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Mon parcours en <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">chiffres</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-4xl font-black bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mb-2"
              >
                3
              </motion.div>
              <p className="text-gray-600">Diplômes obtenus</p>
            </div>
            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-4xl font-black bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mb-2"
              >
                4
              </motion.div>
              <p className="text-gray-600">Années d'études sup.</p>
            </div>
            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-4xl font-black bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mb-2"
              >
                3
              </motion.div>
              <p className="text-gray-600">Établissements</p>
            </div>
            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-4xl font-black bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mb-2"
              >
                ∞
              </motion.div>
              <p className="text-gray-600">Projets réalisés</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Education;