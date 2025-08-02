import React, { useState, useEffect } from 'react'
import { Lock, Eye, EyeOff, AlertCircle } from 'lucide-react'

interface LockScreenProps {
  onUnlock: () => void
}

const LockScreen: React.FC<LockScreenProps> = ({ onUnlock }) => {
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [currentTime, setCurrentTime] = useState(new Date())
  const [isLoading, setIsLoading] = useState(false)

  // Default password - in a real app, this would be stored securely
  const DEFAULT_PASSWORD = 'admin123'

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    // Simulate authentication delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    if (password === DEFAULT_PASSWORD) {
      onUnlock()
    } else {
      setError('Incorrect password. Please try again.')
      setPassword('')
    }
    setIsLoading(false)
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    })
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="lock-screen-bg min-h-screen flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Time and Date */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="text-6xl font-light text-white mb-2">
            {formatTime(currentTime)}
          </div>
          <div className="text-lg text-white/80">
            {formatDate(currentTime)}
          </div>
        </div>

        {/* Lock Screen Card */}
        <div className="glass-effect rounded-2xl p-8 shadow-2xl animate-slide-up">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-semibold text-white mb-2">
              Sadat Group Management
            </h1>
            <p className="text-white/70">
              Enter your password to continue
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40 input-glow transition-all duration-200"
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {error && (
              <div className="flex items-center gap-2 text-red-300 text-sm animate-pulse-slow">
                <AlertCircle size={16} />
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={!password || isLoading}
              className="w-full py-3 bg-white/20 hover:bg-white/30 disabled:bg-white/10 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Unlocking...
                </div>
              ) : (
                'Unlock'
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-white/50">
              Default password: admin123
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-white/60 text-sm">
            Press Ctrl+L to lock manually
          </p>
        </div>
      </div>
    </div>
  )
}

export default LockScreen