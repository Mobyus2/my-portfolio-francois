// frontend/src/components/Projects.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Settings,
  BarChart3,
  TrendingUp,
  Brain,
  HeartPulse,
  Dna,
  Database,
  Cloud,
  LineChart,
  PieChart,
  Rocket,
  Cpu,
  Network,
  Activity,
  Shield,
  Sparkles,
  FileText,
  ArrowRight,
  ChevronRight,
  GitBranch,
  Workflow,
  Server,
  Code2,
  GitMerge,
  Container,
  Wind,
  Gauge,
  X,
  ZoomIn,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  TrendingUp as TrendingUpIcon,
  DollarSign,
  Users,
  ShoppingCart,
  BarChart,
  Map,
  Clock,
  MessageCircle,
  ThumbsUp,
  ThumbsDown,
  Star
} from "lucide-react";

// Import des images (à remplacer par vos chemins d'images réels)
import bankingImage from '../assets/banking_project.png';
import weatherImage from '../assets/weather_project.png';
import databricksImage from '../assets/databricks_project.png';
import streamingImage from '../assets/streaming_project.png';
// Les autres images si disponibles
import churnImage from '../assets/churn_project.png';
import performanceImage from '../assets/performance_project.png';

const projects = [
  // PROJET 1 - Banking End-to-End Data Engineering
  {
    title: "Pipeline Bancaire Temps Réel",
    type: "Personnel",
    description: "Un système intelligent qui capture automatiquement chaque transaction bancaire et la transforme en tableaux de bord pour piloter la performance commerciale et détecter les opportunités.",
    businessValue: "Ce pipeline permet à une banque de suivre en temps réel l'activité de ses clients, d'identifier les comptes les plus actifs et d'optimiser ses stratégies commerciales avec une vision claire des dépôts vs retraits.",
    points: [
      "📊 Suivi en temps réel des clients actifs et des volumes de transactions",
      "💰 Visualisation des soldes moyens et de la répartition des opérations",
      "🔄 Conservation de l'historique complet pour analyser l'évolution des comportements",
      "📈 Tableau de bord Power BI avec indicateurs clés pour la prise de décision",
      "⚡ Automatisation complète : les données sont actualisées sans intervention manuelle",
      "🔒 Architecture sécurisée comparable aux standards des grandes banques"
    ],
    technologies: ["PostgreSQL", "Kafka", "Debezium", "MinIO", "Snowflake", "dbt", "Airflow", "Power BI", "GitHub Actions", "Docker"],
    gradient: "from-indigo-500 to-cyan-500",
    icon: Database,
    color: "indigo",
    businessMetrics: ["Temps réel", "CDC", "SCD2", "Cloud Native"],
    bgPattern: "radial-gradient(circle at 20% 30%, rgba(99,102,241,0.05) 0%, transparent 50%)",
    link: "https://www.linkedin.com/posts/francois-louis-marie-ntonga-7b982329b_pipeline-data-engineering-end-to-end-ugcPost-7432020719179419649-N-r3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEiPCr0BJYutV6DGpPs-hFdaMf39pxwKllQ",
    category: "data-engineering",
    featured: true,
    image: bankingImage,
    businessIcon: DollarSign
  },


   // PROJET 2 - Streaming Reviews Pipeline with NLP
  {
    title: "Analyse des Avis Clients en Temps Réel",
    type: "Personnel",
    description: "Un pipeline intelligent qui analyse automatiquement des millions d'avis clients pour comprendre instantanément le ressenti des utilisateurs et détecter les tendances.",
    businessValue: "Ce système permet aux entreprises de surveiller en temps réel la satisfaction client, d'identifier rapidement les problèmes et de prendre des décisions pour améliorer leurs services.",
    points: [
      "🧠 Analyse automatique du sentiment des avis : 71.4% positifs, 26.98% négatifs",
      "📊 137 573 avis traités et enrichis automatiquement",
      "🗺️ Visualisation géographique des avis par ville et par entreprise",
      "⏱️ Détection en temps réel des pics d'insatisfaction pour réagir immédiatement",
      "📈 Tableau de bord Kibana pour suivre les entreprises les plus commentées",
      "💡 Architecture résiliente qui continue de fonctionner même en cas de panne"
    ],
    technologies: ["Apache Kafka", "Apache Spark", "MongoDB Atlas", "Elasticsearch", "Kibana", "Confluent Cloud", "Hugging Face", "DistilBERT", "NLP", "Python"],
    gradient: "from-purple-500 to-pink-500",
    icon: MessageCircle,
    color: "purple",
    businessMetrics: ["137K+ avis", "71.4% positifs", "Temps réel"],
    bgPattern: "radial-gradient(circle at 30% 40%, rgba(168,85,247,0.05) 0%, transparent 50%)",
    link: "https://www.linkedin.com/posts/francois-louis-marie-ntonga-7b982329b_pipepline-data-engineering-end-to-end-ugcPost-7436720862646505472-jtUV?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEiPCr0BJYutV6DGpPs-hFdaMf39pxwKllQ", // À remplacer par votre lien
    category: "data-engineering",
    featured: true,
    image: streamingImage,
    businessIcon: ThumbsUp
  },

  // PROJET 3 - Weather Data Pipeline with Airflow
  {
    title: "Pipeline Météo Automatisé",
    type: "Personnel",
    description: "Un système qui collecte automatiquement les données météo toutes les minutes et les transforme en tableaux de bord dynamiques pour anticiper les conditions climatiques.",
    businessValue: "Ce pipeline permet à une entreprise dépendante de la météo (agriculture, logistique, énergie) d'anticiper les conditions et d'optimiser ses opérations en temps réel.",
    points: [
      "🌦️ Collecte automatique des données météo toutes les minutes sans intervention humaine",
      "📊 Tableaux de bord dynamiques avec rafraîchissement automatique des prévisions",
      "⚡ Architecture industrialisée : l'ensemble du système est conteneurisé et reproductible",
      "🔄 Orchestration complète : ingestion et transformation enchaînées automatiquement",
      "📈 Visualisations interactives pour une lecture intuitive des tendances climatiques",
      "🚀 Prêt pour un déploiement en production avec des standards professionnels"
    ],
    technologies: ["Airflow", "dbt", "PostgreSQL", "Docker", "Python", "API REST", "Superset", "SQL", "Weatherstack"],
    gradient: "from-teal-500 to-emerald-500",
    icon: Wind,
    color: "teal",
    businessMetrics: ["Temps réel", "Orchestré", "6 services", "Auto-refresh"],
    bgPattern: "radial-gradient(circle at 80% 70%, rgba(20,184,166,0.05) 0%, transparent 50%)",
    link: "https://www.linkedin.com/posts/francois-louis-marie-ntonga-7b982329b_pipeline-data-engineering-end-to-end-ugcPost-7430229688469315584-H-Dr?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEiPCr0BJYutV6DGpPs-hFdaMf39pxwKllQ",
    category: "data-engineering",
    featured: true,
    image: weatherImage,
    businessIcon: Cloud
  },

  // PROJET 4 - Pipeline Data Engineering – Databricks (Ventes FMCG)
  {
    title: "Analyse des Ventes FMCG",
    type: "Personnel",
    description: "Une plateforme complète qui consolide les données de ventes de deux entreprises après acquisition pour offrir une vision unifiée de la performance commerciale.",
    businessValue: "Ce pipeline permet aux équipes commerciales et finance de piloter le chiffre d'affaires, d'identifier les produits et clients les plus rentables, et d'analyser les tendances de vente.",
    points: [
      "📈 Suivi du chiffre d'affaires en temps réel : 105.34 B de revenus analysés",
      "🏆 Identification des produits stars et des clients stratégiques (Top clients : FitnessWorld, FastTrack Sports)",
      "📊 Analyse par canal de vente : 78% Retailer vs 20% Direct",
      "📅 Détection des saisonnalités et pics d'activité (Q4 très fort)",
      "🤖 Exploration des données en langage naturel via IA Genie",
      "📱 Dashboard interactif accessible aux équipes métier sans compétences techniques"
    ],
    technologies: ["Databricks", "Apache Spark", "Python", "SQL", "Amazon S3", "Lakehouse", "Genie IA"],
    gradient: "from-blue-400 to-orange-400",
    icon: TrendingUpIcon,
    color: "blue",
    businessMetrics: ["105B+ CA", "+ de produits", "IA intégrée"],
    bgPattern: "radial-gradient(circle at 20% 30%, rgba(59,130,246,0.05) 0%, transparent 50%)",
    link: "https://www.linkedin.com/posts/francois-louis-marie-ntonga-7b982329b_projet-data-engineering-ugcPost-7426575551039143936-i750?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEiPCr0BJYutV6DGpPs-hFdaMf39pxwKllQ",
    category: "data-engineering",
    image: databricksImage,
    businessIcon: ShoppingCart
  },



  // PROJET 5 - Customer Churn Analytics Dashboard
  {
    title: "Prédiction du Risque de Perte Clients",
    type: "Personnel",
    description: "Un outil d'analyse qui identifie les clients susceptibles de quitter la banque et permet d'agir avant qu'ils ne partent.",
    businessValue: "Ce système permet à une banque de réduire le taux d'attrition en identifiant les clients à risque et en prenant des mesures préventives ciblées.",
    points: [
      "🎯 Précision de 89% dans l'identification des clients à risque de départ",
      "📊 Dashboard interactif pour visualiser les segments clients les plus vulnérables",
      "💡 Recommandations business avec un ROI estimé à +35%",
      "⚡ Prédictions en temps réel et par lot selon les besoins",
      "📈 Analyse des facteurs clés qui poussent les clients à partir",
      "🛡️ Stratégies de rétention personnalisées basées sur les données"
    ],
    technologies: ["Random Forest", "Streamlit", "Python", "Scikit-learn", "Power BI"],
    gradient: "from-orange-400 to-blue-400",
    icon: Users,
    color: "orange",
    businessMetrics: ["ROI +35%", "Précision 89%", "Temps réel"],
    bgPattern: "radial-gradient(circle at 80% 70%, rgba(249,115,22,0.05) 0%, transparent 50%)",
    link: "",
    category: "data-science",
    image: churnImage,
    businessIcon: Users
  },

  // PROJET 6 - Dashboard de Pilotage Performance Commerciale
  {
    title: "Pilotage de la Performance Commerciale",
    type: "Personnel",
    description: "Un tableau de bord complet pour analyser les ventes, optimiser les performances et réduire les commandes annulées.",
    businessValue: "Cet outil permet aux équipes commerciales de visualiser leur performance en temps réel et d'identifier les axes d'amélioration pour augmenter le chiffre d'affaires.",
    points: [
      "📊 Analyse du chiffre d'affaires total et du panier moyen des clients",
      "⚠️ Identification des causes d'annulation (taux de 25%) pour les réduire",
      "📅 Suivi des tendances mensuelles et trimestrielles de vente",
      "💡 Création de KPIs stratégiques pour piloter l'activité",
      "🎯 Visualisation claire des opportunités d'optimisation",
      "📱 Interface intuitive accessible à tous les managers"
    ],
    technologies: ["Power BI", "Power Query", "DAX", "Data Modeling", "CSV", "Business Intelligence"],
    gradient: "from-blue-400 to-orange-400",
    icon: BarChart,
    color: "blue",
    businessMetrics: ["Taux annulation 25%", "CA analysé", "Optimisation"],
    bgPattern: "radial-gradient(circle at 60% 40%, rgba(59,130,246,0.05) 0%, transparent 50%)",
    link: "",
    category: "data-viz",
    image: performanceImage,
    businessIcon: TrendingUpIcon
  }
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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15
    }
  }
};

