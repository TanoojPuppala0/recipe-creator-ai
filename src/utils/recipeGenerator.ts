
// This is a mock implementation for demonstration purposes
// In a real application, this would connect to a backend service or API

interface Nutrition {
  calories: string;
  protein: string;
  carbs: string;
  fat: string;
  fiber: string;
}

interface Recipe {
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
  nutrition?: Nutrition;
}

// Mock data for recipe generation
const mockRecipes: { [key: string]: Recipe } = {
  'pasta carbonara': {
    title: 'Classic Pasta Carbonara',
    cookTime: '25 minutes',
    servings: 4,
    ingredients: [
      '400g spaghetti or bucatini',
      '200g pancetta or guanciale, diced',
      '4 large egg yolks',
      '2 large whole eggs',
      '100g Pecorino Romano, grated',
      '50g Parmigiano Reggiano, grated',
      'Freshly ground black pepper',
      'Salt, to taste'
    ],
    instructions: [
      'Bring a large pot of heavily salted water to a boil. Add the pasta and cook until al dente according to package instructions.',
      'While the pasta is cooking, heat a large skillet over medium heat. Add the diced pancetta and cook until crispy and the fat has rendered, about 7-8 minutes.',
      'In a bowl, whisk together the egg yolks, whole eggs, grated cheeses, and a generous amount of freshly ground black pepper.',
      'When the pasta is done, reserve 1 cup of the pasta cooking water, then drain the pasta.',
      'Working quickly, add the hot pasta to the skillet with the pancetta. Toss to coat in the rendered fat. Remove the skillet from the heat.',
      'Quickly pour the egg and cheese mixture over the pasta, stirring constantly to create a creamy sauce. If the sauce is too thick, add a splash of the reserved pasta water to loosen it.',
      'Serve immediately with an extra sprinkle of grated cheese and freshly ground black pepper.'
    ],
    tips: [
      'The heat from the pasta cooks the eggs, but if you\'re concerned about raw eggs, ensure the internal temperature reaches 160°F (71°C).',
      'Traditional carbonara doesn\'t include cream – the creaminess comes from the emulsion of eggs, cheese, and pasta water.',
      'Work quickly when adding the egg mixture to prevent the eggs from scrambling.'
    ],
    video: 'https://example.com/video/carbonara',
    nutrition: {
      calories: '820 kcal',
      protein: '40g',
      carbs: '80g',
      fat: '38g',
      fiber: '3g'
    }
  },
  'chocolate cake': {
    title: 'Rich Chocolate Cake',
    cookTime: '45 minutes',
    servings: 8,
    ingredients: [
      '2 cups all-purpose flour',
      '2 cups granulated sugar',
      '3/4 cup unsweetened cocoa powder',
      '2 tsp baking soda',
      '1 tsp baking powder',
      '1 tsp salt',
      '2 large eggs',
      '1 cup buttermilk',
      '1/2 cup vegetable oil',
      '2 tsp vanilla extract',
      '1 cup hot coffee or hot water'
    ],
    instructions: [
      'Preheat the oven to 350°F (175°C). Grease and flour two 9-inch round cake pans.',
      'In a large bowl, whisk together the flour, sugar, cocoa powder, baking soda, baking powder, and salt.',
      'Add the eggs, buttermilk, vegetable oil, and vanilla extract. Beat with an electric mixer on medium speed for about 2 minutes.',
      'Stir in the hot coffee (or water) by hand. The batter will be very thin, but that\'s normal.',
      'Pour the batter evenly into the prepared pans.',
      'Bake for 30-35 minutes, or until a toothpick inserted in the center comes out clean.',
      'Allow the cakes to cool in the pans for 10 minutes, then remove and cool completely on wire racks before frosting.'
    ],
    tips: [
      'The hot coffee enhances the chocolate flavor but doesn\'t make the cake taste like coffee.',
      'For extra moisture, brush each cake layer with simple syrup before frosting.',
      'This cake pairs perfectly with a chocolate ganache or buttercream frosting.'
    ],
    video: 'https://example.com/video/chocolate-cake',
    nutrition: {
      calories: '450 kcal',
      protein: '6g',
      carbs: '65g',
      fat: '22g',
      fiber: '3g'
    }
  },
  'biryani': {
    title: 'Fragrant Chicken Biryani',
    cookTime: '1 hour 30 minutes',
    servings: 6,
    ingredients: [
      '2 cups basmati rice',
      '800g chicken thighs, bone-in',
      '2 large onions, thinly sliced',
      '4 cloves garlic, minced',
      '2 inch piece ginger, grated',
      '3 green chilies, slit',
      '2 tomatoes, chopped',
      '1/2 cup plain yogurt',
      '1/4 cup fresh mint leaves',
      '1/2 cup fresh coriander leaves',
      '2 tbsp biryani masala',
      '1 tsp turmeric powder',
      '1 tsp red chili powder',
      '2 tsp garam masala',
      '4 tbsp ghee or oil',
      '2 bay leaves',
      '4 green cardamom pods',
      '1 stick cinnamon',
      '4 cloves',
      'Pinch of saffron soaked in 2 tbsp warm milk',
      'Salt to taste'
    ],
    instructions: [
      'Wash the rice and soak for 30 minutes. Drain well.',
      'In a large bowl, marinate the chicken with yogurt, half of the garlic, ginger, turmeric, red chili powder, 1 tsp garam masala, and salt for at least 30 minutes.',
      'Heat 2 tbsp ghee in a large heavy-bottomed pot. Add the sliced onions and fry until golden brown. Remove half and set aside for garnish.',
      'Add bay leaves, cardamom, cinnamon, and cloves to the pot. Sauté for 30 seconds until fragrant.',
      'Add the remaining garlic, ginger, and green chilies. Sauté for 1-2 minutes.',
      'Add chopped tomatoes and cook until soft and oil separates, about 5 minutes.',
      'Add the marinated chicken with its marinade. Cook on medium heat for 5 minutes, stirring occasionally.',
      'Add biryani masala, half of the mint and coriander leaves. Cover and cook for 15 minutes until chicken is nearly done.',
      'In a separate pot, bring water to a boil. Add salt and the soaked rice. Cook until rice is 70% done, about 5-7 minutes. Drain well.',
      'Layer the partially cooked rice over the chicken. Sprinkle remaining garam masala, mint, and coriander leaves.',
      'Pour the saffron milk over the rice. Dot with remaining ghee.',
      'Cover with a tight-fitting lid. Cook on low heat for 20-25 minutes until the rice is fully cooked and fragrant.',
      'Let it rest for 10 minutes before opening the lid. Gently mix the layers before serving.',
      'Garnish with the reserved fried onions and serve hot.'
    ],
    tips: [
      'The key to a good biryani is cooking the rice to exactly 70% before the layering process.',
      'For an authentic touch, seal the pot with dough around the edges of the lid to trap the steam.',
      'Allow the biryani to rest after cooking - this helps the flavors meld together perfectly.'
    ],
    video: 'https://example.com/video/biryani',
    nutrition: {
      calories: '650 kcal',
      protein: '45g',
      carbs: '52g',
      fat: '28g',
      fiber: '4g'
    }
  },
  'example dish': {
    title: 'Mediterranean Grilled Salmon',
    cookTime: '30 minutes',
    servings: 4,
    ingredients: [
      '4 salmon fillets (about 6 oz each)',
      '2 tablespoons olive oil',
      '3 cloves garlic, minced',
      '1 tablespoon fresh lemon juice',
      '1 teaspoon dried oregano',
      '1 teaspoon dried thyme',
      '1/2 teaspoon paprika',
      'Salt and pepper to taste',
      '1 lemon, sliced into rounds',
      'Fresh parsley for garnish'
    ],
    instructions: [
      'In a small bowl, mix olive oil, minced garlic, lemon juice, oregano, thyme, paprika, salt, and pepper to create a marinade.',
      'Place the salmon fillets in a shallow dish and pour the marinade over them, ensuring they are well coated. Let marinate for 15-20 minutes.',
      'Preheat your grill or a grill pan to medium-high heat.',
      'Oil the grill grates lightly to prevent sticking.',
      'Place the salmon fillets skin-side down on the grill and cook for about 4-5 minutes.',
      'Carefully flip the salmon and grill for another 3-4 minutes until the fish is cooked through and flakes easily with a fork.',
      'Transfer the salmon to serving plates and garnish with lemon slices and fresh parsley.'
    ],
    tips: [
      'For extra flavor, add a tablespoon of honey to the marinade for a touch of sweetness.',
      'You can also bake the salmon at 400°F (200°C) for 12-15 minutes if you prefer not to grill.',
      'Serve with a side of Greek salad and roasted potatoes for a complete Mediterranean meal.'
    ],
    video: 'https://example.com/video/mediterranean-salmon',
    nutrition: {
      calories: '380 kcal',
      protein: '36g',
      carbs: '2g',
      fat: '24g',
      fiber: '0.5g'
    }
  }
};

