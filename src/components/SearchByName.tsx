
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import LanguageSelector from './LanguageSelector';
import { generateRecipe } from '@/utils/recipeGenerator';

interface SearchByNameProps {
  onRecipeGenerated: (recipe: any) => void;
}

const SearchByName = ({ onRecipeGenerated }: SearchByNameProps) => {
  const [dishName, setDishName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [language, setLanguage] = useState('en');

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!dishName.trim()) {
      toast.error('Please enter a dish name');
      return;
    }
    
    setIsLoading(true);
    toast.loading(`Generating recipe for ${dishName}...`);
    
    try {
      // In a real application, we would call an API here
      setTimeout(() => {
        const recipe = generateRecipe(dishName, language);
        onRecipeGenerated(recipe);
        toast.dismiss();
        toast.success('Recipe generated successfully!');
        setIsLoading(false);
      }, 2000);
    } catch (error) {
      toast.dismiss();
      toast.error('Failed to generate recipe. Please try again.');
      setIsLoading(false);
    }
  };

  const handleLanguageChange = (value: string) => {
    setLanguage(value);
    console.log(`Language changed to: ${value}`);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-16" id="search">
      <div className="space-y-4 mb-8 text-center">
        <motion.h2 
          className="text-3xl md:text-4xl font-display"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Search by Name
        </motion.h2>
        <motion.p 
          className="text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Know the dish you want to make? Simply enter its name and we'll generate a complete recipe with instructions.
        </motion.p>
      </div>

      <motion.form 
        onSubmit={handleSearch}
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Enter a dish name (e.g., Pasta Carbonara)"
                value={dishName}
                onChange={(e) => setDishName(e.target.value)}
                className="pl-10 py-6 bg-white bg-opacity-80 backdrop-blur-md border border-gray-200 shadow-sm transition-all duration-300 hover:bg-opacity-100 focus:bg-white"
              />
            </div>
          </div>
          <div className="w-full md:w-auto">
            <LanguageSelector onChange={handleLanguageChange} />
          </div>
        </div>

        <div className="flex justify-center">
          <Button 
            type="submit" 
            disabled={isLoading || !dishName.trim()}
            className="px-8 py-6 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium text-lg shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50"
          >
            {isLoading ? (
              <>
                <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              'Generate Recipe'
            )}
          </Button>
        </div>
      </motion.form>
    </div>
  );
};

export default SearchByName;
