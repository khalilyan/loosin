'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Calendar, ArrowUpRight } from 'lucide-react'

const NewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const newsItems = [
    {
      id: 1,
      title: 'New Minimalist Collection',
      subtitle: 'Introducing our latest minimalist jewelry line',
      description: 'Discover the beauty of simplicity with our new collection featuring clean lines and elegant forms.',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&h=600&fit=crop&crop=center',
      date: '2024-01-15',
      category: 'Collection',
      link: '/collections/minimalist'
    },
    {
      id: 2,
      title: 'Sustainable Jewelry',
      subtitle: 'Our commitment to ethical sourcing',
      description: 'Learn about our sustainable practices and ethically sourced materials in every piece we create.',
      image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=1200&h=600&fit=crop&crop=center',
      date: '2024-01-10',
      category: 'Sustainability',
      link: '/sustainability'
    },
    {
      id: 3,
      title: 'Craftsmanship Story',
      subtitle: 'The art behind every piece',
      description: 'Meet our master craftsmen and discover the meticulous process behind each handcrafted jewelry piece.',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1200&h=600&fit=crop&crop=center',
      date: '2024-01-05',
      category: 'Craftsmanship',
      link: '/craftsmanship'
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % newsItems.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length)
  }

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, currentIndex])

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    })
  }

  return (
    <section 
      className="relative h-screen bg-white overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div className="relative w-full h-full">
            <Image
              src={newsItems[currentIndex].image}
              alt={newsItems[currentIndex].title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* Content Overlay */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-2xl">
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mb-4"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-light text-neutral-dark">
                      {newsItems[currentIndex].category}
                    </span>
                    <div className="flex items-center text-white/80 text-sm font-light">
                      <Calendar className="w-4 h-4 mr-2" />
                      {formatDate(newsItems[currentIndex].date)}
                    </div>
                  </div>
                </motion.div>

                <motion.h1
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-5xl md:text-7xl font-light text-white mb-4 elegant-heading"
                >
                  {newsItems[currentIndex].title}
                </motion.h1>

                <motion.h2
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-xl md:text-2xl font-light text-white/90 mb-6"
                >
                  {newsItems[currentIndex].subtitle}
                </motion.h2>

                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-lg text-white/80 mb-8 leading-relaxed font-light max-w-lg"
                >
                  {newsItems[currentIndex].description}
                </motion.p>

                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <button className="group inline-flex items-center px-8 py-3 border border-white/50 text-white font-light text-lg hover:bg-white hover:text-neutral-dark transition-all duration-300">
                    Read More
                    <ArrowUpRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 z-20">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={prevSlide}
          className="w-12 h-12 border border-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>
      </div>

      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={nextSlide}
          className="w-12 h-12 border border-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {newsItems.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full border transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white border-white'
                  : 'bg-transparent border-white/50 hover:border-white'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-8 right-8 z-20">
        <div className="text-white/60 text-sm font-light">
          {String(currentIndex + 1).padStart(2, '0')} / {String(newsItems.length).padStart(2, '0')}
        </div>
      </div>
    </section>
  )
}

export default NewsCarousel