// Additional recipes for a wider variety of cuisines
const additionalRecipes: { [key: string]: Recipe } = {
  'butter chicken': {
    title: 'Creamy Butter Chicken',
    cookTime: '50 minutes',
    servings: 4,
    ingredients: [
      '800g boneless chicken thighs, cut into bite-sized pieces',
      '2 cups tomato puree',
      '1 cup heavy cream',
      '1/2 cup butter',
      '2 large onions, finely chopped',
      '4 cloves garlic, minced',
      '1-inch piece ginger, grated',
      '2 tbsp tandoori masala',
      '1 tbsp garam masala',
      '1 tsp turmeric powder',
      '1 tsp ground cumin',
      '1 tsp red chili powder',
      '1 tbsp dried fenugreek leaves (kasuri methi)',
      '2 tbsp honey or sugar',
      'Salt to taste',
      'Fresh coriander leaves for garnish'
    ],
    instructions: [
      'In a large bowl, mix the chicken with tandoori masala, turmeric, and 1 tsp salt. Let it marinate for at least 30 minutes or up to overnight in the refrigerator.',
      'Heat 2 tbsp of butter in a large pan over medium-high heat. Add the marinated chicken pieces and cook until they are browned on all sides, about 5-7 minutes. Remove and set aside.',
      'In the same pan, add the remaining butter. Add onions and sauté until they turn translucent.',
      'Add ginger and garlic, and sauté for another 1-2 minutes until fragrant.',
      'Add tomato puree, garam masala, cumin, red chili powder, and salt. Cook the mixture for about 10-15 minutes until the oil starts to separate from the sauce.',
      'Return the chicken to the pan and mix well with the sauce. Cook for 5 minutes.',
      'Reduce the heat and add the heavy cream, stirring continuously to avoid curdling.',
      'Add honey or sugar and dried fenugreek leaves. Mix well and simmer for 5-10 minutes until the chicken is fully cooked and the sauce has thickened slightly.',
      'Garnish with fresh coriander leaves before serving. Enjoy with naan bread or steamed rice.'
    ],
    tips: [
      'For a richer flavor, use bone-in chicken pieces and remove the bones before serving.',
      'If the sauce is too thick, add a little water or chicken stock to achieve your desired consistency.',
      'You can substitute heavy cream with coconut cream for a dairy-free version.'
    ],
    video: 'https://example.com/video/butter-chicken',
    nutrition: {
      calories: '580 kcal',
      protein: '42g',
      carbs: '15g',
      fat: '39g',
      fiber: '2g'
    }
  },
  'pad thai': {
    title: 'Authentic Pad Thai',
    cookTime: '30 minutes',
    servings: 4,
    ingredients: [
      '8 oz rice noodles',
      '2 tbsp vegetable oil',
      '2 eggs, lightly beaten',
      '2 cloves garlic, minced',
      '8 oz tofu, cut into small cubes (or chicken/shrimp)',
      '2 cups bean sprouts',
      '4 green onions, chopped',
      '1/4 cup roasted peanuts, chopped',
      '1/4 cup fresh cilantro, chopped',
      'Lime wedges for serving',
      'For the sauce:',
      '3 tbsp fish sauce',
      '3 tbsp brown sugar',
      '2 tbsp tamarind paste',
      '1 tbsp rice vinegar',
      '1 tsp sriracha sauce (optional)'
    ],
    instructions: [
      'Soak the rice noodles in hot water for 8-10 minutes until they're soft but still firm. Drain and set aside.',
      'In a small bowl, mix all the sauce ingredients together until the sugar dissolves. Set aside.',
      'Heat oil in a large wok or skillet over medium-high heat. Add the beaten eggs and scramble until just set, about 30 seconds.',
      'Add garlic and stir for 15 seconds until fragrant.',
      'Add tofu (or protein of choice) and cook until lightly browned, about 3-4 minutes.',
      'Add the drained noodles and the prepared sauce. Toss well and cook for 2-3 minutes until the noodles absorb the sauce.',
      'Add bean sprouts and half the green onions. Stir-fry for another minute.',
      'Remove from heat and transfer to serving plates.',
      'Garnish with the remaining green onions, chopped peanuts, cilantro, and lime wedges.',
      'Serve hot and enjoy!'
    ],
    tips: [
      'Don't soak the noodles for too long or they'll become mushy when stir-fried.',
      'Prepare all ingredients before you start cooking as the process goes quickly.',
      'If using chicken or shrimp, cook them thoroughly before adding the noodles.'
    ],
    video: 'https://example.com/video/pad-thai',
    nutrition: {
      calories: '420 kcal',
      protein: '18g',
      carbs: '58g',
      fat: '14g',
      fiber: '4g'
    }
  },
  'tacos al pastor': {
    title: 'Tacos Al Pastor',
    cookTime: '1 hour 30 minutes',
    servings: 6,
    ingredients: [
      '1 kg pork shoulder, thinly sliced',
      '1 pineapple, peeled and sliced',
      '12 small corn tortillas',
      '1 small onion, finely diced',
      '1/2 cup fresh cilantro, chopped',
      'Lime wedges for serving',
      'For the marinade:',
      '3 dried guajillo chilies, stems and seeds removed',
      '2 dried ancho chilies, stems and seeds removed',
      '4 cloves garlic',
      '1/2 onion, roughly chopped',
      '1/4 cup pineapple juice',
      '2 tbsp white vinegar',
      '1 tbsp achiote paste',
      '1 tsp dried oregano',
      '1 tsp ground cumin',
      '1 tsp salt',
      '1/2 tsp black pepper'
    ],
    instructions: [
      'For the marinade: Soak the dried chilies in hot water for 15-20 minutes until soft. Drain.',
      'In a blender, combine the soaked chilies, garlic, onion, pineapple juice, vinegar, achiote paste, oregano, cumin, salt, and pepper. Blend until smooth.',
      'Place the sliced pork in a large bowl or ziplock bag. Pour the marinade over the pork, ensuring all pieces are well coated. Cover and refrigerate for at least 4 hours, preferably overnight.',
      'When ready to cook, preheat your grill or a large skillet over medium-high heat.',
      'Grill the marinated pork for 3-4 minutes on each side until cooked through and slightly charred on the edges.',
      'Grill the pineapple slices for 1-2 minutes per side until lightly caramelized.',
      'Chop the cooked pork and pineapple into small pieces.',
      'Warm the corn tortillas on the grill or in a dry skillet for about 30 seconds per side.',
      'To assemble: Place a portion of the chopped pork on each tortilla, top with pineapple, diced onion, and cilantro.',
      'Serve with lime wedges on the side.'
    ],
    tips: [
      'For authentic flavor, cook the meat on a vertical spit if you have access to one.',
      'Make sure the pork is sliced very thinly for quick cooking and tender results.',
      'If you can't find achiote paste, substitute with 1 tbsp paprika and 1 tsp turmeric.'
    ],
    video: 'https://example.com/video/tacos-al-pastor',
    nutrition: {
      calories: '380 kcal',
      protein: '28g',
      carbs: '24g',
      fat: '18g',
      fiber: '3g'
    }
  }
};

