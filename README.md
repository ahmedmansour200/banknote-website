# Banknote Authentication E-commerce Website

A modern e-commerce website built with React, TypeScript, and Vite for banknote authentication services.

## 🚀 Features

### Core Features
- ✅ Modern React 18 with TypeScript
- ✅ Fast development with Vite and Hot Module Replacement (HMR)
- ✅ ESLint configuration for code quality
- ✅ Responsive design for all devices
- ✅ E-commerce functionality for banknote authentication services

### 🛒 Shopping Cart Features
- ✅ **Add to Cart**: Add products from any product section
- ✅ **Cart Counter**: Real-time cart count display in header
- ✅ **Quantity Management**: Increase/decrease product quantities
- ✅ **Cart State Management**: Persistent cart state across all components
- ✅ **Product Variants**: Support for different product types and ratings
- ✅ **Cart Operations**: Add, remove, update, and clear cart functionality

## 🛍️ Product Sections

The website includes several product display sections:

1. **Featured Categories** - Showcase of featured grocery products
2. **Products with Discounts** - Time-limited discount products
3. **Category Section** - Product grid by categories
4. **Product Section** - General product listing with cart functionality

## 💻 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Linting**: ESLint with TypeScript support
- **Styling**: Tailwind CSS
- **State Management**: React Context API (Cart Context)
- **Components**: Reusable UI components with TypeScript interfaces

## 🏗️ Project Structure

```
src/
├── components/
│   ├── FeaturedCategories.tsx      # Featured products carousel
│   ├── ProductsWithDiscounts.tsx   # Discount products section
│   ├── ProductSection.tsx          # General product display
│   ├── TopHeader.tsx              # Header with cart counter
│   ├── prductCard/               # Product card components
│   │   ├── index.tsx            # Main product card
│   │   ├── AddToCartButton.tsx  # Add to cart button
│   │   └── QuantityCounter.tsx  # Quantity selector
│   └── ui/
│       └── CategorySection.tsx   # Category display component
├── context/
│   └── CarContext.tsx            # Cart state management
├── data/
│   └── index.ts                 # Product data
├── interfaces/
│   └── index.ts                 # TypeScript interfaces
└── App.tsx                      # Main app component
```

## 🛒 Cart Implementation

### Cart Context
The cart functionality is implemented using React Context API:

```typescript
interface CartContextType {
  cartItems: CartItem[];
  cartCount: number;
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
}
```

### Usage Example
```typescript
import { useCart } from './context/CarContext';

const { addToCart, cartCount } = useCart();

const handleAddToCart = (product: Product) => {
  addToCart({
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.image,
    rating: product.rating
  });
};
```

## 🚀 Getting Started

### Prerequisites
- Node.js 20.19+ or 22.12+ (recommended)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd banknote-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

4. **Build for production**
   ```bash
   npm run build
   ```

### Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build the app for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint for code quality checks

## 🧪 Testing the Cart

1. Navigate to any product section on the website
2. Click the "Add to Cart" button on any product
3. Watch the cart counter in the header update
4. Use quantity controls to adjust product amounts
5. All cart state persists across page navigation

## 🎨 UI Components

### Product Card Features
- Product image with hover effects
- Star ratings display
- Price formatting
- Quantity controls
- Add to cart functionality
- Wishlist and compare options

### Responsive Design
- Mobile-first approach
- Grid layouts adapt to screen size:
  - Mobile: 2 columns
  - Tablet: 3 columns  
  - Desktop: 6 columns

## ⚙️ Development Setup

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

### Vite Plugins

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Code Quality

The project uses ESLint for maintaining code quality and consistency. All cart-related components follow TypeScript best practices.

## 🔧 Configuration

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

### React-specific lint rules

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help with the cart functionality, please open an issue on GitHub.

---

**Happy Shopping! 🛒✨**

