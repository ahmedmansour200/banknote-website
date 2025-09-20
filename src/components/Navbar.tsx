import { Search, ShoppingCart, User, Menu } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm border-b">
      {/* Top bar */}
      <div className="bg-yellow-100 px-4 py-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-sm text-gray-700">
            Free shipping on orders over $50
          </div>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="text-gray-700 hover:text-gray-900">Help</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Track Order</a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-yellow-500 text-white p-2 rounded mr-2">
              <div className="w-6 h-6 flex items-center justify-center font-bold">H</div>
            </div>
            <span className="text-xl font-semibold text-gray-900">HomeStore</span>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-xl mx-8">
            <div className="relative">
              <Input 
                placeholder="Search products..." 
                className="pl-10 pr-4 py-2 w-full bg-gray-50 border-gray-200"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              Sign In
            </Button>
            <Button variant="ghost" size="sm" className="flex items-center gap-2 relative">
              <ShoppingCart className="w-4 h-4" />
              Cart
              <span className="absolute -top-1 -right-1 bg-yellow-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Button>
          </div>
        </div>

        {/* Navigation menu */}
        <div className="max-w-7xl mx-auto mt-4 pt-4 border-t">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <Button variant="ghost" className="flex items-center gap-2">
                <Menu className="w-4 h-4" />
                Categories
              </Button>
              <nav className="hidden md:flex items-center gap-6">
                <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
                <a href="#" className="text-gray-700 hover:text-gray-900">Furniture</a>
                <a href="#" className="text-gray-700 hover:text-gray-900">Decor</a>
                <a href="#" className="text-gray-700 hover:text-gray-900">Kitchen</a>
                <a href="#" className="text-gray-700 hover:text-gray-900">Cleaning</a>
                <a href="#" className="text-gray-700 hover:text-gray-900">Sale</a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}