// Merge the recipe collections
Object.assign(mockRecipes, additionalRecipes);

// Function to adjust ingredient quantities based on serving size
const adjustIngredientQuantities = (ingredients: string[], originalServings: number, newServings: number): string[] => {
  if (originalServings === newServings) return ingredients;
  
  const ratio = newServings / originalServings;
  
  return ingredients.map(ingredient => {
    // Match common measurement patterns
    const regex = /^([\d\/\.\s]+)(\s*(?:cup|tablespoon|teaspoon|tbsp|tsp|g|kg|ml|l|oz|lb|pound|gram|piece|clove|bunch)s?)?(.+)$/i;
    const match = ingredient.match(regex);
    
    if (match) {
      const [, amount, unit, rest] = match;
      
      // Parse the amount
      let numAmount: number;
      
      if (amount.includes('/')) {
        // Handle fractions like "1/2"
        const [numerator, denominator] = amount.split('/').map(n => parseFloat(n.trim()));
        numAmount = numerator / denominator;
      } else {
        numAmount = parseFloat(amount.trim());
      }
      
      if (!isNaN(numAmount)) {
        // Adjust the amount
        const newAmount = numAmount * ratio;
        
        // Format the new amount
        let formattedAmount: string;
        if (newAmount < 1 && newAmount > 0) {
          // Convert to fraction if it's a simple fraction
          if (Math.abs(newAmount - 0.25) < 0.01) formattedAmount = '1/4';
          else if (Math.abs(newAmount - 0.33) < 0.01) formattedAmount = '1/3';
          else if (Math.abs(newAmount - 0.5) < 0.01) formattedAmount = '1/2';
          else if (Math.abs(newAmount - 0.66) < 0.01) formattedAmount = '2/3';
          else if (Math.abs(newAmount - 0.75) < 0.01) formattedAmount = '3/4';
          else formattedAmount = newAmount.toFixed(2);
        } else {
          // Round to 1 decimal place if necessary
          formattedAmount = newAmount % 1 === 0 ? newAmount.toString() : newAmount.toFixed(1);
        }
        
        return `${formattedAmount}${unit ? ' ' + unit : ''}${rest}`;
      }
    }
    
    return ingredient;
  });
};

