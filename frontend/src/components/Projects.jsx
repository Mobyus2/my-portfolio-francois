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
  ChevronRight as ChevronRightIcon
} from "lucide-react";

// Import des images
import bankingImage from '../assets/banking_project.png';
import weatherImage from '../assets/weather_project.png';
import databricksImage from '../assets/databricks_project.png';
import churnImage from '../assets/churn_project.png';
import performanceImage from '../assets/performance_project.png';

const projects = [
  // PROJET 1 - Banking End-to-End Data Engineering
  {
    title: "Banking End-to-End Data Engineering",
    type: "Personnel",
    description: "Pipeline de données bancaires temps réel avec CDC, Data Lake, Data Warehouse Cloud et visualisation Power BI pour une architecture Data moderne et scalable.",
    points: [
      "Change Data Capture (CDC) avec Kafka & Debezium pour la capture temps réel des transactions bancaires",
      "Data Lake avec MinIO (S3-compatible) stockant les données brutes au format Parquet",
      "Data Warehouse Cloud sur Snowflake avec architecture RAW/STAGING/ANALYTICS",
      "Transformations dbt avec gestion d'historique SCD Type 2 et modélisation star schema",
      "Orchestration complète avec Airflow et industrialisation CI/CD via GitHub Actions",
      "Dashboard interactif Power BI avec KPIs métier (clients actifs, volumes transactions, soldes moyens)"
    ],
    technologies: ["PostgreSQL", "Kafka", "Debezium", "MinIO", "Snowflake", "dbt", "Airflow", "Power BI", "GitHub Actions", "Docker", "Python", "CDC", "Parquet", "SCD2"],
    gradient: "from-indigo-500 to-cyan-500",
    icon: Database,
    color: "indigo",
    metrics: ["Temps réel", "CDC", "SCD2", "Cloud Native"],
    bgPattern: "radial-gradient(circle at 20% 30%, rgba(99,102,241,0.05) 0%, transparent 50%)",
    link: "https://www.linkedin.com/posts/francois-louis-marie-ntonga-7b982329b_pipeline-data-engineering-end-to-end-ugcPost-7432020719179419649-N-r3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEiPCr0BJYutV6DGpPs-hFdaMf39pxwKllQ",
    category: "data-engineering",
    featured: true,
    image: bankingImage
  },

  // PROJET 2 - Weather Data Pipeline with Airflow
  {
    title: "Weather Data Pipeline - Airflow & dbt",
    type: "Personnel",
    description: "Pipeline Data Engineering temps réel pour l'ingestion et la transformation de données météorologiques avec orchestration Airflow et visualisation Superset.",
    points: [
      "Ingestion temps réel via API Weatherstack avec script Python automatisé",
      "Orchestration complète avec Airflow (DAGs ingestion + transformation)",
      "Transformations SQL avec dbt (modèles, tests, documentation)",
      "Base de données PostgreSQL pour le stockage des données brutes et transformées",
      "Visualisation interactive avec Apache Superset et rafraîchissement automatique",
      "Infrastructure conteneurisée avec Docker Compose (6 services interconnectés)"
    ],
    technologies: ["Airflow", "dbt", "PostgreSQL", "Docker", "Python", "API REST", "Superset", "SQL", "Weatherstack", "ELT", "DataOps"],
    gradient: "from-teal-500 to-emerald-500",
    icon: Wind,
    color: "teal",
    metrics: ["Temps réel", "Orchestré", "6 services", "Auto-refresh"],
    bgPattern: "radial-gradient(circle at 80% 70%, rgba(20,184,166,0.05) 0%, transparent 50%)",
    link: "https://www.linkedin.com/posts/francois-louis-marie-ntonga-7b982329b_pipeline-data-engineering-end-to-end-ugcPost-7430229688469315584-H-Dr?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEiPCr0BJYutV6DGpPs-hFdaMf39pxwKllQ",
    category: "data-engineering",
    featured: true,
    image: weatherImage
  },

  // PROJET 3 - Pipeline Data Engineering – Databricks
  {
    title: "Pipeline Data Engineering – Databricks",
    type: "Personnel",
    description: "Conception et industrialisation d'un pipeline Data Engineering end-en-end de l'ingestion des données sur Amazon S3 jusqu'à la restitution analytique.",
    points: [
      "Architecture Bronze / Silver / Gold, modélisation analytique en schéma en étoile",
      "Traitements distribués avec Spark (Python, SQL)",
      "Orchestration automatisée via Databricks Jobs",
      "Dashboard Databricks et exploration avec Genie IA"
    ],
    technologies: ["Databricks", "Apache Spark", "Python", "SQL", "Amazon S3", "Lakehouse", "DataOps"],
    gradient: "from-blue-400 to-orange-400",
    icon: Settings,
    color: "blue",
    metrics: ["100% Cloud Native", "24/7 Automatisé", "Temps réel"],
    bgPattern: "radial-gradient(circle at 20% 30%, rgba(59,130,246,0.05) 0%, transparent 50%)",
    link: "https://www.linkedin.com/posts/francois-louis-marie-ntonga-7b982329b_projet-data-engineering-ugcPost-7426575551039143936-i750?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEiPCr0BJYutV6DGpPs-hFdaMf39pxwKllQ",
    category: "data-engineering",
    image: databricksImage
  },

  // PROJET 4 - Customer Churn Analytics Dashboard
  {
    title: "Customer Churn Analytics Dashboard",
    type: "Personnel",
    description: "Application data visant à analyser et anticiper le churn client dans le secteur bancaire.",
    points: [
      "Analyse exploratoire, feature engineering et modélisation prédictive",
      "Dashboard interactif avec Streamlit (KPI, segmentation, insights)",
      "Prédictions en temps réel et par lot",
      "Recommandations business et projections ROI"
    ],
    technologies: ["Random Forest", "Streamlit", "Python", "Scikit-learn", "Power BI"],
    gradient: "from-orange-400 to-blue-400",
    icon: BarChart3,
    color: "orange",
    metrics: ["ROI +35%", "Précision 89%", "Temps réel"],
    bgPattern: "radial-gradient(circle at 80% 70%, rgba(249,115,22,0.05) 0%, transparent 50%)",
    link: "https://github.com/francoisntonga/customer-churn-analytics",
    category: "data-science",
    image: churnImage
  },

  // PROJET 5 - Dashboard de Pilotage Performance Commerciale
  {
    title: "Dashboard de Pilotage Performance Commerciale",
    type: "Personnel",
    description: "Solution complète d'analyse et d'optimisation des ventes avec Power BI pour une vision 360° de la performance commerciale.",
    points: [
      "Ingestion et préparation de données de ventes (CSV) via Power Query",
      "Nettoyage et transformation avancée des données",
      "Création de KPIs stratégiques : CA total, panier moyen, taux d'annulation (25%)",
      "Data modeling et création de mesures DAX complexes",
      "Analyse des tendances mensuelles et trimestrielles",
      "Identification d'opportunités d'optimisation des commandes annulées"
    ],
    technologies: ["Power BI", "Power Query", "DAX", "Data Modeling", "CSV", "Business Intelligence"],
    gradient: "from-blue-400 to-orange-400",
    icon: TrendingUp,
    color: "blue",
    metrics: ["Taux annulation 25%", "CA analysé", "Optimisation ventes"],
    bgPattern: "radial-gradient(circle at 60% 40%, rgba(59,130,246,0.05) 0%, transparent 50%)",
    link: "https://github.com/francoisntonga/performance-commerciale-dashboard",
    category: "data-viz",
    image: performanceImage
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
              Une sélection de projets data, de l'ingénierie des pipelines à la visualisation interactive,
              en passant par l'analyse prédictive.
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

          {/* Badges sur l'image */}
          <div className="absolute top-4 right-4 z-20 flex gap-2">
          </div>
        </div>

        <div className="p-6 h-full flex flex-col" onClick={handleClick}>
          {/* En-tête avec icône et catégorie */}
          <div className="flex items-start justify-between mb-4">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.gradient} flex items-center justify-center text-white shadow-md -mt-8 border-4 border-white`}>
              <project.icon size={24} />
            </div>
            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full flex items-center gap-1">
              <CategoryIcon size={12} />
              {project.category.split('-').map(word =>
                word.charAt(0).toUpperCase() + word.slice(1)
              ).join(' ')}
            </span>
          </div>

          {/* Titre */}
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-orange-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Métriques */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.metrics?.map((metric, i) => (
              <span
                key={i}
                className="px-2.5 py-1 bg-gray-50 text-gray-700 text-xs font-medium rounded-md border border-gray-100"
              >
                {metric}
              </span>
            ))}
          </div>

          {/* Points clés */}
          <ul className="space-y-2 mb-4 flex-grow">
            {project.points.slice(0, 3).map((point, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
                <ChevronRight size={14} className={`flex-shrink-0 mt-0.5 text-transparent bg-clip-text bg-gradient-to-r ${project.gradient}`} />
                <span className="line-clamp-2">{point}</span>
              </li>
            ))}
            {project.points.length > 3 && (
              <li className="text-xs text-gray-400 ml-2">
                +{project.points.length - 3} autres points
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