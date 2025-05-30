
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Clock, Users, ShoppingCart, ChefHat, Download, X, Play, Globe, Apple } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState, useEffect } from 'react';

interface RecipeDisplayProps {
  recipe: {
    title: string;
    originalTitle?: string;
    image?: string;
    cookTime: string;
    servings: number;
    ingredients: string[];
    originalIngredients?: string[];
    instructions: string[];
    originalInstructions?: string[];
    tips?: string[];
    video?: string;
    language?: string;
    nutrition?: {
      calories: string;
      protein: string;
      carbs: string;
      fat: string;
      fiber: string;
    };
  } | null;
  onClose: () => void;
}

const RecipeDisplay = ({ recipe, onClose }: RecipeDisplayProps) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    // Listen for video toggle events
    const handleToggleVideo = () => {
      setIsVideoPlaying(true);
    };

    document.addEventListener('toggleVideo', handleToggleVideo);
    
    return () => {
      document.removeEventListener('toggleVideo', handleToggleVideo);
    };
  }, []);

  if (!recipe) return null;

  // Function to generate a placeholder image URL based on recipe title
  const getRecipeImage = () => {
    if (recipe.image) return recipe.image;
    
    // Generate a food-related image based on the recipe title
    const encodedTitle = encodeURIComponent(recipe.title);
    return `https://source.unsplash.com/1600x900/?food,${encodedTitle}`;
  };

  // Function to get the language name from language code
  const getLanguageName = (code: string): string => {
    const languages: {[key: string]: string} = {
      'en': 'English',
      'es': 'Spanish',
      'fr': 'French',
      'de': 'German',
      'it': 'Italian',
      'zh': 'Chinese',
      'ja': 'Japanese',
      'ko': 'Korean',
      'ar': 'Arabic',
      'hi': 'Hindi',
      'te': 'Telugu'
    };
    return languages[code] || code;
  };

  // Check if we have translated content
  const hasTranslation = recipe.language && recipe.language !== 'en' && (recipe.originalTitle || recipe.originalIngredients || recipe.originalInstructions);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 backdrop-blur-md bg-black/50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="w-full max-w-4xl max-h-[90vh] overflow-hidden bg-white rounded-2xl shadow-2xl"
        >
          <div className="relative h-64">
            <img 
              src={getRecipeImage()} 
              alt={recipe.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
              <h1 className="text-white text-3xl font-display font-medium">{recipe.title}</h1>
              {recipe.originalTitle && recipe.language !== 'en' && (
                <p className="text-white/80 text-lg mt-1">
                  {recipe.originalTitle}
                </p>
              )}
              <div className="flex flex-wrap gap-3 mt-2">
                <Badge variant="secondary" className="bg-white/20 backdrop-blur-md text-white border-none">
                  <Clock className="mr-1 h-3 w-3" /> {recipe.cookTime}
                </Badge>
                <Badge variant="secondary" className="bg-white/20 backdrop-blur-md text-white border-none">
                  <Users className="mr-1 h-3 w-3" /> {recipe.servings} servings
                </Badge>
                {recipe.language && recipe.language !== 'en' && (
                  <Badge variant="secondary" className="bg-white/20 backdrop-blur-md text-white border-none">
                    <Globe className="mr-1 h-3 w-3" /> {getLanguageName(recipe.language)}
                  </Badge>
                )}
                {recipe.nutrition && (
                  <Badge variant="secondary" className="bg-white/20 backdrop-blur-md text-white border-none">
                    <Apple className="mr-1 h-3 w-3" /> {recipe.nutrition.calories}
                  </Badge>
                )}
              </div>
            </div>
            <Button 
              size="icon" 
              variant="secondary" 
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-md text-white hover:bg-white/30 border-none"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="p-6 overflow-y-auto max-h-[calc(90vh-16rem)]">
            {hasTranslation ? (
              <Tabs defaultValue="translated" className="mb-6">
                <TabsList className="grid w-full max-w-xs mx-auto grid-cols-2">
                  <TabsTrigger value="translated">{getLanguageName(recipe.language || 'en')}</TabsTrigger>
                  <TabsTrigger value="english">English</TabsTrigger>
                </TabsList>
                
                <TabsContent value="translated" className="mt-4">
                  <RecipeContent recipe={recipe} showOriginal={false} />
                </TabsContent>
                
                <TabsContent value="english" className="mt-4">
                  <RecipeContent recipe={recipe} showOriginal={true} />
                </TabsContent>
              </Tabs>
            ) : (
              <RecipeContent recipe={recipe} showOriginal={false} />
            )}
          </div>

          <div className="p-4 border-t flex justify-end">
            <Button className="bg-blue-500 hover:bg-blue-600">
              <Download className="mr-2 h-4 w-4" />
              Save Recipe
            </Button>
          </div>
        </motion.div>
      </motion.div>

      {/* Video player modal */}
      {isVideoPlaying && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] backdrop-blur-xl bg-black/80 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden relative"
          >
            <iframe 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
              className="w-full h-full"
              title="Recipe Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <Button 
              size="icon" 
              variant="secondary" 
              className="absolute top-4 right-4 bg-black/50 text-white hover:bg-black/70"
              onClick={() => setIsVideoPlaying(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Separate component for recipe content to avoid duplication
const RecipeContent = ({ recipe, showOriginal }: { 
  recipe: RecipeDisplayProps['recipe'], 
  showOriginal: boolean 
}) => {
  if (!recipe) return null;
  
  // Use original English content if showOriginal is true and we have it
  const ingredients = showOriginal && recipe.originalIngredients ? recipe.originalIngredients : recipe.ingredients;
  const instructions = showOriginal && recipe.originalInstructions ? recipe.originalInstructions : recipe.instructions;
  
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="md:col-span-1">
        <div className="bg-gray-50 rounded-xl p-4 shadow-sm">
          <h3 className="font-medium text-lg flex items-center mb-3">
            <ShoppingCart className="mr-2 h-4 w-4 text-blue-500" /> 
            Ingredients
          </h3>
          <ul className="space-y-3">
            {ingredients.map((ingredient, index) => {
              // Split ingredient into amount and name if possible
              const match = ingredient.match(/^([\d\s/]+\s*(?:cup|tablespoon|teaspoon|tbsp|tsp|g|kg|ml|l|oz|lb|piece|clove|bunch|pinch|to taste)s?)?(.+)$/i);
              
              const amount = match && match[1] ? match[1].trim() : "";
              const name = match && match[2] ? match[2].trim() : ingredient;
              
              return (
                <li key={index} className="flex items-start bg-white p-2 rounded-md shadow-sm">
                  <CheckCircle2 className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <div>
                    {amount && <span className="text-sm font-medium">{amount} </span>}
                    <span className="text-sm">{name}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {recipe.nutrition && (
          <div className="mt-4 bg-blue-50 rounded-xl p-4 shadow-sm">
            <h3 className="font-medium text-lg flex items-center mb-3">
              <Apple className="mr-2 h-4 w-4 text-blue-500" /> 
              Nutritional Information
            </h3>
            <ul className="grid grid-cols-2 gap-2">
              <li className="bg-white p-2 rounded-md shadow-sm">
                <div className="text-xs text-gray-500">Calories</div>
                <div className="text-sm font-medium">{recipe.nutrition.calories}</div>
              </li>
              <li className="bg-white p-2 rounded-md shadow-sm">
                <div className="text-xs text-gray-500">Protein</div>
                <div className="text-sm font-medium">{recipe.nutrition.protein}</div>
              </li>
              <li className="bg-white p-2 rounded-md shadow-sm">
                <div className="text-xs text-gray-500">Carbs</div>
                <div className="text-sm font-medium">{recipe.nutrition.carbs}</div>
              </li>
              <li className="bg-white p-2 rounded-md shadow-sm">
                <div className="text-xs text-gray-500">Fat</div>
                <div className="text-sm font-medium">{recipe.nutrition.fat}</div>
              </li>
              <li className="bg-white p-2 rounded-md shadow-sm col-span-2">
                <div className="text-xs text-gray-500">Fiber</div>
                <div className="text-sm font-medium">{recipe.nutrition.fiber}</div>
              </li>
            </ul>
          </div>
        )}

        <div className="mt-4 bg-gray-50 rounded-xl p-4 shadow-sm">
          <h3 className="font-medium text-lg flex items-center mb-3">
            <Play className="mr-2 h-4 w-4 text-blue-500" /> 
            AI Cooking Video
          </h3>
          <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
            <img 
              src={`https://source.unsplash.com/800x450/?cooking,${encodeURIComponent(recipe.title)}`}
              alt="Cooking preview" 
              className="w-full h-full object-cover opacity-70" 
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Button className="bg-blue-500 hover:bg-blue-600" onClick={() => document.dispatchEvent(new Event('toggleVideo'))}>
                <Play className="h-4 w-4 mr-2" /> Watch Video
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="md:col-span-2">
        <h3 className="font-medium text-lg flex items-center mb-3">
          <ChefHat className="mr-2 h-4 w-4 text-blue-500" /> 
          Instructions
        </h3>
        <ol className="space-y-6">
          {instructions.map((instruction, index) => (
            <li key={index} className="relative pl-10 bg-gray-50 p-4 rounded-xl shadow-sm">
              <span className="absolute left-0 top-0 flex items-center justify-center w-7 h-7 rounded-full bg-blue-100 text-blue-600 font-medium text-sm">
                {index + 1}
              </span>
              <p className="text-gray-700">{instruction}</p>
            </li>
          ))}
        </ol>

        {recipe.tips && recipe.tips.length > 0 && (
          <>
            <Separator className="my-6" />
            <div className="bg-blue-50 rounded-xl p-4 shadow-sm">
              <h3 className="font-medium text-lg mb-3">Chef's Tips</h3>
              <ul className="space-y-2">
                {recipe.tips.map((tip, index) => (
                  <li key={index} className="text-sm text-gray-700 flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RecipeDisplay;