// Generate a recipe based on a dish name, language, and servings
export const generateRecipe = (dishName: string, language: string = 'en', servings: number = 4): Recipe => {
  const normalizedDishName = dishName.toLowerCase().trim();
  
  // Check if we have a mock recipe for this dish
  let recipe = mockRecipes[normalizedDishName] 
    ? {...mockRecipes[normalizedDishName]} 
    : {
        title: dishName.charAt(0).toUpperCase() + dishName.slice(1),
        cookTime: '30 minutes',
        servings: 4,
        ingredients: [
          '2 cups main ingredient',
          '1 tablespoon olive oil',
          '2 cloves garlic, minced',
          '1 onion, chopped',
          'Salt and pepper to taste',
          'Fresh herbs for garnish'
        ],
        instructions: [
          'Prepare all ingredients by washing, peeling, and chopping as needed.',
          'Heat olive oil in a large pan over medium heat.',
          'Add garlic and onion, cook until fragrant and translucent.',
          'Add the main ingredient and cook for about 10 minutes.',
          'Season with salt and pepper to taste.',
          'Garnish with fresh herbs before serving.'
        ],
        tips: [
          'This is a versatile recipe that can be adapted with different spices and herbs.',
          'For a heartier meal, serve with rice or crusty bread.'
        ],
        video: 'https://example.com/video/generic-recipe',
        nutrition: {
          calories: '350 kcal',
          protein: '15g',
          carbs: '30g',
          fat: '18g',
          fiber: '4g'
        }
      };
  
  // Save the original servings
  const originalServings = recipe.servings;
  
  // Adjust ingredient quantities if servings are different
  if (servings !== originalServings) {
    recipe.ingredients = adjustIngredientQuantities(recipe.ingredients, originalServings, servings);
    recipe.servings = servings;
  }
  
  // Save original English recipe before translation
  const originalRecipe = {
    originalTitle: recipe.title,
    originalIngredients: [...recipe.ingredients],
    originalInstructions: [...recipe.instructions]
  };
  
  // Translate the recipe based on the language
  const translatedRecipe = translateRecipe(recipe, language);
  
  // If language is not English, include original English content
  if (language !== 'en') {
    return {
      ...translatedRecipe,
      ...originalRecipe,
      language
    };
  }
  
  return translatedRecipe;
};

