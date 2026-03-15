"use client";

import { useState, useEffect } from 'react';
import { Mic, MicOff } from 'lucide-react';
import { getVoiceSearch } from '@/lib/voice/speech-recognition';

interface VoiceButtonProps {
  onTranscript: (text: string) => void;
  onStart?: () => void;
  onEnd?: () => void;
}

export function VoiceButton({ onTranscript, onStart, onEnd }: VoiceButtonProps) {
  const [isListening, setIsListening] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check support on mount
    const voiceSearch = getVoiceSearch();
    setIsSupported(voiceSearch.isSupported());
  }, []);

  const handleClick = () => {
    if (!isSupported) {
      setError('Voice search is not supported in your browser. Try Chrome or Safari.');
      return;
    }

    if (isListening) {
      // Stop listening
      const voiceSearch = getVoiceSearch();
      voiceSearch.stop();
      setIsListening(false);
      onEnd?.();
    } else {
      // Start listening
      setError(null);
      const voiceSearch = getVoiceSearch();
      
      voiceSearch.start({
        onStart: () => {
          setIsListening(true);
          onStart?.();
        },
        onResult: (transcript, isFinal) => {
          onTranscript(transcript);
          if (isFinal) {
            setIsListening(false);
            onEnd?.();
          }
        },
        onEnd: () => {
          setIsListening(false);
          onEnd?.();
        },
        onError: (errorMessage) => {
          setError(errorMessage);
          setIsListening(false);
          onEnd?.();
        },
      });
    }
  };

  if (!isSupported) {
    return null; // Hide button if not supported
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={handleClick}
        className={`p-3 rounded-full transition-all duration-200 ${
          isListening
            ? 'bg-red-500 hover:bg-red-600 text-white animate-pulse'
            : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
        }`}
        title={isListening ? 'Stop voice input' : 'Start voice input'}
        aria-label={isListening ? 'Stop voice input' : 'Start voice input'}
      >
        {isListening ? (
          <MicOff className="w-5 h-5" />
        ) : (
          <Mic className="w-5 h-5" />
        )}
      </button>

      {error && (
        <div className="absolute top-full mt-2 left-0 right-0 bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-700 shadow-lg z-10 min-w-[200px]">
          {error}
        </div>
      )}

      {isListening && (
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping" />
      )}
    </div>
  );
}

