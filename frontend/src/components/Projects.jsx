import { motion } from "framer-motion";
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
  Code2
} from "lucide-react";

const projects = [
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
    category: "data-engineering"
  },
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
    category: "data-science"
  },
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
    category: "data-viz"
  },
  {
    title: "Tableau de Bord Financier IA",
    type: "Personnel",
    description: "Application interactive de Data Analytics et Machine Learning permettant d'analyser et de prédire les dépenses financières via une interface intelligente enrichie par un assistant IA.",
    points: [
      "Analyse exploratoire dynamique avec KPI interactifs et visualisations avancées (Plotly)",
      "Modélisation prédictive (Random Forest, Ridge) avec évaluation RMSE & R² et paramétrage en temps réel",
      "Intégration d'un assistant IA (LLM via API) pour générer des insights automatisés"
    ],
    technologies: ["Python", "Plotly", "Random Forest", "Ridge", "LLM", "Streamlit", "Scikit-learn"],
    gradient: "from-purple-500 to-pink-500",
    icon: Brain,
    color: "purple",
    metrics: ["RMSE optimisé", "R² > 0.85", "IA intégrée"],
    bgPattern: "radial-gradient(circle at 30% 60%, rgba(147,51,234,0.05) 0%, transparent 50%)",
    category: "data-science"
  },
  {
    title: "Pipeline Data Engineering – Tableau de Bord Épidémiologique",
    type: "Personnel",
    description: "Pipeline de Data Engineering permettant l'ingestion, la normalisation, la fusion et la visualisation de bases hétérogènes (Excel/CSV) pour le suivi épidémiologique multi-sources.",
    points: [
      "Ingestion & Data Cleaning automatisés : upload multi-fichiers, harmonisation des schémas",
      "Data Integration & Transformation : jointure multi-sources sur clés métier",
      "Restitution analytique interactive : KPIs opérationnels, visualisation temporelle"
    ],
    technologies: ["Python", "Pandas", "Streamlit", "Excel", "CSV", "Data Cleaning", "Regex"],
    gradient: "from-green-500 to-teal-500",
    icon: HeartPulse,
    color: "green",
    metrics: ["Multi-sources", "Temps réel", "Export PNG/CSV"],
    bgPattern: "radial-gradient(circle at 70% 30%, rgba(16,185,129,0.05) 0%, transparent 50%)",
    category: "data-engineering"
  },
  {
    title: "Deep Learning – Détection de Tumeur Cérébrale (IRM)",
    type: "Personnel",
    description: "Application d'Intelligence Artificielle basée sur le Deep Learning permettant la classification automatique d'images IRM cérébrales (Healthy vs Tumor) via Transfer Learning.",
    points: [
      "Transfer Learning avec ResNet18 (PyTorch) : fine-tuning et déploiement des poids .pth",
      "Pipeline de traitement d'images médicales : normalisation ImageNet, softmax probabilities",
      "Visualisation & analyse multi-images : graphiques barres, camembert, radar"
    ],
    technologies: ["PyTorch", "ResNet18", "Transfer Learning", "CNN", "Python", "Streamlit"],
    gradient: "from-red-500 to-orange-500",
    icon: Dna,
    color: "red",
    metrics: ["ResNet18", "Seuil configurable", "Export CSV"],
    bgPattern: "radial-gradient(circle at 40% 70%, rgba(239,68,68,0.05) 0%, transparent 50%)",
    category: "deep-learning"
  },
  {
    title: "Classification d'images médicales - CT Kidney",
    type: "Personnel",
    description: "Application web d'intelligence artificielle pour la détection automatique de pathologies rénales à partir de scanners CT.",
    points: [
      "Modèle basé sur ResNet50 : Transfer learning avec réseau pré-entraîné sur ImageNet",
      "Interface interactive avec Streamlit : visualisation des prédictions, scores de confiance",
      "Performances robustes : précision > 90% sur 12 000+ échantillons du dataset CT-KIDNEY"
    ],
    technologies: ["ResNet50", "PyTorch", "Transfer Learning", "Streamlit", "Medical Imaging", "CNN"],
    gradient: "from-blue-500 to-cyan-500",
    icon: Activity,
    color: "cyan",
    metrics: [">90% précision", "4 classes", "12k+ samples"],
    bgPattern: "radial-gradient(circle at 50% 50%, rgba(6,182,212,0.05) 0%, transparent 50%)",
    category: "deep-learning"
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

function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredCard, setHoveredCard] = useState(null);

  // Filtrer les projets
  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter(project => project.category === activeFilter);

  // Catégories pour le filtre
  const categories = [
    { id: "all", name: "Tous", icon: Sparkles, gradient: "from-blue-500 to-orange-500" },
    { id: "data-engineering", name: "Data Engineering", icon: Database, gradient: "from-blue-400 to-cyan-500" },
    { id: "data-science", name: "Data Science", icon: Brain, gradient: "from-orange-400 to-pink-500" },
    { id: "deep-learning", name: "Deep Learning", icon: Network, gradient: "from-purple-500 to-red-500" },
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
              Une sélection de projets data, de l'ingénierie des pipelines à l'IA médicale,
              en passant par la visualisation interactive.
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

      {/* Grille des projets */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`
                group cursor-pointer
                ${project.title.includes("Pipeline Data Engineering – Databricks") ? 'lg:col-span-2 lg:row-span-1' : ''}
                ${project.title.includes("Classification d'images médicales") ? 'lg:col-span-1' : ''}
              `}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <ProjectCard
                project={project}
                index={index}
                isHovered={hoveredCard === index}
                hasLink={!!project.link}
                isNew={[3, 4, 5, 6].includes(index)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

// Composant ProjectCard avec icônes Lucide
const ProjectCard = ({ project, index, isHovered, hasLink = false, isNew = false }) => {
  const handleClick = () => {
    if (hasLink && project.link) {
      window.open(project.link, '_blank');
    }
  };

  // Icônes par catégorie
  const categoryIcons = {
    'data-engineering': Database,
    'data-science': Brain,
    'deep-learning': Network,
    'data-viz': PieChart
  };

  const CategoryIcon = categoryIcons[project.category];

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className="relative h-full"
      onClick={handleClick}
    >
      {/* Carte principale */}
      <div className="relative h-full bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">

        {/* Barre de gradient supérieure */}
        <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${project.gradient}`} />

        {/* Badges */}
        <div className="absolute top-4 right-4 z-10 flex gap-2">
          {hasLink && (
            <span className="px-3 py-1.5 bg-gradient-to-r from-blue-500 to-orange-500 text-white text-xs font-medium rounded-full shadow-lg flex items-center gap-1">
              <Rocket size={12} />
              À la une
            </span>
          )}
            {/*
          {isNew && (
            <span className="px-3 py-1.5 bg-purple-500 text-white text-xs font-medium rounded-full shadow-lg flex items-center gap-1">
              <Sparkles size={12} />
              Nouveau
            </span>
          )} */}
        </div>

        <div className="p-6 h-full flex flex-col">
          {/* En-tête avec icône et catégorie */}
          <div className="flex items-start justify-between mb-4">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.gradient} flex items-center justify-center text-white shadow-md`}>
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