// Generate a recipe based on provided ingredients
export const generateRecipeFromIngredients = (ingredientsInput: string, language: string = 'en', servings: number = 4): Recipe => {
  const ingredientsList = ingredientsInput.split(',').map(item => item.trim());
  
  // Mock functionality to choose a recipe based on ingredients
  // In a real app, this would be a more complex algorithm or AI model
  
  // Count how many ingredients match with each recipe
  const recipeMatches = Object.entries(mockRecipes).map(([key, recipe]) => {
    const normalizedRecipeIngredients = recipe.ingredients.map(ing => ing.toLowerCase());
    const matchCount = ingredientsList.filter(ing => 
      normalizedRecipeIngredients.some(recipeIng => recipeIng.includes(ing.toLowerCase()))
    ).length;
    
    return { key, matchCount, matchRatio: matchCount / ingredientsList.length };
  });
  
  // Sort by match ratio and get the best match
  recipeMatches.sort((a, b) => b.matchRatio - a.matchRatio);
  const bestMatch = recipeMatches[0].key;
  
  // Get the recipe and customize it with the user's ingredients
  let recipe = { ...mockRecipes[bestMatch] };
  
  // Customize the recipe title to reflect it's based on user ingredients
  recipe.title = `${recipe.title} (Your Ingredients)`;
  
  // Generate a list of missing ingredients that might be important
  const recipeIngredients = recipe.ingredients.map(ing => ing.toLowerCase());
  const missingImportantIngredients = recipeIngredients.filter(ing => 
    !ingredientsList.some(userIng => ing.includes(userIng.toLowerCase()))
  ).slice(0, 3);
  
  if (missingImportantIngredients.length > 0) {
    recipe.tips = [
      `Consider adding ${missingImportantIngredients.join(', ')} for the most authentic flavor.`,
      ...(recipe.tips || [])
    ];
  }
  
  // Adjust servings
  if (servings !== recipe.servings) {
    recipe.ingredients = adjustIngredientQuantities(recipe.ingredients, recipe.servings, servings);
    recipe.servings = servings;
  }
  
  // Save original English recipe before translation
  const originalRecipe = {
    originalTitle: recipe.title,
    originalIngredients: [...recipe.ingredients],
    originalInstructions: [...recipe.instructions]
  };
  
  // Translate the recipe based on the language
  const translatedRecipe = translateRecipe(recipe, language);
  
  // If language is not English, include original English content
  if (language !== 'en') {
    return {
      ...translatedRecipe,
      ...originalRecipe,
      language
    };
  }
  
  return translatedRecipe;
};

