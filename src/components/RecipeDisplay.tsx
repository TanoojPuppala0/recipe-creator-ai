
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Clock, Users, ShoppingCart, ChefHat, Download, X, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

interface RecipeDisplayProps {
  recipe: {
    title: string;
    image?: string;
    cookTime: string;
    servings: number;
    ingredients: string[];
    instructions: string[];
    tips?: string[];
    video?: string;
  } | null;
  onClose: () => void;
}

const RecipeDisplay = ({ recipe, onClose }: RecipeDisplayProps) => {
  if (!recipe) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 backdrop flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="w-full max-w-4xl max-h-[90vh] overflow-hidden bg-white rounded-2xl shadow-2xl"
        >
          <div className="relative h-64">
            {recipe.image ? (
              <img 
                src={recipe.image} 
                alt={recipe.title} 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-r from-blue-100 to-indigo-100 flex items-center justify-center">
                <ChefHat className="h-16 w-16 text-blue-500" />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
              <h1 className="text-white text-3xl font-display font-medium">{recipe.title}</h1>
              <div className="flex flex-wrap gap-3 mt-2">
                <Badge variant="secondary" className="bg-white/20 backdrop-blur-md text-white border-none">
                  <Clock className="mr-1 h-3 w-3" /> {recipe.cookTime}
                </Badge>
                <Badge variant="secondary" className="bg-white/20 backdrop-blur-md text-white border-none">
                  <Users className="mr-1 h-3 w-3" /> {recipe.servings} servings
                </Badge>
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
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <div className="bg-gray-50 rounded-xl p-4">
                  <h3 className="font-medium text-lg flex items-center mb-3">
                    <ShoppingCart className="mr-2 h-4 w-4 text-blue-500" /> 
                    Ingredients
                  </h3>
                  <ul className="space-y-2">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-sm">{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {recipe.video && (
                  <div className="mt-4 bg-gray-50 rounded-xl p-4">
                    <h3 className="font-medium text-lg flex items-center mb-3">
                      <Play className="mr-2 h-4 w-4 text-blue-500" /> 
                      AI Cooking Video
                    </h3>
                    <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Button className="bg-blue-500 hover:bg-blue-600">
                          <Play className="h-4 w-4 mr-2" /> Watch Video
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="md:col-span-2">
                <h3 className="font-medium text-lg flex items-center mb-3">
                  <ChefHat className="mr-2 h-4 w-4 text-blue-500" /> 
                  Instructions
                </h3>
                <ol className="space-y-6">
                  {recipe.instructions.map((instruction, index) => (
                    <li key={index} className="relative pl-10">
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
                    <div className="bg-blue-50 rounded-xl p-4">
                      <h3 className="font-medium text-lg mb-3">Chef's Tips</h3>
                      <ul className="space-y-2">
                        {recipe.tips.map((tip, index) => (
                          <li key={index} className="text-sm text-gray-700">
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="p-4 border-t flex justify-end">
            <Button className="bg-blue-500 hover:bg-blue-600">
              <Download className="mr-2 h-4 w-4" />
              Save Recipe
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default RecipeDisplay;
