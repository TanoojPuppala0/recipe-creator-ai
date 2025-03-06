
import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import UploadSection from '@/components/UploadSection';
import SearchByName from '@/components/SearchByName';
import RecipeDisplay from '@/components/RecipeDisplay';
import { Toaster } from '@/components/ui/sonner';
import { ChefHat, ImagePlus, Type } from 'lucide-react';

const Index = () => {
  const [recipe, setRecipe] = useState<any>(null);

  const handleRecipeGenerated = (generatedRecipe: any) => {
    setRecipe(generatedRecipe);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCloseRecipe = () => {
    setRecipe(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-center" />
      <Header />

      <RecipeDisplay recipe={recipe} onClose={handleCloseRecipe} />

      <main className="pt-24 pb-16">
        <section className="container max-w-6xl mx-auto px-4 py-12">
          <motion.div 
            className="text-center space-y-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center justify-center p-1 bg-blue-50 rounded-full mb-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="bg-white p-2 rounded-full">
                <ChefHat className="h-6 w-6 text-blue-500" />
              </div>
            </motion.div>

            <h1 className="text-4xl md:text-6xl font-display font-medium tracking-tight">
              Cook-key Recipe Generator
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Upload food images or search by name to get AI-generated recipes with cooking instructions and videos.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <motion.div 
              className="glass-card rounded-2xl p-8 flex flex-col items-center text-center"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <ImagePlus className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-medium mb-2">Image to Recipe</h3>
              <p className="text-gray-600 mb-4">
                Upload a photo of any dish and let our AI identify it and create a detailed recipe.
              </p>
              <a 
                href="#upload" 
                className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
              >
                Try it now →
              </a>
            </motion.div>

            <motion.div 
              className="glass-card rounded-2xl p-8 flex flex-col items-center text-center"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="bg-indigo-100 p-4 rounded-full mb-4">
                <Type className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-medium mb-2">Search by Name</h3>
              <p className="text-gray-600 mb-4">
                Know what you want to cook? Simply enter the dish name and get a complete recipe.
              </p>
              <a 
                href="#search" 
                className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
              >
                Try it now →
              </a>
            </motion.div>
          </motion.div>
        </section>

        <UploadSection onRecipeGenerated={handleRecipeGenerated} />
        <SearchByName onRecipeGenerated={handleRecipeGenerated} />

        <footer className="bg-white border-t mt-24 py-8">
          <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Cook-key • AI-Powered Recipe Generator</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