// In a real implementation, you'd have different translations or API calls for different languages
export const translateRecipe = (recipe: Recipe, language: string): Recipe => {
  // This is a simple mock implementation
  // In a real app, you would translate the content or call a translation API
  
  if (language === 'en') {
    return recipe;
  }
  
  // Basic translation mapping for demonstration
  const translations: {[key: string]: {title: string}} = {
    'es': { title: `${recipe.title} (Spanish Version)` },
    'fr': { title: `${recipe.title} (French Version)` },
    'de': { title: `${recipe.title} (German Version)` },
    'it': { title: `${recipe.title} (Italian Version)` },
    'zh': { title: `${recipe.title} (Chinese Version)` },
    'ja': { title: `${recipe.title} (Japanese Version)` },
    'ko': { title: `${recipe.title} (Korean Version)` },
    'ar': { title: `${recipe.title} (Arabic Version)` },
    'hi': { title: `${recipe.title} (Hindi Version)` },
    'te': { title: `${recipe.title} (Telugu Version)` },
  };
  
  if (translations[language]) {
    return {
      ...recipe,
      title: translations[language].title,
      // Here we would also translate ingredients and instructions
      // This is just a mock so we're adding a language indicator
      ingredients: recipe.ingredients.map(ing => `${ing} (${language})`),
      instructions: recipe.instructions.map(ins => `${ins} (${language})`)
    };
  }
  
  // Default fallback
  return {
    ...recipe,
    title: `${recipe.title} (${language})`,
    ingredients: recipe.ingredients.map(ing => `${ing} (${language})`),
    instructions: recipe.instructions.map(ins => `${ins} (${language})`)
  };
};
