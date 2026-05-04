import { motion } from "framer-motion";
import { useState } from "react";

const experiences = [
  {
    title: "Data Engineer",
    company: "Endesa",
    period: "Mars 2026 - Août 2026",
    achievements: [
      "📊 Data Engineering & Pipeline Development, Data Modeling & Visualisations (PowerBI, KPIs) → amélioration du suivi des KPIs et réduction du temps d'analyse pour les équipes métier de 45%",
      "⚙️ Automatisation des pipelines (Airflow, Python, SQL, DBT, Databricks) → réduction des tâches manuelles de 60% et accélération des traitements de 3x",
      "🔍 Data Quality, Monitoring & Operations (GitHub CI/CD, Grafana & Prometheus, Data Ops) → fiabilisation des données à 99.5% et réduction des incidents data de 70%"
    ],
    technologies: ["Airflow", "Python", "SQL", "dbt", "Databricks", "PowerBI", "GitHub Actions", "Grafana", "Prometheus", "DataOps"],
    gradient: "from-blue-600 to-cyan-500",
    icon: "🚀",
    color: "engineer"
  },
  {
    title: "Data Engineer",
    company: "Programme Elargi de Vaccination",
    period: "Mars 2025 - Août 2025",
    achievements: [
      "📡 Conception pipelines data avec Kafka + Databricks → réduction temps collecte de 40%",
      "🔄 Implémentation ETL/ELT avec dbt et Snowflake → amélioration performances requêtes de 30%",
      "⚡ Orchestration workflows via Databricks Jobs → réduction erreurs données manquantes de 25%"
    ],
    technologies: ["Apache Kafka", "Databricks", "Spark", "dbt", "Snowflake", "SQL"],
    gradient: "from-orange-400 to-blue-400",
    icon: "⚡",
    color: "orange"
  },
  {
    title: "Data Analyst",
    company: "CCA-Bank",
    period: "Janvier 2024 - Janvier 2025",
    achievements: [
      "📈 Analyse de données pour détecter des tendances business (+15% performance). ",
      "🤝 Nettoyage & structuration via SQL/Python, réduisant les erreurs de 55%.",
      "📊 Insights via un dashboards Power BI, améliorant l’efficacité opérationnelle de 35%."
    ],
    technologies: ["Python", "Pandas", "SQL", "PowerBI"],
    gradient: "from-blue-400 to-orange-400",
    icon: "📊",
    color: "analyst"
  }
];

// Positions alternées pour un effet plus dynamique
const positions = ["right", "left", "right", "left"];

