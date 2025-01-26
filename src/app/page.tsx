"use client"
import {
  ArrowRight,
  Zap,
  Code,
  BotIcon,
  CheckCircle
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { AccordionTrigger } from '@radix-ui/react-accordion'
import { Accordion, AccordionContent, AccordionItem } from '@/components/ui/accordion'
import Navbar from '@/components/widgets/Navbar'
import Footer from '@/components/widgets/Footer'
import Explainer from '@/components/layouts/landing/Explainer'
import Hero from '@/components/layouts/landing/Hero'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br">
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <Hero />
      {/* Explainer */}
      <Explainer />
      {/* Footer */}
      <Footer />
    </div>
  );
}