// Composant Modal pour afficher l'image en grand
const ImageModal = ({ isOpen, onClose, image, title, currentIndex, totalImages, onPrevious, onNext }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={onClose}
        >
          {/* Bouton fermer */}
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="absolute top-6 right-6 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all duration-300 group"
            onClick={onClose}
          >
            <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
          </motion.button>

          {/* Navigation - Flèche gauche */}
          {currentIndex > 0 && (
            <motion.button
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              className="absolute left-6 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all duration-300 hover:scale-110"
              onClick={(e) => {
                e.stopPropagation();
                onPrevious();
              }}
            >
              <ChevronLeft size={32} />
            </motion.button>
          )}

          {/* Navigation - Flèche droite */}
          {currentIndex < totalImages - 1 && (
            <motion.button
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 50, opacity: 0 }}
              className="absolute right-6 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all duration-300 hover:scale-110"
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
            >
              <ChevronRightIcon size={32} />
            </motion.button>
          )}

          {/* Image */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={image}
              alt={title}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />

            {/* Titre et compteur */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-md px-6 py-3 rounded-full text-white text-sm font-medium flex items-center gap-4"
            >
              <span className="truncate max-w-md">{title}</span>
              <span className="w-px h-4 bg-white/30" />
              <span>{currentIndex + 1} / {totalImages}</span>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Filtrer les projets
  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter(project => project.category === activeFilter);

  // Créer un tableau d'images pour la navigation dans le modal
  const modalImages = filteredProjects.map(project => ({
    image: project.image,
    title: project.title
  }));

  // Ouvrir le modal avec l'image sélectionnée
  const openModal = (index) => {
    setSelectedImageIndex(index);
    setModalOpen(true);
  };

  // Navigation dans le modal
  const handlePrevious = () => {
    setSelectedImageIndex(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setSelectedImageIndex(prev => Math.min(filteredProjects.length - 1, prev + 1));
  };

  // Catégories pour le filtre
  const categories = [
    { id: "all", name: "Tous", icon: Sparkles, gradient: "from-blue-500 to-orange-500" },
    { id: "data-engineering", name: "Data Engineering", icon: Database, gradient: "from-blue-400 to-cyan-500" },
    { id: "data-science", name: "Data Science", icon: Brain, gradient: "from-orange-400 to-pink-500" },
    { id: "data-viz", name: "Data Viz", icon: PieChart, gradient: "from-green-400 to-teal-500" }
  ];

  // Animation flottante
  const floatAnimation = {
    y: [0, -8, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50/30">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-r from-blue-200/10 to-orange-200/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -60, 0]
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-r from-orange-200/10 to-blue-200/10 rounded-full blur-3xl"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-orange-50 text-sm font-medium text-gray-700 mb-4"
            >
              <Sparkles size={16} className="inline mr-1" />
              Portfolio 2025
            </motion.span>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Mes
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent relative">
                Réalisations
                <motion.span
                  animate={floatAnimation}
                  className="absolute -right-12 -top-6 text-3xl"
                >
                  <Rocket className="inline w-8 h-8 text-orange-500" />
                </motion.span>
              </span>
            </h1>

            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
              Des solutions data qui transforment les données brutes en décisions stratégiques
              pour améliorer la performance et la satisfaction client.
            </p>
          </motion.div>

          {/* Filtres avec icônes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-3 mt-8"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeFilter === category.id
                    ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <category.icon size={16} />
                {category.name}
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Grille des projets - Alignement 2 par 2 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group"
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <ProjectCard
                project={project}
                index={index}
                isHovered={hoveredCard === index}
                hasLink={!!project.link}
                isNew={index < 2}
                onImageClick={() => openModal(index)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal d'image */}
      <ImageModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        image={modalImages[selectedImageIndex]?.image}
        title={modalImages[selectedImageIndex]?.title}
        currentIndex={selectedImageIndex}
        totalImages={modalImages.length}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </div>
  );
}

// Composant ProjectCard avec images et icônes
const ProjectCard = ({ project, index, isHovered, hasLink = false, isNew = false, onImageClick }) => {
  const handleClick = () => {
    if (hasLink && project.link) {
      window.open(project.link, '_blank');
    }
  };

  // Icônes par catégorie
  const categoryIcons = {
    'data-engineering': Database,
    'data-science': Brain,
    'data-viz': PieChart
  };

  const CategoryIcon = categoryIcons[project.category];
  const BusinessIcon = project.businessIcon || TrendingUpIcon;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className="relative h-full"
    >
      {/* Carte principale */}
      <div className="relative h-full bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">

        {/* Barre de gradient supérieure */}
        <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${project.gradient} z-10`} />

        {/* Image du projet - avec bouton de zoom */}
        <div className="relative h-48 overflow-hidden group/image">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Overlay gradient sur l'image */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Bouton zoom */}
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full p-3 text-white transition-all duration-300"
            onClick={(e) => {
              e.stopPropagation();
              onImageClick();
            }}
          >
            <ZoomIn size={24} />
          </motion.button>
        </div>

        <div className="p-6 h-full flex flex-col" onClick={handleClick}>
          {/* En-tête avec icône et catégorie */}
          <div className="flex items-start justify-between mb-4">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.gradient} flex items-center justify-center text-white shadow-md -mt-8 border-4 border-white`}>
              <project.icon size={24} />
            </div>
            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full flex items-center gap-1">
              <CategoryIcon size={12} />
              {project.category === 'data-engineering' ? 'Data Engineering' :
               project.category === 'data-science' ? 'Data Science' : 'Data Viz'}
            </span>
          </div>

          {/* Titre */}
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-orange-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
            {project.title}
          </h3>

          {/* Description courte */}
          <p className="text-sm text-gray-600 mb-3">
            {project.description}
          </p>

          {/* Valeur business - NOUVEAU */}
          <div className="mb-4 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
            <div className="flex items-start gap-2">
              <BusinessIcon size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-gray-700">
                <span className="font-semibold text-blue-700">Impact business :</span> {project.businessValue}
              </p>
            </div>
          </div>

          {/* Métriques business */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.businessMetrics?.map((metric, i) => (
              <span
                key={i}
                className="px-2.5 py-1 bg-gray-50 text-gray-700 text-xs font-medium rounded-md border border-gray-100"
              >
                {metric}
              </span>
            ))}
          </div>

          {/* Points clés (simplifiés) */}
          <ul className="space-y-2 mb-4 flex-grow">
            {project.points.slice(0, 3).map((point, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
                <ChevronRight size={14} className={`flex-shrink-0 mt-0.5 text-transparent bg-clip-text bg-gradient-to-r ${project.gradient}`} />
                <span className="line-clamp-2">{point}</span>
              </li>
            ))}
            {project.points.length > 3 && (
              <li className="text-xs text-gray-400 ml-2">
                +{project.points.length - 3} autres bénéfices
              </li>
            )}
          </ul>

          {/* Technologies */}
          <div className="pt-3 border-t border-gray-100">
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 4).map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-md"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="px-2 py-1 bg-gray-50 text-gray-400 text-xs rounded-md">
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs text-gray-400 flex items-center gap-1">
              {hasLink ? (
                <>
                  <Rocket size={12} />
                  Cliquez pour voir le projet
                </>
              ) : (
                "Projet personnel"
              )}
            </span>
            {hasLink && (
              <motion.div
                animate={{ x: isHovered ? 5 : 0 }}
                className={`text-transparent bg-clip-text bg-gradient-to-r ${project.gradient}`}
              >
                <ArrowRight size={16} />
              </motion.div>
            )}
          </div>
        </div>

        {/* Effet de hover */}
        <motion.div
          animate={{ opacity: isHovered ? 0.05 : 0 }}
          className={`absolute inset-0 bg-gradient-to-r ${project.gradient} pointer-events-none`}
        />
      </div>
    </motion.div>
  );
};

export default Projects;