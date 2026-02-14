import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Database,
  Cloud,
  Activity,
  Sparkles,
  Zap,
  TrendingUp,
  Github,
  Linkedin,
  FileText
} from "lucide-react";

// IMPORTS MANQUANTS - AJOUTE CES LIGNES
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Hero = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Données dynamiques pour le graphique
  const data = [
    { mois: "Jan", performance: 30, target: 25 },
    { mois: "Fév", performance: 45, target: 35 },
    { mois: "Mar", performance: 60, target: 50 },
    { mois: "Avr", performance: 75, target: 65 },
    { mois: "Mai", performance: 90, target: 80 },
    { mois: "Juin", performance: 100, target: 95 },
  ];

  // Mots pour l'effet de typographie dynamique
  const roles = [
    "Data Engineer",
    "Développeur Python",
    "Pipeline Builder",
  ];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Suivi de la souris pour effet parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({
        x: (e.clientX - window.innerWidth / 2) * 0.05,
        y: (e.clientY - window.innerHeight / 2) * 0.05
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15
      }
    }
  };

  const floatAnimation = {
    y: [0, -10, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-white overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >

      {/* Éléments d'arrière-plan dynamiques */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Cercles dégradés animés */}
        <motion.div
          animate={{
            x: cursorPosition.x,
            y: cursorPosition.y,
            scale: [1, 1.2, 1],
            rotate: [0, 45, 0]
          }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: -cursorPosition.x * 0.5,
            y: -cursorPosition.y * 0.5,
            scale: [1, 1.3, 1],
            rotate: [0, -30, 0]
          }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-orange-200/30 to-transparent rounded-full blur-3xl"
        />

        {/* Grille de points animés */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, Math.random() * 50 - 25, 0],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 5
              }}
              className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-orange-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
            />
          ))}
        </div>

        {/* Formes géométriques */}
        <svg className="absolute top-20 left-10 w-64 h-64 opacity-5">
          <polygon points="0,0 64,0 32,55" fill="url(#grad1)" />
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#F97316" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Contenu principal */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-20"
        >

          {/* Partie Texte - Design amélioré */}
          <motion.div variants={itemVariants} className="space-y-8">

            {/* Badge d'introduction */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-orange-50 border border-blue-100"
            >
              <Sparkles size={16} className="text-blue-600" />
              <span className="text-sm font-medium text-gray-700">
                Disponible pour missions
              </span>
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            </motion.div>

            {/* Titre principal avec effet de gradient */}
            <div className="relative">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Bonjour,
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-orange-500 to-blue-600 bg-clip-text text-transparent relative">
                  Je suis Francois Louis
                  <motion.span
                    animate={floatAnimation}
                    className="absolute -right-12 -top-6 text-3xl"
                  >
                    👋
                  </motion.span>
                </span>
              </h1>
            </div>

            {/* Rôle dynamique */}
            <div className="h-16">
              <motion.h2
                key={currentRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl font-bold"
              >
                <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                  {roles[currentRole]}
                </span>
              </motion.h2>
            </div>

            {/* Description avec effet de machine à écrire */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Je conçois des <span className="font-semibold text-blue-600">pipelines de données scalables</span> et
              des <span className="font-semibold text-orange-500">architectures data modernes</span>.
              Spécialiste Kafka, Databricks & Cloud, je transforme vos données brutes en insights actionnables.
            </p>

            {/* Métriques de performance */}
            <div className="grid grid-cols-3 gap-4 py-4">
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                  +6
                </div>
                <div className="text-xs text-gray-600">Projets livrés</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                  40%
                </div>
                <div className="text-xs text-gray-600">Optimisation</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-xl">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                  24/7
                </div>
                <div className="text-xs text-gray-600">Disponible</div>
              </div>
            </div>

            {/* Boutons d'action */}
            <div className="flex flex-wrap gap-4 pt-4">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-orange-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explorer mes projets
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  animate={{
                    x: isHovering ? ["0%", "200%"] : "0%"
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                />
              </motion.a>

              <motion.a
                href="#upload"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-blue-500 hover:text-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Télécharger CV
              </motion.a>
            </div>

            {/* Réseaux sociaux */}
            <div className="flex items-center gap-6 pt-6">
              <motion.a
                href="https://linkedin.com"
                whileHover={{ y: -3 }}
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="https://github.com"
                whileHover={{ y: -3 }}
                className="text-gray-400 hover:text-gray-900 transition-colors"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ y: -3 }}
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <FileText size={24} />
              </motion.a>
            </div>
          </motion.div>

          {/* Partie Graphique - Design complètement revisité */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            {/* Carte principale avec effet 3D */}
            <motion.div
              animate={{
                rotateY: isHovering ? 5 : 0,
                rotateX: isHovering ? 5 : 0
              }}
              transition={{ type: "spring", stiffness: 100 }}
              className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100"
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px"
              }}
            >
              {/* Effet de lueur */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-orange-500/5 rounded-3xl" />

              {/* En-tête de la carte */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-orange-500 flex items-center justify-center">
                    <TrendingUp size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      Performance Data
                    </h3>
                    <p className="text-xs text-gray-500">
                      Productivité mensuelle
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                  <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
                </div>
              </div>

              {/* Graphique amélioré - MAINTENANT LES IMPORTS SONT PRÉSENTS */}
              <div className="w-full h-64 mb-6">
                <ResponsiveContainer>
                  <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#F97316" />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis
                      dataKey="mois"
                      stroke="#94a3b8"
                      tick={{ fill: '#64748b', fontSize: 12 }}
                    />
                    <YAxis
                      stroke="#94a3b8"
                      tick={{ fill: '#64748b', fontSize: 12 }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'white',
                        border: 'none',
                        borderRadius: '12px',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="performance"
                      stroke="url(#colorGradient)"
                      strokeWidth={3}
                      dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
                      activeDot={{ r: 6, fill: '#F97316' }}
                    />
                    <Line
                      type="monotone"
                      dataKey="target"
                      stroke="#94a3b8"
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Légende */}
              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full" />
                    <span>Performance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 border-2 border-gray-400 border-dashed rounded-full" />
                    <span>Objectif</span>
                  </div>
                </div>
                <div className="font-semibold text-blue-600">
                  +40% vs N-1
                </div>
              </div>

              {/* Badge de progression */}
              <motion.div
                animate={floatAnimation}
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-orange-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-xl"
              >
                95%
              </motion.div>
            </motion.div>

            {/* Cartes de technologies flottantes */}
            <motion.div
              animate={floatAnimation}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100"
            >
              <div className="flex items-center gap-3">
                <Database size={20} className="text-blue-600" />
                <span className="text-sm font-medium">Databricks</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ ...floatAnimation, y: [0, -15, 0] }}
              transition={{ delay: 0.5 }}
              className="absolute top-1/2 -right-8 bg-white rounded-xl shadow-lg p-4 border border-gray-100"
            >
              <div className="flex items-center gap-3">
                <Zap size={20} className="text-orange-500" />
                <span className="text-sm font-medium">Kafka</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;