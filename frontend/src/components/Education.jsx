import { motion } from "framer-motion";
import { useState } from "react";

// Import des images de certification
import agileCert from '../assets/certifications/Agile_Scrum_Master.jpg';
import awsCert from '../assets/certifications/AWS_Application_Migration_Service_(AWS-MGN).jpg';
import googleCert from '../assets/certifications/Certificate_Scaling _With_Google_cloud_Operations.jpg';

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

// NOUVEAU : Section Certifications
const certifications = [
  {
    title: "Agile Scrum Master",
    issuer: "Agile Certification",
    date: "2024",
    description: "Maîtrise de la méthodologie Agile et gestion de projets Scrum",
    gradient: "from-green-400 to-emerald-500",
    icon: "⚡",
    color: "green",
    competencies: ["Scrum", "Agile", "Sprints", "Daily Stand-up", "Retrospectives"],
    image: agileCert,
    link: "#" // Ajoutez le lien de vérification si disponible
  },
  {
    title: "AWS Application Migration Service (AWS-MGN)",
    issuer: "Amazon Web Services",
    date: "2024",
    description: "Migration d'applications vers AWS avec minimisation des temps d'arrêt",
    gradient: "from-orange-400 to-yellow-500",
    icon: "☁️",
    color: "orange",
    competencies: ["AWS Migration", "Cloud Computing", "Lift-and-Shift", "Réplication", "Cutover"],
    image: awsCert,
    link: "#" // Ajoutez le lien de vérification si disponible
  },
  {
    title: "Scaling with Google Cloud Operations",
    issuer: "Google Cloud",
    date: "2024",
    description: "Gestion des opérations cloud à grande échelle sur Google Cloud Platform",
    gradient: "from-blue-400 to-cyan-500",
    icon: "📊",
    color: "blue",
    competencies: ["Google Cloud", "Monitoring", "Scaling", "Operations", "SRE"],
    image: googleCert,
    link: "#" // Ajoutez le lien de vérification si disponible
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

// Timeline pour les certifications
const certTimelineEvents = [
  {
    year: "2024",
    title: "Agile Scrum Master",
    institution: "Agile Certification",
    gradient: "from-green-400 to-emerald-500"
  },
  {
    year: "2024",
    title: "AWS-MGN",
    institution: "Amazon Web Services",
    gradient: "from-orange-400 to-yellow-500"
  },
  {
    year: "2024",
    title: "Google Cloud Operations",
    institution: "Google Cloud",
    gradient: "from-blue-400 to-cyan-500"
  }
];

function Education() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeCertIndex, setActiveCertIndex] = useState(null);
  const [viewMode, setViewMode] = useState("cards"); // "cards" ou "timeline"
  const [selectedCertImage, setSelectedCertImage] = useState(null);

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
        {/* Certifications flottantes */}
        <motion.div
          animate={{ ...floatAnimation, y: [0, -15, 0] }}
          transition={{ delay: 1 }}
          className="absolute top-40 left-1/3 text-6xl opacity-10"
        >
          🏅
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
                  & Certifications
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
              Diplômes académiques et certifications professionnelles pour maîtriser
              les <span className="font-semibold text-blue-600">technologies cloud</span> et les <span className="font-semibold text-orange-600">méthodes Agiles</span>
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
          <>
            {/* Section Diplômes Académiques */}
            <div className="mb-20">
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3"
              >
                <span className="text-4xl">🎓</span>
                <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                  Diplômes
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-blue-200 to-orange-200 ml-4" />
              </motion.h2>

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
            </div>

            {/* NOUVEAU : Section Certifications */}
            <div className="mt-32">
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3"
              >
                <span className="text-4xl">🏅</span>
                <span className="bg-gradient-to-r from-green-600 to-blue-500 bg-clip-text text-transparent">
                  Certifications Professionnelles
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-green-200 to-blue-200 ml-4" />
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    onHoverStart={() => setActiveCertIndex(index)}
                    onHoverEnd={() => setActiveCertIndex(null)}
                    className="relative group"
                  >
                    <motion.div
                      animate={{
                        y: activeCertIndex === index ? -8 : 0,
                        boxShadow: activeCertIndex === index ? '0 20px 40px rgba(0,0,0,0.12)' : '0 10px 30px rgba(0,0,0,0.05)'
                      }}
                      className="relative bg-white rounded-2xl overflow-hidden border border-gray-100"
                    >
                      {/* Image de certification (cliquable pour agrandir) */}
                      <div
                        className="relative h-48 overflow-hidden cursor-pointer"
                        onClick={() => setSelectedCertImage(cert.image)}
                      >
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                        {/* Badge de l'organisme */}
                        <div className="absolute top-4 right-4">
                          <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${cert.gradient} text-white text-xs font-bold shadow-lg`}>
                            {cert.issuer}
                          </span>
                        </div>

                        {/* Icône de zoom */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-white/20 backdrop-blur-md rounded-full p-3">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Contenu */}
                      <div className="p-6">
                        <div className="flex items-start gap-3 mb-3">
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${cert.gradient} flex items-center justify-center text-xl shadow-md`}>
                            {cert.icon}
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-blue-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                              {cert.title}
                            </h3>
                            <p className="text-sm text-gray-600">{cert.issuer}</p>
                          </div>
                        </div>

                        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                          {cert.description}
                        </p>

                        {/* Date */}
                        <div className="inline-block px-3 py-1 bg-gray-100 rounded-lg text-xs font-medium text-gray-700 mb-4">
                          📅 Obtenue en {cert.date}
                        </div>

                        {/* Compétences */}
                        <div className="border-t border-gray-100 pt-4">
                          <div className="flex flex-wrap gap-1.5">
                            {cert.competencies.map((skill, i) => (
                              <span
                                key={i}
                                className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-md border border-gray-200"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Lien de vérification (si disponible) */}
                        {cert.link && cert.link !== "#" && (
                          <div className="mt-4 text-right">
                            <a
                              href={cert.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-blue-600 hover:text-blue-800 flex items-center justify-end gap-1"
                            >
                              <span>Vérifier</span>
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </>
        ) : (
          /* Vue Timeline */
          <div className="space-y-20">
            {/* Timeline Diplômes */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                <span className="text-3xl">🎓</span>
                <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                  Parcours Académique
                </span>
              </h2>
              <div className="relative py-12">
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
                      <motion.div
                        animate={pulseAnimation}
                        className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gradient-to-r ${event.gradient} shadow-lg hidden md:block z-10`}
                      />
                      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow duration-300 md:mt-8">
                        <div className="text-center mb-4">
                          <span className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${event.gradient} bg-opacity-10 text-gray-800 font-bold`}>
                            {event.year}
                          </span>
                        </div>
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
            </div>

            {/* Timeline Certifications */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                <span className="text-3xl">🏅</span>
                <span className="bg-gradient-to-r from-green-600 to-blue-500 bg-clip-text text-transparent">
                  Certifications
                </span>
              </h2>
              <div className="relative py-12">
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-green-200 via-blue-200 to-green-200 transform -translate-y-1/2 hidden md:block" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                  {certTimelineEvents.map((event, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                      className="relative"
                    >
                      <motion.div
                        animate={pulseAnimation}
                        className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gradient-to-r ${event.gradient} shadow-lg hidden md:block z-10`}
                      />
                      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow duration-300 md:mt-8">
                        <div className="text-center mb-4">
                          <span className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${event.gradient} bg-opacity-10 text-gray-800 font-bold`}>
                            {event.year}
                          </span>
                        </div>
                        <div className="text-center">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {event.title}
                          </h3>
                          <p className="text-gray-600 text-sm">
                            {event.institution}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal d'agrandissement des images de certification */}
        <AnimatePresence>
          {selectedCertImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
              onClick={() => setSelectedCertImage(null)}
            >
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="absolute top-6 right-6 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all duration-300"
                onClick={() => setSelectedCertImage(null)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>

              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative max-w-4xl max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedCertImage}
                  alt="Certification"
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Section "En chiffres" mise à jour */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 shadow-sm border border-gray-100"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Mon parcours en <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">chiffres</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-4xl font-black bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mb-2"
              >
                3
              </motion.div>
              <p className="text-gray-600">Diplômes</p>
            </div>
            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-4xl font-black bg-gradient-to-r from-green-600 to-blue-500 bg-clip-text text-transparent mb-2"
              >
                3
              </motion.div>
              <p className="text-gray-600">Certifications</p>
            </div>
            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-4xl font-black bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mb-2"
              >
                6
              </motion.div>
              <p className="text-gray-600">Années d'études</p>
            </div>
            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-4xl font-black bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mb-2"
              >
                3
              </motion.div>
              <p className="text-gray-600">Clouds maîtrisés</p>
            </div>
            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-4xl font-black bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mb-2"
              >
                +6
              </motion.div>
              <p className="text-gray-600">Projets</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Education;