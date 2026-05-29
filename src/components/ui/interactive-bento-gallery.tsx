'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export interface MediaItemType {
  id: number
  type: 'image' | 'video'
  title: string
  desc: string
  url: string
  span: string
}

// ── MediaItem ──────────────────────────────────────────────────────────────
const MediaItem = ({
  item,
  className,
  onClick,
}: {
  item: MediaItemType
  className?: string
  onClick?: () => void
}) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isInView, setIsInView] = useState(false)
  const [isBuffering, setIsBuffering] = useState(true)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => setIsInView(e.isIntersecting)),
      { root: null, rootMargin: '50px', threshold: 0.1 }
    )
    if (videoRef.current) observer.observe(videoRef.current)
    return () => { if (videoRef.current) observer.unobserve(videoRef.current) }
  }, [])

  useEffect(() => {
    let mounted = true
    const play = async () => {
      if (!videoRef.current || !isInView || !mounted) return
      try {
        if (videoRef.current.readyState >= 3) {
          setIsBuffering(false)
          await videoRef.current.play()
        } else {
          setIsBuffering(true)
          await new Promise((res) => { if (videoRef.current) videoRef.current.oncanplay = res })
          if (mounted) { setIsBuffering(false); await videoRef.current.play() }
        }
      } catch (e) { console.warn('Video playback failed:', e) }
    }
    if (isInView) { play() } else if (videoRef.current) { videoRef.current.pause() }
    return () => {
      mounted = false
      if (videoRef.current) {
        videoRef.current.pause()
        videoRef.current.removeAttribute('src')
        videoRef.current.load()
      }
    }
  }, [isInView])

  if (item.type === 'video') {
    return (
      <div className={`${className} relative overflow-hidden`}>
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          onClick={onClick}
          playsInline muted loop preload="auto"
          style={{ opacity: isBuffering ? 0.8 : 1, transition: 'opacity 0.2s', willChange: 'transform' }}
        >
          <source src={item.url} type="video/mp4" />
        </video>
        {isBuffering && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/10">
            <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          </div>
        )}
      </div>
    )
  }

  return (
    <img
      src={item.url}
      alt={item.title}
      className={`${className} cursor-pointer`}
      onClick={onClick}
      loading="lazy"
      decoding="async"
    />
  )
}

// ── GalleryModal ───────────────────────────────────────────────────────────
interface GalleryModalProps {
  selectedItem: MediaItemType
  isOpen: boolean
  onClose: () => void
  setSelectedItem: (item: MediaItemType | null) => void
  mediaItems: MediaItemType[]
}

