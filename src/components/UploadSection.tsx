
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UploadCloud, X, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import LanguageSelector from './LanguageSelector';
import { generateRecipe } from '@/utils/recipeGenerator';

interface UploadSectionProps {
  onRecipeGenerated: (recipe: any) => void;
}

const UploadSection = ({ onRecipeGenerated }: UploadSectionProps) => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [language, setLanguage] = useState('en');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.includes('image/')) {
      toast.error('Please upload an image file');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setPreviewImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    
    const file = e.dataTransfer.files?.[0];
    if (!file) return;
    
    if (!file.type.includes('image/')) {
      toast.error('Please upload an image file');
      return;
    }
    
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const resetUpload = () => {
    setPreviewImage(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleGenerateRecipe = async () => {
    if (!previewImage) return;
    
    setIsLoading(true);
    toast.loading('Analyzing your image and generating recipe...');
    
    try {
      // In a real app, we would send the image to a backend for processing
      setTimeout(() => {
        const recipe = generateRecipe('example dish', language);
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

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8" id="upload">
      <div className="space-y-4 mb-8 text-center">
        <motion.h2 
          className="text-3xl md:text-4xl font-display"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Image to Recipe
        </motion.h2>
        <motion.p 
          className="text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Upload an image of any dish and our AI will identify it, create a detailed recipe, and generate cooking instructions.
        </motion.p>
      </div>

      <motion.div 
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
          <div className="w-full md:w-auto">
            <LanguageSelector onChange={setLanguage} />
          </div>
        </div>

        <AnimatePresence mode="wait">
          {!previewImage ? (
            <motion.div
              key="upload"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="w-full aspect-video rounded-2xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center p-8 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={() => fileInputRef.current?.click()}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              <UploadCloud className="h-12 w-12 text-gray-400 mb-4" />
              <p className="text-gray-600 text-center mb-2">
                Drag & drop an image here, or click to select
              </p>
              <p className="text-xs text-gray-400 text-center">
                Supported formats: JPG, PNG, WEBP
              </p>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
              />
            </motion.div>
          ) : (
            <motion.div
              key="preview"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-full aspect-video rounded-2xl overflow-hidden group"
            >
              <img 
                src={previewImage} 
                alt="Food preview" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Button 
                  size="icon" 
                  variant="secondary" 
                  className="mr-2 bg-white text-gray-700"
                  onClick={resetUpload}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex justify-center">
          <Button 
            onClick={handleGenerateRecipe} 
            disabled={!previewImage || isLoading}
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
      </motion.div>
    </div>
  );
};

export default UploadSection;
