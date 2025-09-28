"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import {
  Truck,
  Leaf,
  Users,
  Award,
  ChevronRight,
  Star,
  TrendingUp,
  Phone,
  Mail,
  MapPin,
  Apple,
  Package,
  Clock,
  Shield,
} from "lucide-react";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { cn } from "@/lib/utils";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { SparklesText } from "@/components/ui/sparkles-text";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { Ripple } from "@/components/ui/ripple";

export default function CxCLanding() {
  const [showContactDialog, setShowContactDialog] = useState(false);

  const features = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Farm to Table",
      description:
        "Direct sourcing from premium farms ensuring the freshest produce reaches your doorstep",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Assured",
      description:
        "Rigorous quality checks and certifications guarantee premium fresh fruits and vegetables",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Timely Delivery",
      description:
        "Reliable supply chain with on-time delivery to meet your business requirements",
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustainable Practices",
      description:
        "Committed to eco-friendly farming and packaging solutions for a greener tomorrow",
    },
  ];

  const stats = [
    {
      icon: <Users className="w-6 h-6" />,
      label: "Active Partners",
      value: "5+",
    },
    {
      icon: <Star className="w-6 h-6" />,
      label: "Years of Excellence",
      value: "29",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      label: "Team Members",
      value: "50+",
    },
  ];

  const products = [
    { name: "Pomegranate", icon: "🍎", price: "$2.00" },
    { name: "Kinnu", icon: "🍊", price: "$1.50" },
    { name: "Mango", icon: "🥭", price: "$1.80" },
    { name: "Malta", icon: "🍊", price: "$1.60" },
    { name: "Orange", icon: "🍊", price: "$1.40" },
    { name: "Lemon", icon: "🍋", price: "$1.20" },
    { name: "Gourd", icon: "🥒", price: "$1.00" },
    { name: "Guava", icon: "🍈", price: "$1.30" },
    { name: "Peas", icon: "🟢", price: "$0.80" },
    { name: "Sweet Corn", icon: "🌽", price: "$1.10" },
  ];

  const activeClients = [
    "Zomato",
    "Zepto",
    "Mother Dairy",
    "Swiggy",
    "Reliance",
  ];
  const previousClients = [
    "Udan",
    "Crofarm (Otipy)",
    "Big Apple",
    "Big Basket",
  ];

  return (
    <div className="min-h-screen text-black">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/50 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-green-800 rounded-xl flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <SparklesText
                className="text-2xl text-green-800"
                sparklesCount={5}
              >
                CxC
              </SparklesText>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#about"
                className="text-sm font-semibold text-amber-950 transition-colors"
              >
                About
              </a>
              <a
                href="#clients"
                className="text-sm font-semibold text-amber-950 transition-colors"
              >
                Clients
              </a>
              <a
                href="#products"
                className="text-sm font-semibold text-amber-950 transition-colors"
              >
                Products
              </a>
              <a
                href="#contact"
                className="text-sm font-semibold text-amber-950 transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 min-h-[90vh] flex items-center justify-center">
        <div className="container mx-auto text-center">
          <div className="group relative mx-auto min-w-[250px] max-w-min flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]">
            <span
              className={cn(
                "animate-gradient absolute inset-0 block h-full w-full rounded-[inherit] bg-gradient-to-r from-[#32cd32]/50 via-[#228b22]/50 to-[#32cd32]/50 bg-[length:300%_100%] p-[1px]"
              )}
              style={{
                WebkitMask:
                  "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "destination-out",
                mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                maskComposite: "subtract",
                WebkitClipPath: "padding-box",
              }}
            />
            🌱 <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
            <AnimatedGradientText className="text-sm font-medium">
              Fresh Since 1995
            </AnimatedGradientText>
            <ChevronRight className="ml-1 size-4 stroke-neutral-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </div>

          <h1 className="text-4xl md:text-6xl text-[#40730A] font-bold mb-6 mt-10 leading-tight">
            Premium Fresh Produce for
            <span className="block bg-gradient-to-b from-[#002006] to-green-800 bg-clip-text text-transparent">
              Multinational Corporations & Retail Partners
            </span>
          </h1>

          <p className="text-xl text-gray-800 font-semibold mb-8 max-w-2xl mx-auto">
            Operating with impact since 1995. CxC - Chauhan and Company delivers
            the finest fresh raw fruits and vegetables with a trusted team of
            50+ professionals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              onClick={() => setShowContactDialog(true)}
              className="bg-green-900 hover:bg-green-950 text-white rounded-2xl px-8"
            >
              <Phone className="w-5 h-5 mr-2" />
              Partner With Us
            </Button>

            <Button
              size="lg"
              variant="outline"
              className=" rounded-2xl text-black hover:bg-gray-50 px-8"
              onClick={() =>
                document
                  .getElementById("products")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Package className="w-5 h-5 mr-2" />
              View Products
            </Button>
          </div>

          {/* Contact Dialog */}
          {showContactDialog && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
              <Card className="max-w-md w-full">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <Mail className="w-16 h-16 mx-auto text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">
                    Let's Discuss Your Requirements
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Ready to experience premium quality fresh produce? Get in
                    touch with our team for personalized solutions.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-center gap-2 text-sm">
                      <Mail className="w-4 h-4" />
                      <span>deepanshuchauhan1415@gmail.com</span>
                    </div>
                  </div>
                  <Button
                    onClick={() => setShowContactDialog(false)}
                    className="bg-black hover:bg-gray-800 text-white"
                  >
                    Close
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center space-x-2">
                {stat.icon}
                <div>
                  <div className="font-bold text-lg">{stat.value}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About/Features Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose CxC - Chauhan and Company
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nearly three decades of excellence in fresh produce supply chain
              management
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-2 shadow-none transition-shadow duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-950 rounded-2xl text-white mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-green-950 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Our Trusted Partners
            </h2>
            <p className="text-xl text-gray-600">
              Serving leading companies across India with premium quality
              produce
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* <div className="grid md:grid-cols-2 gap-8"> */}
            <div className="relative flex h-[500px] z-10 w-full flex-col items-center justify-center overflow-hidden">
              <OrbitingCircles iconSize={60} radius={100}>
                <img src="/udan.png" alt="Udan" className="w-30" />
                <img src="/bigapple.png" alt="Big Apple" className="w-30" />
                <img src="/bigbasket.png" alt="Big Basket" className="w-20" />
                <img
                  src="/crofarm.avif"
                  alt="Crofarm (Otipy)"
                  className="w-30"
                />
                {/* <img src="/reliance.png" alt="Reliance" className="w-30" /> */}
              </OrbitingCircles>
              <OrbitingCircles iconSize={100} radius={200} reverse speed={2}>
                <img src="/zomato.png" alt="Zomato" className="w-30" />
                <img src="/jubilant.png" alt="Jubilant" className="w-30" />
                <img src="/zepto.png" alt="Zepto" className="w-30" />
                <img src="/mother.png" alt="Mother Dairy" className="w-30" />
                <img src="/swiggy.png" alt="Swiggy" className="w-30" />
                <img src="/reliance.png" alt="Reliance" className="w-30" />
              </OrbitingCircles>
              <Ripple
                mainCircleOpacity={0.2}
                mainCircleSize={180}
                numCircles={5}
              />
            </div>

            {/* <Card className="border-2 shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-gray-600 text-white rounded-full text-lg font-bold mb-4 mx-auto">
                    <Award className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-center border-b-2 border-gray-600 pb-2">
                    Previous Collaborations
                  </h3>
                  <ul className="space-y-3">
                    {previousClients.map((client, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        <span className="font-medium">{client}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card> */}
          </div>
          {/* </div> */}
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-green-900 font-bold mb-4">
              Premium Fresh Produce
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Handpicked selection of the finest fruits and vegetables sourced
              directly from trusted farms
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {products.map((product, index) => (
              <Card
                key={index}
                className="border-2 group shadow-none overflow-hidden"
              >
                <CardContent className="p-1 text-center relative">
                  <div className="absolute inset-0 "></div>
                  <div className="relative z-10">
                    <div className="text-[50px]">{product.icon}</div>
                    {/* <div className="w-16 h-16 mx-auto mb-4 bg-black rounded-full flex items-center justify-center text-2xl text-white group-hover:bg-green-600 transition-colors duration-300">
                      {product.icon}
                    </div> */}
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <h3 className="text-2xl font-bold text-green-800">{product.price}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-green-950 font-bold mb-2">
              Our Process
            </h2>
            <p className="text-xl text-gray-600">
              Four decades of perfected supply chain excellence
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Source",
                  desc: "Direct partnerships with premium farms",
                },
                {
                  step: "02",
                  title: "Quality Check",
                  desc: "Rigorous inspection and certification",
                },
                {
                  step: "03",
                  title: "Package",
                  desc: "Professional packaging for freshness",
                },
                {
                  step: "04",
                  title: "Deliver",
                  desc: "On-time delivery to your doorstep",
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-950 text-green-200 rounded-full text-lg font-black mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                  {index < 3 && (
                    <ChevronRight className="w-6 h-6 mx-auto mt-4 text-gray-400 hidden md:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-[#041800] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience Premium Quality?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join leading companies who trust CxC for their fresh produce
            requirements
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <RainbowButton
              size="lg"
              variant="outline"
              className="border-white text-black px-8"
              onClick={() =>
                window.open("mailto:Deepanshuchauhan1415@gmail.com", "_blank")
              }
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Us
            </RainbowButton>
            {/* <Button
              size="lg"
              variant="default"
              className="text-white bg-amber-400 px-8"
              onClick={() => setShowContactDialog(true)}
            >
              Get Quote
            </Button> */}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-gray-300">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5" />
              <span>deepanshuchauhan1415@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5" />
              <span>Serving Pan India</span>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5" />
              <span>50+ Team Members</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#041800]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-[#ffffff] rounded-lg flex items-center justify-center">
                <Leaf className="w-5 h-5 text-[#041800]" />
              </div>
              <span className="text-xl font-bold text-white">
                CxC - Chauhan and Company
              </span>
            </div>
            <div className="text-sm text-center text-gray-400">
              © 2024 CxC - Chauhan and Company. Operating with impact since 1995
              ❤️
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
