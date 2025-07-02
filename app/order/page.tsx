'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ShoppingCart, Plus, Minus, Clock, MapPin, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import Image from 'next/image';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export default function OrderPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orderType, setOrderType] = useState<'pickup' | 'delivery'>('pickup');

  const products = [
    {
      id: '1',
      name: 'Pure Sugarcane Juice',
      description: 'Freshly pressed from premium Ghanaian sugarcane',
      price: 15,
      image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Fresh Juices'
    },
    {
      id: '2',
      name: 'Tropical Blend',
      description: 'Sugarcane with pineapple, mango, and passion fruit',
      price: 22,
      image: 'https://images.pexels.com/photos/1002543/pexels-photo-1002543.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Fresh Juices'
    },
    {
      id: '3',
      name: 'Mint Cooler',
      description: 'Sugarcane juice with fresh mint and cucumber',
      price: 18,
      image: 'https://images.pexels.com/photos/1415749/pexels-photo-1415749.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Fresh Juices'
    },
    {
      id: '4',
      name: 'Ginger Spice',
      description: 'Sugarcane juice with fresh ginger and honey',
      price: 20,
      image: 'https://images.pexels.com/photos/1435747/pexels-photo-1435747.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Fresh Juices'
    },
    {
      id: '5',
      name: 'Green Paradise',
      description: 'Sugarcane with spinach, apple, and lime',
      price: 25,
      image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Health Blends'
    },
    {
      id: '6',
      name: 'Sunset Cocktail',
      description: 'Non-alcoholic blend with tropical fruits',
      price: 28,
      image: 'https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Cocktails'
    }
  ];

  const addToCart = (product: typeof products[0]) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.image
      }];
    });
    toast.success(`${product.name} added to cart!`);
  };

  const updateQuantity = (id: string, change: number) => {
    setCart(prev => {
      return prev.map(item => {
        if (item.id === id) {
          const newQuantity = item.quantity + change;
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
        }
        return item;
      }).filter(item => item.quantity > 0);
    });
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.error('Your cart is empty!');
      return;
    }
    toast.success('Order placed successfully! We\'ll contact you shortly.');
    setCart([]);
  };

  return (
    <div className="min-h-screen">      
      <div>
        {/* Header */}
        <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center pt-10"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 font-playfair">
                Order Fresh
              </h1>
              <p className="text-xl text-green-100 max-w-2xl mx-auto">
                Choose from our premium selection of sugarcane-based beverages
              </p>
            </motion.div>
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Products */}
            <div className="lg:col-span-2">
              {/* Order Type Selection */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Order Type</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <Button
                      variant={orderType === 'pickup' ? 'default' : 'outline'}
                      onClick={() => setOrderType('pickup')}
                      className="flex-1"
                    >
                      <MapPin className="w-4 h-4 mr-2" />
                      Pickup
                    </Button>
                    <Button
                      variant={orderType === 'delivery' ? 'default' : 'outline'}
                      onClick={() => setOrderType('delivery')}
                      className="flex-1"
                    >
                      <Clock className="w-4 h-4 mr-2" />
                      Delivery
                    </Button>
                  </div>
                  {orderType === 'delivery' && (
                    <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                      <p className="text-sm text-yellow-800">
                        Delivery available within 10km of our bar. Additional charges may apply.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {products.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <div className="relative">
                        <Image
                          src={product.image}
                          alt={product.name}
                          className="w-full h-48 object-cover rounded-t-lg"
                          width={500}
                          height={500}
                        />
                        <Badge className="absolute top-2 left-2 bg-green-600">
                          {product.category}
                        </Badge>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-green-600">
                            ₵{product.price}
                          </span>
                          <Button
                            onClick={() => addToCart(product)}
                            className="bg-green-600 hover:bg-green-700"
                          >
                            <Plus className="w-4 h-4 mr-2" />
                            Add
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Cart */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Your Order ({getCartItemCount()})
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {cart.length === 0 ? (
                    <p className="text-gray-500 text-center py-8">Your cart is empty</p>
                  ) : (
                    <>
                      <div className="space-y-4 mb-6">
                        {cart.map((item) => (
                          <div key={item.id} className="flex items-center space-x-3">
                            <Image
                              src={item.image}
                              alt={item.name}
                              className="w-12 h-12 object-cover rounded"
                              width={500}
                              height={500}
                            />
                            <div className="flex-1">
                              <h4 className="font-medium text-sm">{item.name}</h4>
                              <p className="text-green-600 font-bold">₵{item.price}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => updateQuantity(item.id, -1)}
                              >
                                <Minus className="w-3 h-3" />
                              </Button>
                              <span className="w-8 text-center">{item.quantity}</span>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => updateQuantity(item.id, 1)}
                              >
                                <Plus className="w-3 h-3" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="border-t pt-4">
                        <div className="flex justify-between items-center mb-4">
                          <span className="font-bold">Total:</span>
                          <span className="text-2xl font-bold text-green-600">
                            ₵{getCartTotal()}
                          </span>
                        </div>

                        {orderType === 'delivery' && (
                          <div className="mb-4 space-y-2">
                            <Input placeholder="Delivery Address" />
                            <Input placeholder="Phone Number" />
                            <Textarea placeholder="Special Instructions" rows={2} />
                          </div>
                        )}

                        <Button
                          onClick={handleCheckout}
                          className="w-full bg-green-600 hover:bg-green-700"
                          size="lg"
                        >
                          Place Order
                        </Button>

                        <div className="mt-4 text-center">
                          <p className="text-sm text-gray-600 mb-2">Need help?</p>
                          <Button variant="outline" size="sm">
                            <Phone className="w-4 h-4 mr-2" />
                            Call Us
                          </Button>
                        </div>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}