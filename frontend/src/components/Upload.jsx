import { motion } from "framer-motion";
import { useState } from "react";

function Upload() {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) setFile(droppedFile);
  };

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) setFile(selectedFile);
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-orange-50 opacity-50" />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Upload</span> de Fichiers
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Importez vos fichiers pour analyse et traitement
          </p>
        </motion.div>
      </div>

      {/* Upload Area */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="relative"
        >
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-orange-400 to-blue-400 rounded-3xl opacity-20 blur-xl animate-pulse" />

          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`relative bg-white rounded-3xl shadow-xl p-12 border-2 border-dashed transition-all duration-300 ${
              isDragging 
                ? 'border-blue-500 bg-gradient-to-r from-blue-50 to-orange-50' 
                : 'border-gray-300 hover:border-blue-400'
            }`}
          >
            <div className="text-center">
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="inline-block p-4 bg-gradient-to-r from-blue-100 to-orange-100 rounded-full mb-6"
              >
                <svg
                  className="w-12 h-12 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
              </motion.div>

              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {file ? file.name : 'Glissez-déposez votre fichier'}
              </h2>

              <p className="text-gray-600 mb-6">
                {file
                  ? `Taille: ${(file.size / 1024).toFixed(2)} KB`
                  : 'ou cliquez pour parcourir vos fichiers'}
              </p>

              {!file && (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <label className="inline-block cursor-pointer">
                    <span className="px-8 py-3 bg-gradient-to-r from-blue-500 to-orange-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                      Sélectionner un fichier
                    </span>
                    <input
                      type="file"
                      className="hidden"
                      onChange={handleFileSelect}
                    />
                  </label>
                </motion.div>
              )}

              {file && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-x-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-gradient-to-r from-blue-500 to-orange-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Analyser
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setFile(null)}
                    className="px-8 py-3 bg-gray-100 text-gray-700 font-semibold rounded-full shadow hover:shadow-lg transition-all duration-300"
                  >
                    Supprimer
                  </motion.button>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Supported Formats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-gray-500 mb-3">Formats supportés :</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['CSV', 'JSON', 'Parquet', 'Excel', 'PDF'].map((format, index) => (
              <motion.span
                key={index}
                whileHover={{ y: -2, scale: 1.05 }}
                className="px-4 py-2 bg-gray-50 text-gray-700 text-sm font-medium rounded-full border border-gray-200"
              >
                {format}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Upload;