'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Star, Camera, Users, Wifi, Car } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

export default function BarPage() {
  const amenities = [
    { icon: Wifi, name: 'Free WiFi', description: 'High-speed internet for work or leisure' },
    { icon: Car, name: 'Parking', description: 'Ample parking space available' },
    { icon: Users, name: 'Group Seating', description: 'Perfect for meetings and gatherings' },
    { icon: Camera, name: 'Instagram Worthy', description: 'Beautiful spots for photos' },
  ];

  const gallery = [
    'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1267360/pexels-photo-1267360.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1267347/pexels-photo-1267347.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1267335/pexels-photo-1267335.jpeg?auto=compress&cs=tinysrgb&w=600',
  ];

  const reviews = [
    {
      name: 'Kwame Asante',
      rating: 5,
      comment: 'Amazing fresh juices! The sugarcane blend is incredible. Perfect atmosphere for work meetings.',
      date: '2 days ago'
    },
    {
      name: 'Ama Osei',
      rating: 5,
      comment: 'Love the tropical vibes and healthy options. Staff is super friendly and knowledgeable.',
      date: '1 week ago'
    },
    {
      name: 'John Mensah',
      rating: 5,
      comment: 'Best juice bar in Accra! The ginger spice blend gives me energy for the whole day.',
      date: '2 weeks ago'
    }
  ];

  return (
    <div className="min-h-screen">
      <div>
        {/* Hero Section */}
        <section className="relative h-96 bg-gradient-to-r from-green-600 to-emerald-600 overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white relative w-full flex flex-col items-center pt-12 text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 font-playfair">
                Visit Our Bar
              </h1>
              <p className="text-xl text-green-100 mb-8">
                Experience the freshest sugarcane beverages in a vibrant,
                welcoming atmosphere
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-green-600 hover:bg-gray-100"
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  Get Directions
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white bg-green-600 text-white hover:bg-white hover:text-green-600"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About Our Bar */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">About Our Bar</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Located in the heart of Spintex Road, Accra, our flagship
                    bar represents 30 years of family tradition in crafting
                    exceptional beverages. We&apos;ve created a modern,
                    comfortable space where health-conscious individuals can
                    enjoy premium sugarcane-based drinks in a vibrant
                    atmosphere.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Whether you&apos;re looking for a quick energy boost, a
                    healthy meal replacement, or a place to meet friends and
                    colleagues, Sugarret Bar offers the perfect environment with
                    free WiFi, comfortable seating, and our signature fresh
                    juices.
                  </p>
                </CardContent>
              </Card>

              {/* Amenities */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Amenities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {amenities.map((amenity, index) => {
                      const Icon = amenity.icon;
                      return (
                        <motion.div
                          key={amenity.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg"
                        >
                          <Icon className="w-6 h-6 text-green-600 mt-1" />
                          <div>
                            <h3 className="font-semibold text-gray-900">
                              {amenity.name}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {amenity.description}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Gallery */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Gallery</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {gallery.map((image, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="relative aspect-square rounded-lg overflow-hidden cursor-pointer"
                      >
                        <Image
                          src={image}
                          alt={`Bar interior ${index + 1}`}
                          className="w-full h-full object-cover"
                          width={500}
                          height={500}
                        />
                        <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors" />
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Reviews */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Star className="w-6 h-6 text-yellow-500 mr-2" />
                    Customer Reviews
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {reviews.map((review, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="border-b border-gray-200 pb-4 last:border-b-0"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-900">
                            {review.name}
                          </h4>
                          <div className="flex items-center space-x-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-4 h-4 fill-yellow-500 text-yellow-500"
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-600 mb-2">{review.comment}</p>
                        <p className="text-sm text-gray-500">{review.date}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Location & Hours */}
              <Card>
                <CardHeader>
                  <CardTitle>Location & Hours</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-green-600 mt-1" />
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="text-sm text-gray-600">
                        Spintex Road, Accra
                        <br />
                        Ghana, West Africa
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-green-600 mt-1" />
                    <div>
                      <p className="font-semibold">Opening Hours</p>
                      <div className="text-sm text-gray-600 space-y-1">
                        <div className="flex justify-between">
                          <span>Mon - Fri</span>
                          <span>8:00 AM - 10:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Saturday</span>
                          <span>8:00 AM - 11:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sunday</span>
                          <span>10:00 AM - 8:00 PM</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-green-600 mt-1" />
                    <div>
                      <p className="font-semibold">Contact</p>
                      <p className="text-sm text-gray-600">
                        +233 24 123 4567
                        <br />
                        +233 50 987 6543
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <MapPin className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                  <Button variant="outline" className="w-full">
                    Order for Pickup
                  </Button>
                </CardContent>
              </Card>

              {/* Special Offers */}
              <Card className="bg-gradient-to-br from-green-50 to-emerald-50">
                <CardHeader>
                  <CardTitle className="text-green-800">
                    Special Offers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-white rounded-lg">
                      <Badge className="mb-2 bg-green-600">Happy Hour</Badge>
                      <p className="text-sm font-semibold">
                        20% off all drinks
                      </p>
                      <p className="text-xs text-gray-600">
                        Daily 3:00 PM - 6:00 PM
                      </p>
                    </div>
                    <div className="p-3 bg-white rounded-lg">
                      <Badge className="mb-2 bg-orange-500">
                        Student Discount
                      </Badge>
                      <p className="text-sm font-semibold">
                        15% off with valid ID
                      </p>
                      <p className="text-xs text-gray-600">Monday - Friday</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card>
                <CardContent className="p-0">
                  <div className="h-48 bg-gradient-to-br from-green-200 to-emerald-300 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-green-600 mx-auto mb-2" />
                      <p className="text-green-800 font-semibold">
                        Interactive Map
                      </p>
                      <p className="text-green-700 text-sm">
                        Click to view location
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}