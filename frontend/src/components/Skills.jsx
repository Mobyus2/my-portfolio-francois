import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import {
  Brain,
  Database,
  Cloud,
  BarChart3,
  Code2,
  Users,
  Target,
  MessageCircle,
  Lightbulb,
  Timer,
  Shield,
  Sparkles,
  Server,
  Workflow,
  LineChart,
  Cpu,
  ChevronLeft,
  ChevronRight,
  GitBranch,
  Container
} from "lucide-react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [filteredSkills, setFilteredSkills] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const carouselRef = useRef(null);

  // Catégories de compétences
  const categories = [
    { id: "all", name: "Toutes", icon: Sparkles, gradient: "from-blue-500 to-orange-500" },
    { id: "languages", name: "Langages", icon: Code2, gradient: "from-blue-400 to-cyan-500" },
    { id: "databases", name: "Bases de données", icon: Database, gradient: "from-green-400 to-emerald-500" },
    { id: "bigdata", name: "Big Data", icon: Server, gradient: "from-orange-400 to-red-500" },
    { id: "cloud", name: "Cloud & DevOps", icon: Cloud, gradient: "from-purple-400 to-pink-500" },
    { id: "viz", name: "Data Viz", icon: BarChart3, gradient: "from-indigo-400 to-blue-500" },
    { id: "ml", name: "Machine Learning", icon: Brain, gradient: "from-pink-400 to-rose-500" }
  ];

  // URLs des logos pour chaque technologie
  const techLogos = {
    // Langages
    Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    SQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    Flask: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
    React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    Scala: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original.svg",

    // Bases de données
    PostgreSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    Firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    Snowflake: "https://www.vectorlogo.zone/logos/snowflake/snowflake-icon.svg",
    MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",

    // Data Viz
    PowerBI: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/New_Power_BI_Logo.svg/960px-New_Power_BI_Logo.svg.png",
    Streamlit: "https://streamlit.io/images/brand/streamlit-mark-color.svg",
    Tableau: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg",
    Superset: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Apache_Superset_logo.svg/1200px-Apache_Superset_logo.svg.png",

    // DevOps & Cloud
    Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    Airflow: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apacheairflow/apacheairflow-original.svg",
    Kubernetes: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    AWS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    Azure: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    GCP: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
    Terraform: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
    Jenkins: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
    GitHubActions: "https://github.githubassets.com/images/modules/site/icons/actions.svg",

    // Machine Learning
    PyTorch: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
    MLflow: "https://mlflow.org/docs/latest/api_reference/_static/MLflow-logo-final-black.png",
    TensorFlow: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    ScikitLearn: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",

    // Big Data
    Spark: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg",
    Databricks: "https://www.vectorlogo.zone/logos/databricks/databricks-icon.svg",
    Kafka: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg",
    Hadoop: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hadoop/hadoop-original.svg",
    Hive: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg"
  };

  // Compétences techniques basées sur le CV
  const technicalSkills = [
    // Langages
    {
      category: "languages",
      name: "Python",
      icon: Code2,
      logo: techLogos.Python,
      level: 90,
      description: "Pandas, NumPy, Scikit-learn, PyTorch",
      gradient: "from-blue-500 to-orange-500"
    },
    {
      category: "languages",
      name: "SQL",
      icon: Database,
      logo: techLogos.SQL,
      level: 85,
      description: "Requêtes complexes, optimisation, procédures stockées",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      category: "languages",
      name: "Scala",
      icon: Code2,
      logo: techLogos.Scala,
      level: 70,
      description: "Programmation fonctionnelle, Spark",
      gradient: "from-red-500 to-red-700"
    },
    {
      category: "languages",
      name: "Flask",
      icon: Server,
      logo: techLogos.Flask,
      level: 75,
      description: "API REST, déploiement, microservices",
      gradient: "from-gray-600 to-gray-800"
    },
    {
      category: "languages",
      name: "React",
      icon: Code2,
      logo: techLogos.React,
      level: 70,
      description: "Composants, hooks, state management",
      gradient: "from-cyan-500 to-blue-500"
    },

    // Cloud & DevOps (Azure et GCP ajoutés)
    {
      category: "cloud",
      name: "Microsoft Azure",
      icon: Cloud,
      logo: techLogos.Azure,
      level: 80,
      description: "Data Factory, Databricks, Logic Apps, Key Vault, Data Lake, Synapse Analytics",
      gradient: "from-blue-600 to-sky-500"
    },
    {
      category: "cloud",
      name: "Google Cloud Platform",
      icon: Cloud,
      logo: techLogos.GCP,
      level: 75,
      description: "BigQuery, Cloud Storage, Dataflow, Pub/Sub, Composer",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      category: "cloud",
      name: "AWS",
      icon: Cloud,
      logo: techLogos.AWS,
      level: 70,
      description: "S3, EC2, Lambda, Glue, Redshift",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      category: "cloud",
      name: "Docker",
      icon: Container,
      logo: techLogos.Docker,
      level: 80,
      description: "Conteneurisation, Docker Compose, multi-stage builds",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      category: "cloud",
      name: "Kubernetes",
      icon: Server,
      logo: techLogos.Kubernetes,
      level: 65,
      description: "Orchestration de conteneurs, déploiements",
      gradient: "from-blue-600 to-blue-800"
    },
    {
      category: "cloud",
      name: "Airflow",
      icon: Workflow,
      logo: techLogos.Airflow,
      level: 75,
      description: "Orchestration, DAGs, scheduling",
      gradient: "from-green-600 to-green-700"
    },
    {
      category: "cloud",
      name: "Terraform",
      icon: GitBranch,
      logo: techLogos.Terraform,
      level: 65,
      description: "Infrastructure as Code, provisioning cloud",
      gradient: "from-purple-500 to-purple-700"
    },
    {
      category: "cloud",
      name: "GitHub Actions",
      icon: Workflow,
      logo: techLogos.GitHubActions,
      level: 75,
      description: "CI/CD pipelines, automatisation",
      gradient: "from-gray-700 to-gray-900"
    },

    // Big Data
    {
      category: "bigdata",
      name: "Apache Spark",
      icon: Server,
      logo: techLogos.Spark,
      level: 80,
      description: "Traitements distribués, PySpark, Spark SQL",
      gradient: "from-orange-500 to-orange-700"
    },
    {
      category: "bigdata",
      name: "Databricks",
      icon: Cloud,
      logo: techLogos.Databricks,
      level: 75,
      description: "Lakehouse, Jobs, Genie IA, Delta Lake",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      category: "bigdata",
      name: "Apache Kafka",
      icon: Workflow,
      logo: techLogos.Kafka,
      level: 70,
      description: "Streaming, ingestion temps réel, Confluent",
      gradient: "from-gray-600 to-gray-800"
    },
    {
      category: "bigdata",
      name: "Snowflake",
      icon: Database,
      logo: techLogos.Snowflake,
      level: 70,
      description: "Data warehouse, ELT, zero-copy cloning",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      category: "bigdata",
      name: "Hadoop",
      icon: Server,
      logo: techLogos.Hadoop,
      level: 60,
      description: "HDFS, YARN, écosystème Hadoop",
      gradient: "from-yellow-600 to-yellow-800"
    },

    // Bases de données
    {
      category: "databases",
      name: "PostgreSQL",
      icon: Database,
      logo: techLogos.PostgreSQL,
      level: 85,
      description: "Modélisation, optimisation, transactions",
      gradient: "from-blue-600 to-blue-800"
    },
    {
      category: "databases",
      name: "MongoDB",
      icon: Database,
      logo: techLogos.MongoDB,
      level: 75,
      description: "NoSQL, aggregation pipeline, indexes",
      gradient: "from-green-600 to-green-800"
    },
    {
      category: "databases",
      name: "MySQL",
      icon: Database,
      logo: techLogos.MySQL,
      level: 80,
      description: "Requêtes complexes, réplication",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      category: "databases",
      name: "Firebase",
      icon: Cloud,
      logo: techLogos.Firebase,
      level: 70,
      description: "Realtime DB, authentication, Firestore",
      gradient: "from-yellow-500 to-orange-600"
    },

    // Data Viz
    {
      category: "viz",
      name: "Power BI",
      icon: BarChart3,
      logo: techLogos.PowerBI,
      level: 90,
      description: "DAX, Power Query, data modeling, RLS",
      gradient: "from-yellow-500 to-yellow-700"
    },
    {
      category: "viz",
      name: "Streamlit",
      icon: LineChart,
      logo: techLogos.Streamlit,
      level: 85,
      description: "Dashboards interactifs, déploiement cloud",
      gradient: "from-red-500 to-red-700"
    },
    {
      category: "viz",
      name: "Tableau",
      icon: BarChart3,
      logo: techLogos.Tableau,
      level: 75,
      description: "Visualisations, storytelling, LOD",
      gradient: "from-blue-500 to-blue-700"
    },
    {
      category: "viz",
      name: "Superset",
      icon: BarChart3,
      logo: techLogos.Superset,
      level: 70,
      description: "Exploration data, dashboards SQL",
      gradient: "from-teal-500 to-cyan-600"
    },

    // Machine Learning
    {
      category: "ml",
      name: "PyTorch",
      icon: Brain,
      logo: techLogos.PyTorch,
      level: 70,
      description: "Deep learning, modèles prédictifs, NLP",
      gradient: "from-red-500 to-red-700"
    },
    {
      category: "ml",
      name: "TensorFlow",
      icon: Brain,
      logo: techLogos.TensorFlow,
      level: 65,
      description: "Deep learning, Keras, déploiement",
      gradient: "from-orange-500 to-orange-700"
    },
    {
      category: "ml",
      name: "Scikit-learn",
      icon: Brain,
      logo: techLogos.ScikitLearn,
      level: 85,
      description: "Classification, régression, clustering",
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      category: "ml",
      name: "MLflow",
      icon: Workflow,
      logo: techLogos.MLflow,
      level: 75,
      description: "Suivi d'expériences, modèle registry",
      gradient: "from-blue-400 to-cyan-500"
    }
  ];

  // Soft Skills
  const softSkills = [
    {
      name: "Esprit d'équipe",
      icon: Users,
      description: "Collaboration avec équipes marketing, finances et métier",
      gradient: "from-blue-400 to-cyan-400",
      color: "blue"
    },
    {
      name: "Communication",
      icon: MessageCircle,
      description: "Insights exploitables et recommandations claires",
      gradient: "from-green-400 to-emerald-500",
      color: "green"
    },
    {
      name: "Relationnel",
      icon: Users,
      description: "Interface entre équipes techniques et métiers",
      gradient: "from-purple-400 to-pink-500",
      color: "purple"
    },
    {
      name: "Résolution de problèmes",
      icon: Lightbulb,
      description: "Optimisation de pipelines et modélisation prédictive",
      gradient: "from-yellow-400 to-orange-500",
      color: "yellow"
    },
    {
      name: "Gestion du temps",
      icon: Timer,
      description: "Gestion de projets data end-to-end",
      gradient: "from-indigo-400 to-blue-500",
      color: "indigo"
    },
    {
      name: "Adaptabilité",
      icon: Target,
      description: "Multi-secteurs : banque, santé, cybersécurité",
      gradient: "from-pink-400 to-red-500",
      color: "pink"
    },
    {
      name: "Analyse critique",
      icon: Shield,
      description: "Sélection de variables clés et métriques orientées business",
      gradient: "from-orange-400 to-red-500",
      color: "orange"
    },
    {
      name: "Pédagogie",
      icon: Brain,
      description: "Formation et accompagnement aux outils data",
      gradient: "from-teal-400 to-cyan-500",
      color: "teal"
    },
    {
      name: "Leadership",
      icon: Target,
      description: "Pilotage de projets data et coordination d'équipes",
      gradient: "from-violet-400 to-purple-500",
      color: "violet"
    },
    {
      name: "Curiosité",
      icon: Lightbulb,
      description: "Veille technologique et innovation continue",
      gradient: "from-amber-400 to-orange-500",
      color: "amber"
    },
    {
      name: "Autonomie",
      icon: Timer,
      description: "Prise d'initiative et gestion indépendante de projets",
      gradient: "from-cyan-400 to-blue-500",
      color: "cyan"
    },
    {
      name: "Gestion du stress",
      icon: Shield,
      description: "Respect des délais et gestion des urgences",
      gradient: "from-emerald-400 to-teal-500",
      color: "emerald"
    }
  ];

  // Filtrer les compétences
  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredSkills(technicalSkills);
    } else {
      setFilteredSkills(technicalSkills.filter(skill => skill.category === activeCategory));
    }
    setCurrentIndex(0);
  }, [activeCategory]);

  // Initialiser au chargement
  useEffect(() => {
    setFilteredSkills(technicalSkills);
  }, []);

  // Calculer le nombre d'items par page en fonction de la largeur d'écran
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setItemsPerPage(4);
      } else if (window.innerWidth >= 1024) {
        setItemsPerPage(3);
      } else if (window.innerWidth >= 640) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(filteredSkills.length / itemsPerPage);
  const startIndex = currentIndex * itemsPerPage;
  const visibleSkills = filteredSkills.slice(startIndex, startIndex + itemsPerPage);

  const nextSlide = () => {
    if (currentIndex < totalPages - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const floatAnimation = {
    y: [0, -8, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
  };

  return (
    <section id="skills" className="relative bg-white overflow-hidden py-20">
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-blue-200/10 to-orange-200/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360, scale: [1, 1.3, 1] }}
          transition={{ duration: 30, repeat: Infinity }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-orange-200/10 to-blue-200/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            animate={floatAnimation}
            className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-orange-100 text-sm font-medium text-gray-700 mb-4"
          >
            ✦ Expertise & Savoir-être
          </motion.span>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Mes
            </span>
            <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent ml-2">
              Compétences
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Un équilibre entre expertise technique et qualités humaines,
            <br />pour transformer les données en valeur ajoutée.
          </p>
        </motion.div>

        {/* Catégories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`relative group px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.gradient} text-white shadow-lg`
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <div className="flex items-center gap-2">
                <category.icon size={16} />
                {category.name}
              </div>
              {activeCategory === category.id && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 rounded-full bg-gradient-to-r opacity-50 blur"
                  style={{ background: 'inherit' }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Section compétences techniques - CARROUSEL */}
        <div className="mb-20">
          {filteredSkills.length > 0 ? (
            <>
              <div className="relative px-8 md:px-12" ref={carouselRef}>
                {/* Carrousel Content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${activeCategory}-${currentIndex}`}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                  >
                    {visibleSkills.map((skill, index) => (
                      <motion.div
                        key={`${skill.name}-${index}`}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        onHoverStart={() => setHoveredSkill(index)}
                        onHoverEnd={() => setHoveredSkill(null)}
                        className="relative group"
                      >
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-orange-500 rounded-2xl blur opacity-0 group-hover:opacity-50 transition duration-500" />

                        <div className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300">
                          {/* Logo agrandi avec fond blanc */}
                          <div className="flex justify-center mb-4">
                            <div className="w-20 h-20 rounded-2xl bg-white shadow-lg flex items-center justify-center overflow-hidden p-3 border border-gray-100 group-hover:border-transparent transition-all duration-300">
                              {skill.logo ? (
                                <img
                                  src={skill.logo}
                                  alt={skill.name}
                                  className="w-full h-full object-contain"
                                  onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.style.display = 'none';
                                    const parent = e.target.parentNode;
                                    if (parent) {
                                      const iconElement = document.createElement('div');
                                      iconElement.innerHTML = `<svg class="w-10 h-10 text-gray-700" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"><path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z M12 3v4 M8 3v4 M16 3v4"/></svg>`;
                                      parent.innerHTML = iconElement.innerHTML;
                                    }
                                  }}
                                />
                              ) : (
                                <skill.icon size={40} className="text-gray-700" />
                              )}
                            </div>
                          </div>

                          {/* Contenu */}
                          <div className="text-center">
                            <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-orange-500 group-hover:bg-clip-text group-hover:text-transparent">
                              {skill.name}
                            </h3>

                            <span className="inline-block px-2 py-1 bg-gradient-to-r from-blue-50 to-orange-50 rounded-full text-xs font-medium text-gray-600 mb-3">
                              {categories.find(c => c.id === skill.category)?.name || skill.category}
                            </span>

                            <p className="text-xs text-gray-500 mb-4 line-clamp-2">
                              {skill.description}
                            </p>

                            {/* Barre de progression */}
                            <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: index * 0.05 }}
                                className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.gradient}`}
                              />
                            </div>

                            <div className="flex justify-end mt-1">
                              <span className="text-xs font-semibold text-gray-700">
                                {skill.level}%
                              </span>
                            </div>
                          </div>

                          {/* Élément décoratif */}
                          <div className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-r ${skill.gradient} opacity-5 rounded-full -mb-8 -mr-8`} />
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons */}
                {totalPages > 1 && (
                  <>
                    <button
                      onClick={prevSlide}
                      disabled={currentIndex === 0}
                      className={`absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 ${
                        currentIndex === 0
                          ? 'opacity-50 cursor-not-allowed'
                          : 'hover:scale-110 hover:bg-gradient-to-r hover:from-blue-500 hover:to-orange-500 hover:text-white'
                      }`}
                    >
                      <ChevronLeft size={20} />
                    </button>

                    <button
                      onClick={nextSlide}
                      disabled={currentIndex === totalPages - 1}
                      className={`absolute right-0 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 ${
                        currentIndex === totalPages - 1
                          ? 'opacity-50 cursor-not-allowed'
                          : 'hover:scale-110 hover:bg-gradient-to-r hover:from-blue-500 hover:to-orange-500 hover:text-white'
                      }`}
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}
              </div>

              {/* Pagination Dots */}
              {totalPages > 1 && (
                <div className="flex justify-center gap-2 mt-8">
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        currentIndex === index
                          ? 'w-6 bg-gradient-to-r from-blue-500 to-orange-500'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">Aucune compétence trouvée dans cette catégorie.</p>
            </div>
          )}
        </div>

        {/* Section Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-orange-50/50 rounded-3xl -m-4" />

          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-orange-500 flex items-center justify-center">
                <Users size={28} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Soft Skills
                </h3>
                <p className="text-sm text-gray-500">
                  Qualités humaines et relationnelles
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {softSkills.slice(0, 8).map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group relative"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${skill.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500`} />

                  <div className="relative bg-white rounded-2xl p-6 border border-gray-100 hover:border-transparent transition-all duration-300">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${skill.gradient} bg-opacity-10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <skill.icon size={32} className={`text-${skill.color}-600`} />
                    </div>

                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {skill.name}
                    </h4>

                    <p className="text-sm text-gray-600 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Badge de compétences linguistiques */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-6 p-4 bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-blue-500 rounded-full" />
              <span className="text-sm font-medium text-gray-700">Français: Natif</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-orange-500 rounded-full" />
              <span className="text-sm font-medium text-gray-700">Anglais: B2 </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-purple-500 rounded-full" />
              <span className="text-sm font-medium text-gray-700">Espagnol: A2</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1.5 bg-gradient-to-r from-blue-100 to-orange-100 rounded-full text-xs font-medium text-gray-700">
                Méthodologie Agile (Scrum)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1.5 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full text-xs font-medium text-gray-700">
                Certifié
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;