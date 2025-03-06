
// This is a mock implementation for demonstration purposes
// In a real application, this would connect to a backend service or API

interface Recipe {
  title: string;
  image?: string;
  cookTime: string;
  servings: number;
  ingredients: string[];
  instructions: string[];
  tips?: string[];
  video?: string;
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
    video: 'https://example.com/video/carbonara'
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
    video: 'https://example.com/video/chocolate-cake'
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
    video: 'https://example.com/video/biryani'
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
    video: 'https://example.com/video/mediterranean-salmon'
  }
};

// Generate a recipe based on a dish name
export const generateRecipe = (dishName: string, language: string = 'en'): Recipe => {
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
        video: 'https://example.com/video/generic-recipe'
      };
  
  // Translate the recipe based on the language
  return translateRecipe(recipe, language);
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
    'es': { title: `${recipe.title} (Spanish)` },
    'fr': { title: `${recipe.title} (French)` },
    'de': { title: `${recipe.title} (German)` },
    'it': { title: `${recipe.title} (Italian)` },
    'zh': { title: `${recipe.title} (Chinese)` },
    'ja': { title: `${recipe.title} (Japanese)` },
    'ko': { title: `${recipe.title} (Korean)` },
    'ar': { title: `${recipe.title} (Arabic)` },
    'hi': { title: `${recipe.title} (Hindi)` },
    'te': { title: `${recipe.title} (Telugu)` },
  };
  
  if (translations[language]) {
    return {
      ...recipe,
      title: translations[language].title,
    };
  }
  
  // Default fallback
  return {
    ...recipe,
    title: `${recipe.title} (${language})`,
  };
};