function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Couleurs personnalisées pour les différents types de postes
  const getColorClasses = (colorType) => {
    switch(colorType) {
      case 'engineer':
        return {
          bg: "from-blue-600 to-cyan-500",
          badge: "bg-blue-100 text-blue-700",
          text: "from-blue-600 to-cyan-500"
        };
      case 'analyst':
        return {
          bg: "from-emerald-500 to-teal-500",
          badge: "bg-emerald-100 text-emerald-700",
          text: "from-emerald-600 to-teal-500"
        };
      case 'orange':
        return {
          bg: "from-orange-400 to-blue-400",
          badge: "bg-orange-100 text-orange-700",
          text: "from-orange-500 to-blue-500"
        };
      default:
        return {
          bg: "from-blue-400 to-orange-400",
          badge: "bg-blue-100 text-blue-700",
          text: "from-blue-600 to-orange-500"
        };
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section avec design asymétrique */}
      <div className="relative overflow-hidden">
        {/* Formes géométriques animées en arrière-plan */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-r from-blue-200/30 to-orange-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-r from-orange-200/30 to-blue-200/30 rounded-full blur-3xl"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Titre avec effet de dégradé animé */}
            <motion.h1
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-orange-500 to-blue-600 bg-[length:200%] bg-clip-text text-transparent inline-block"
            >
              Parcours Professionnel
            </motion.h1>
            <span className="text-7xl ml-2 inline-block animate-bounce">💼</span>

            {/* Sous-titre avec effet de frappe */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-600 max-w-2xl mt-4"
            >
              De l'analyse de données à l'engineering data, un parcours axé sur l'impact business
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Section Expérience avec disposition originale */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Timeline décorative */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-[85%] bg-gradient-to-b from-blue-200 via-orange-200 to-blue-200 rounded-full" />

        {/* Grille créative */}
        <div className="grid grid-cols-1 gap-8 md:gap-12 relative">
          {experiences.map((exp, index) => {
            const isLeft = positions[index] === "left";
            const colorClasses = getColorClasses(exp.color);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="relative"
              >
                {/* Design en zigzag pour desktop */}
                <div className={`flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-start md:items-center gap-6 md:gap-8`}>

                  {/* Période avec design original */}
                  <motion.div
                    animate={hoveredIndex === index ? {
                      scale: 1.1,
                      rotate: isLeft ? 5 : -5
                    } : { scale: 1, rotate: 0 }}
                    className={`relative ${isLeft ? 'md:text-right' : 'md:text-left'} md:w-1/3`}
                  >
                    <div className="relative inline-block">
                      {/* Badge de période stylisé */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${exp.gradient} blur-lg opacity-50 rounded-full`} />
                      <span className="relative px-6 py-3 bg-white rounded-full shadow-lg border border-gray-100 font-bold text-gray-800 inline-flex items-center gap-2">
                        <span className="text-2xl">{exp.icon}</span>
                        <span>{exp.period}</span>
                      </span>
                    </div>

                    {/* Ligne de connexion animée */}
                    <motion.div
                      animate={{
                        width: hoveredIndex === index ? '100%' : '0%',
                        opacity: hoveredIndex === index ? 1 : 0
                      }}
                      className={`hidden md:block absolute top-1/2 ${isLeft ? 'right-0' : 'left-0'} h-0.5 bg-gradient-to-r ${exp.gradient}`}
                      style={{ transform: 'translateY(-50%)' }}
                    />
                  </motion.div>

                  {/* Carte d'expérience avec design unique */}
                  <motion.div
                    animate={hoveredIndex === index ? {
                      scale: 1.02,
                      y: -8,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.08)"
                    } : {
                      scale: 1,
                      y: 0,
                      boxShadow: "0 4px 20px rgba(0,0,0,0.03)"
                    }}
                    className={`relative md:w-2/3 group cursor-pointer`}
                  >
                    {/* Bordure dégradée animée */}
                    <motion.div
                      animate={{
                        opacity: hoveredIndex === index ? 1 : 0.3,
                        scale: hoveredIndex === index ? 1.02 : 1
                      }}
                      className={`absolute -inset-0.5 bg-gradient-to-r ${exp.gradient} rounded-3xl blur-sm opacity-30 group-hover:opacity-70 transition-opacity duration-500`}
                    />

                    <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-50">
                      {/* Icône flottante */}
                      <motion.div
                        animate={{
                          y: [0, -5, 0],
                          rotate: hoveredIndex === index ? 360 : 0
                        }}
                        transition={{
                          y: { duration: 2, repeat: Infinity },
                          rotate: { duration: 0.5 }
                        }}
                        className={`absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-r ${exp.gradient} flex items-center justify-center text-white text-2xl shadow-lg`}
                      >
                        {exp.icon}
                      </motion.div>

                      {/* En-tête de la carte */}
                      <div className="mb-6">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-orange-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                          {exp.title}
                        </h2>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-lg font-medium text-gray-700">{exp.company}</span>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            exp.color === 'engineer' ? 'bg-blue-100 text-blue-700' :
                            exp.color === 'analyst' ? 'bg-emerald-100 text-emerald-700' :
                            'bg-orange-100 text-orange-700'
                          }`}>
                            {exp.title.includes('Engineer') ? 'Data Engineering' :
                             exp.title.includes('Analyst') ? 'Data Analytics' :
                             'Data Science'}
                          </span>
                        </div>
                      </div>

                      {/* Réalisations avec design de timeline interne */}
                      <div className="space-y-4 mb-6">
                        {exp.achievements.map((achievement, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-start gap-3 group/achievement"
                          >
                            {/* Marqueur de réalisation animé */}
                            <div className="relative flex-shrink-0 mt-1">
                              <motion.div
                                animate={{
                                  scale: hoveredIndex === index ? [1, 1.5, 1] : 1,
                                }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${exp.gradient}`}
                              />
                              {i < exp.achievements.length - 1 && (
                                <div className="absolute top-3 left-1.25 w-0.5 h-12 bg-gradient-to-b from-gray-200 to-transparent" />
                              )}
                            </div>

                            {/* Texte avec effet de highlight au hover */}
                            <p className="text-gray-700 group-hover/achievement:text-gray-900 transition-colors leading-relaxed">
                              {achievement}
                            </p>
                          </motion.div>
                        ))}
                      </div>

                      {/* Technologies en nuage de mots */}
                      <div className="relative pt-4 border-t border-gray-100">
                        <p className="text-xs uppercase tracking-wider text-gray-400 mb-3 flex items-center gap-2">
                          <span>🛠️</span> Stack technique
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, i) => (
                            <motion.span
                              key={i}
                              whileHover={{
                                scale: 1.1,
                                y: -2,
                                backgroundColor: exp.color === 'engineer' ? '#e6f0ff' :
                                               exp.color === 'analyst' ? '#e6fffa' : '#fff0e6'
                              }}
                              className="px-4 py-2 text-sm font-medium rounded-full bg-gray-50 text-gray-700 border border-gray-200 hover:border-transparent hover:shadow-md transition-all duration-300 cursor-default"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Effet de profondeur */}
                      <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-r ${exp.gradient} opacity-5 rounded-full -mb-8 -mr-8`} />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Élément décoratif de fin */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative mt-20 text-center"
        >
          <div className="inline-flex items-center gap-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-transparent" />
            <span className="text-gray-400 font-medium">📅 Toujours en apprentissage</span>
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-orange-400" />
          </div>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-4 text-4xl"
          >
            ⬇️
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Experience;