const GalleryModal = ({ selectedItem, isOpen, onClose, setSelectedItem, mediaItems }: GalleryModalProps) => {
  const [dockPosition, setDockPosition] = useState({ x: 0, y: 0 })
  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-40 bg-[#0A0F1E]/60 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Main modal */}
      <motion.div
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.96, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        className="fixed inset-4 sm:inset-8 md:inset-16 z-50 rounded-[var(--radius-xl)] overflow-hidden
                   bg-[#F8F6F1]/95 backdrop-blur-xl flex flex-col"
        style={{ boxShadow: '0 40px 120px -20px rgba(10,15,30,0.4)' }}
      >
        {/* Image principale */}
        <div className="flex-1 min-h-0 p-4 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedItem.id}
              className="relative max-w-full max-h-full rounded-[var(--radius-lg)] overflow-hidden inline-flex"
              initial={{ y: 16, scale: 0.97, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 500, damping: 30 } }}
              exit={{ y: 16, scale: 0.97, opacity: 0, transition: { duration: 0.15 } }}
              onClick={onClose}
            >
              <MediaItem item={selectedItem} className="max-w-full max-h-[78vh] w-auto h-auto object-contain" onClick={onClose} />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#0A0F1E]/70 to-transparent">
                <h3 className="text-white font-medium" style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 300 }}>
                  {selectedItem.title}
                </h3>
                {selectedItem.desc && (
                  <p className="text-white/65 text-sm mt-1" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>
                    {selectedItem.desc}
                  </p>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bouton fermer */}
        <motion.button
          className="absolute top-3 right-3 p-2 rounded-full bg-[#0A0F1E]/10 text-ink hover:bg-[#0A0F1E]/20 transition-colors"
          onClick={onClose}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Fermer"
        >
          <X className="w-4 h-4" />
        </motion.button>
      </motion.div>

      {/* Dock flottant */}
      <motion.div
        drag dragMomentum={false} dragElastic={0.1}
        initial={false}
        animate={{ x: dockPosition.x, y: dockPosition.y }}
        onDragEnd={(_, info) => setDockPosition(prev => ({ x: prev.x + info.offset.x, y: prev.y + info.offset.y }))}
        className="fixed z-[60] left-1/2 bottom-6 -translate-x-1/2 touch-none"
      >
        <div className="rounded-[var(--radius-xl)] bg-white/80 backdrop-blur-xl border border-[var(--line)] shadow-lg cursor-grab active:cursor-grabbing">
          <div className="flex items-center -space-x-2 px-3 py-2">
            {mediaItems.map((item, index) => (
              <motion.div
                key={item.id}
                onClick={(e) => { e.stopPropagation(); setSelectedItem(item) }}
                style={{ zIndex: selectedItem.id === item.id ? 30 : mediaItems.length - index }}
                className={`relative group w-9 h-9 md:w-10 md:h-10 flex-shrink-0 rounded-[8px] overflow-hidden cursor-pointer ${
                  selectedItem.id === item.id ? 'ring-2 ring-blue-500/70 shadow-lg' : 'hover:ring-2 hover:ring-[var(--line)]'
                }`}
                initial={{ rotate: index % 2 === 0 ? -12 : 12 }}
                animate={{
                  scale: selectedItem.id === item.id ? 1.2 : 1,
                  rotate: selectedItem.id === item.id ? 0 : index % 2 === 0 ? -12 : 12,
                  y: selectedItem.id === item.id ? -8 : 0,
                }}
                whileHover={{ scale: 1.3, rotate: 0, y: -10, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
              >
                <MediaItem item={item} className="w-full h-full object-cover" onClick={() => setSelectedItem(item)} />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white/20" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  )
}

// ── InteractiveBentoGallery ────────────────────────────────────────────────
interface InteractiveBentoGalleryProps {
  mediaItems: MediaItemType[]
  eyebrow?: string
  title: string
  description?: string
}

const InteractiveBentoGallery: React.FC<InteractiveBentoGalleryProps> = ({
  mediaItems,
  eyebrow,
  title,
  description,
}) => {
  const [selectedItem, setSelectedItem] = useState<MediaItemType | null>(null)
  const [items, setItems] = useState(mediaItems)
  const [isDragging, setIsDragging] = useState(false)

  return (
    <div className="w-full px-6 py-16 max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-10 text-center">
        {eyebrow && (
          <motion.p
            className="eyebrow mb-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ type: 'spring', stiffness: 80, damping: 18 }}
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h2
          className="text-ink"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ type: 'spring', stiffness: 80, damping: 18, delay: 0.06 }}
        >
          {title}
        </motion.h2>
        {description && (
          <motion.p
            className="mt-4 text-ink-soft text-sm"
            style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ type: 'spring', stiffness: 80, damping: 18, delay: 0.1 }}
          >
            {description}
          </motion.p>
        )}
      </div>

      {/* Bento grid + modal */}
      <AnimatePresence mode="wait">
        {selectedItem ? (
          <GalleryModal
            selectedItem={selectedItem}
            isOpen={true}
            onClose={() => setSelectedItem(null)}
            setSelectedItem={setSelectedItem}
            mediaItems={items}
          />
        ) : (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-3 auto-rows-[80px] md:auto-rows-[100px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
            }}
          >
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                layoutId={`media-${item.id}`}
                className={`relative overflow-hidden rounded-[var(--radius-lg)] cursor-move ${item.span}`}
                onClick={() => !isDragging && setSelectedItem(item)}
                variants={{
                  hidden: { y: 40, scale: 0.92, opacity: 0 },
                  visible: {
                    y: 0, scale: 1, opacity: 1,
                    transition: { type: 'spring', stiffness: 280, damping: 24, delay: index * 0.04 },
                  },
                }}
                whileHover={{ scale: 1.02 }}
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={1}
                onDragStart={() => setIsDragging(true)}
                onDragEnd={(_, info) => {
                  setIsDragging(false)
                  const dist = info.offset.x + info.offset.y
                  if (Math.abs(dist) > 50) {
                    const next = [...items]
                    const dragged = next[index]
                    const target = dist > 0 ? Math.min(index + 1, items.length - 1) : Math.max(index - 1, 0)
                    next.splice(index, 1)
                    next.splice(target, 0, dragged)
                    setItems(next)
                  }
                }}
              >
                <MediaItem
                  item={item}
                  className="absolute inset-0 w-full h-full object-cover"
                  onClick={() => !isDragging && setSelectedItem(item)}
                />
                <motion.div
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E]/75 via-[#0A0F1E]/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                    <h3 className="text-white text-xs sm:text-sm font-medium line-clamp-1" style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 300 }}>
                      {item.title}
                    </h3>
                    {item.desc && (
                      <p className="text-white/65 text-[10px] sm:text-xs mt-0.5 line-clamp-2" style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}>
                        {item.desc}
                      </p>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default InteractiveBentoGallery
