'use client'
import React, {  useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BookOpen, Brain, ChevronRight, Sparkles, BookOpenCheck, Lightbulb, User, Mail, Lock } from 'lucide-react'
import { InputIcon } from '@/components/ui/input-icon'

export default function App() {
  const [isSignUp, setIsSignUp] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Aquí iría la lógica de autenticación o registro
    console.log('Formulario enviado:', isSignUp ? 'Registro' : 'Inicio de sesión')
  }

  function FeatureCard( { icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 backdrop-blur-lg rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-purple-500/20"
      >
        <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-full p-3 mb-4">
          {icon}
        </div>
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-300 text-sm">{description}</p>
      </motion.div>
    )
  }
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex flex-col lg:flex-row">
      {/* Panel izquierdo - Formulario */}
      <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto w-full space-y-8"
        >
          <motion.div 
            className="flex items-center justify-center space-x-2 text-3xl font-bold"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <BookOpen className="w-10 h-10 text-purple-500" />
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
              Librer<span className="text-purple-500">IA</span>
            </span>
            <Brain className="w-10 h-10 text-pink-500" />
          </motion.div>

          <motion.h2 
            className="text-3xl font-extrabold text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {isSignUp ? 'Crea tu cuenta' : 'Bienvenido de vuelta'}
          </motion.h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <AnimatePresence mode="wait">
              {isSignUp && (
                <motion.div
                  key="signup-fields"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-gray-300">Nombre</Label>
                      <InputIcon icon={<User className="h-4 w-4 text-gray-500" />}>
                      <Input id="name" type="text"  className="mt-1 bg-gray-800 border-gray-700 text-white pl-10" required />
                      </InputIcon>
                    </div>
                    <div>
                      <Label htmlFor="lastname" className="text-sm font-medium text-gray-300">Apellidos</Label>
                      <InputIcon icon={<User className="h-4 w-4 text-gray-500" />}>
                      <Input id="lastname" type="text"  className="mt-1 bg-gray-800 border-gray-700 text-white pl-10" required />
                      </InputIcon>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div>
              <Label htmlFor="email" className="text-sm font-medium text-gray-300">Email</Label>
              <InputIcon icon={<Mail className="h-4 w-4 text-gray-500" />}>
              <Input id="email" type="email"  className="mt-1 bg-gray-800 border-gray-700 text-white pl-10" required />
              </InputIcon>
            </div>
            <div>
              <Label htmlFor="password" className="text-sm font-medium text-gray-300">Contraseña</Label>
              <InputIcon icon={<Lock className="h-4 w-4 text-gray-500" />}>
              <Input id="password" type="password"  className="mt-1 bg-gray-800 border-gray-700 text-white pl-10" required />
              </InputIcon>
            </div>
            <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
              {isSignUp ? 'Registrarse' : 'Iniciar sesión'}
            </Button>
          </form>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">
              {isSignUp ? '¿Ya tienes una cuenta?' : '¿No tienes una cuenta?'}
            </span>
            <Button
              variant="ghost"
              className="text-purple-400 hover:text-purple-300"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? 'Iniciar sesión' : 'Registrarse'}
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Panel derecho - Contenido visual mejorado */}
      <div className="w-full lg:w-1/2 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 p-8 lg:p-16 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmZmZmMTAiPjwvcmVjdD4KPHBhdGggZD0iTTAgNUw1IDBaTTYgNEw0IDZaTS0xIDFMMSAtMVoiIHN0cm9rZT0iI2ZmZmZmZjIwIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')] opacity-20" />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative z-10 text-center "
        >

          <p
            className="text-2xl text-gray-300 max-w-lg mx-auto mb-8"
          >
            Explora una biblioteca infinita potenciada por IA. Descubre, aprende y crece con LibrerIA.
          </p>
          <div className="grid grid-cols-2 gap-8 ">
            <FeatureCard
              icon={<BookOpenCheck className="w-8 h-8" />}
              title="Libros Ilimitados"
              description="Accede a una vasta colección de libros en cualquier momento y lugar."
            />
            <FeatureCard
              icon={<Sparkles className="w-8 h-8" />}
              title="Recomendaciones IA"
              description="Descubre nuevas lecturas perfectamente adaptadas a tus intereses."
            />
            <FeatureCard
              icon={<Lightbulb className="w-8 h-8" />}
              title="Resúmenes Inteligentes"
              description="Obtén resúmenes generados por IA para una comprensión rápida."
            />
            <FeatureCard
              icon={<Brain className="w-8 h-8" />}
              title="Asistente de Estudio"
              description="Mejora tu aprendizaje con un asistente personalizado impulsado por IA."
            />
          </div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Button className="mt-8 bg-white text-purple-900 hover:bg-gray-100 text-lg px-8 py-3 rounded-full font-semibold transition-all duration-300 ease-in-out transform hover:scale-105">
              Explorar Ahora
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}


