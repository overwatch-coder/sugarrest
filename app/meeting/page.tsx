"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Calendar,
  Clock,
  Video,
  MapPin,
  Phone,
  User,
  Mail,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { generateAvailableDates, generateTimeSlots } from "@/lib/generate-fns";

export default function MeetingPage() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [meetingType, setMeetingType] = useState<"video" | "office" | "phone">(
    "video"
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    investmentAmount: "",
    message: "",
  });

  const availableDates = generateAvailableDates(12);

  const meetingTypes = [
    {
      id: "video",
      title: "Video Call",
      description: "Online meeting via Zoom or Google Meet",
      icon: Video,
      duration: "45 minutes",
    },
    {
      id: "office",
      title: "Office Visit",
      description: "Meet at our Spintex Road location",
      icon: MapPin,
      duration: "60 minutes",
    },
    {
      id: "phone",
      title: "Phone Call",
      description: "Traditional phone conversation",
      icon: Phone,
      duration: "30 minutes",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) {
      toast.error("Please select a date and time for your meeting");
      return;
    }
    toast.success(
      "Meeting scheduled successfully! You'll receive a confirmation email shortly."
    );
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      investmentAmount: "",
      message: "",
    });
    setSelectedDate("");
    setSelectedTime("");
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen">
      <div>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center pt-10"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 font-playfair">
                Schedule a Meeting
              </h1>
              <p className="text-xl text-green-100 max-w-3xl mx-auto">
                Meet with our investment team to discuss opportunities and get
                your questions answered
              </p>
            </motion.div>
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Meeting Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Book Your Investment Consultation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">
                        Personal Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                          placeholder="Full Name *"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              name: e.target.value,
                            }))
                          }
                          required
                        />
                        <Input
                          type="email"
                          placeholder="Email Address *"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              email: e.target.value,
                            }))
                          }
                          required
                        />
                        <Input
                          placeholder="Phone Number *"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              phone: e.target.value,
                            }))
                          }
                          required
                        />
                        <Input
                          placeholder="Company (Optional)"
                          value={formData.company}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              company: e.target.value,
                            }))
                          }
                        />
                      </div>
                    </div>

                    {/* Investment Details */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">
                        Investment Interest
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                          placeholder="Potential Investment Amount (₵)"
                          value={formData.investmentAmount}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              investmentAmount: e.target.value,
                            }))
                          }
                        />
                        <div></div>
                      </div>
                      <Textarea
                        placeholder="Tell us about your investment goals and any specific questions you have..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            message: e.target.value,
                          }))
                        }
                        rows={3}
                        className="mt-4"
                      />
                    </div>

                    {/* Meeting Type */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">
                        Meeting Type
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {meetingTypes.map((type) => {
                          const Icon = type.icon;
                          return (
                            <motion.div
                              key={type.id}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <Card
                                className={`cursor-pointer transition-all ${
                                  meetingType === type.id
                                    ? "ring-2 ring-green-500 bg-green-50"
                                    : "hover:shadow-md"
                                }`}
                                onClick={() => setMeetingType(type.id as any)}
                              >
                                <CardContent className="p-4 text-center">
                                  <Icon
                                    className={`w-8 h-8 mx-auto mb-2 ${
                                      meetingType === type.id
                                        ? "text-green-600"
                                        : "text-gray-600"
                                    }`}
                                  />
                                  <h4 className="font-semibold mb-1">
                                    {type.title}
                                  </h4>
                                  <p className="text-sm text-gray-600 mb-2">
                                    {type.description}
                                  </p>
                                  <Badge variant="outline">
                                    {type.duration}
                                  </Badge>
                                </CardContent>
                              </Card>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Date Selection */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">
                        Select Date
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {availableDates.map((date) => (
                          <Button
                            key={date}
                            type="button"
                            variant={
                              selectedDate === date ? "default" : "outline"
                            }
                            onClick={() => setSelectedDate(date)}
                            className="h-auto p-3 flex flex-col"
                          >
                            <span className="text-sm font-semibold">
                              {new Date(date).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                              })}
                            </span>
                            <span className="text-xs">
                              {new Date(date).toLocaleDateString("en-US", {
                                weekday: "short",
                              })}
                            </span>
                          </Button>
                        ))}
                      </div>
                    </div>

                    {/* Time Selection */}
                    {selectedDate && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.3 }}
                      >
                        <h3 className="text-lg font-semibold mb-4">
                          Select Time
                        </h3>
                        <div className="grid grid-cols-3 md:grid-cols-7 gap-3">
                          {generateTimeSlots(selectedDate).map((time) => (
                            <Button
                              key={time}
                              type="button"
                              variant={
                                selectedTime === time ? "default" : "outline"
                              }
                              onClick={() => setSelectedTime(time)}
                              className="h-12"
                            >
                              {time}
                            </Button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    <Button
                      type="submit"
                      className="w-full bg-green-600 hover:bg-green-700"
                      size="lg"
                    >
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule Meeting
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Meeting Summary */}
              {(selectedDate || selectedTime || meetingType) && (
                <Card className="bg-green-50">
                  <CardHeader>
                    <CardTitle className="text-lg text-green-800">
                      Meeting Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {meetingType && (
                        <div className="flex items-center space-x-2">
                          {meetingType === "video" && (
                            <Video className="w-4 h-4 text-green-600" />
                          )}
                          {meetingType === "office" && (
                            <MapPin className="w-4 h-4 text-green-600" />
                          )}
                          {meetingType === "phone" && (
                            <Phone className="w-4 h-4 text-green-600" />
                          )}
                          <span className="text-sm">
                            {
                              meetingTypes.find((t) => t.id === meetingType)
                                ?.title
                            }
                          </span>
                        </div>
                      )}
                      {selectedDate && (
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-green-600" />
                          <span className="text-sm">
                            {formatDate(selectedDate)}
                          </span>
                        </div>
                      )}
                      {selectedTime && (
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-green-600" />
                          <span className="text-sm">{selectedTime}</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* What to Expect */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What to Expect</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span>
                        Detailed discussion of investment opportunities
                      </span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Review of financial projections and returns</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Q&A session with our investment team</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span>Next steps and documentation process</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Need Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-green-600" />
                      <span className="text-sm">+233 24 123 4567</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-green-600" />
                      <span className="text-sm">invest@sugarret.com</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4" size="sm">
                    Call Us Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
