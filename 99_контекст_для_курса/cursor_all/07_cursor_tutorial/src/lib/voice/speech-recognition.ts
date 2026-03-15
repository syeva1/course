/**
 * Voice Search using Web Speech API
 * FREE - Built into modern browsers!
 * Works on Chrome, Edge, Safari (iOS 14.5+)
 */

// TypeScript declarations for Web Speech API
interface SpeechRecognitionEvent extends Event {
  readonly resultIndex: number;
  readonly results: SpeechRecognitionResultList;
}

interface SpeechRecognitionResultList {
  readonly length: number;
  item(index: number): SpeechRecognitionResult;
  [index: number]: SpeechRecognitionResult;
}

interface SpeechRecognitionResult {
  readonly length: number;
  readonly isFinal: boolean;
  item(index: number): SpeechRecognitionAlternative;
  [index: number]: SpeechRecognitionAlternative;
}

interface SpeechRecognitionAlternative {
  readonly transcript: string;
  readonly confidence: number;
}

interface ISpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  maxAlternatives: number;
  start(): void;
  stop(): void;
  abort(): void;
  onerror: ((event: any) => void) | null;
  onend: (() => void) | null;
  onresult: ((event: SpeechRecognitionEvent) => void) | null;
  onstart: (() => void) | null;
}

declare global {
  interface Window {
    SpeechRecognition: new () => ISpeechRecognition;
    webkitSpeechRecognition: new () => ISpeechRecognition;
  }
}

export interface VoiceSearchCallbacks {
  onStart?: () => void;
  onResult: (transcript: string, isFinal: boolean) => void;
  onEnd?: () => void;
  onError?: (error: string) => void;
}

export class VoiceSearch {
  private recognition: ISpeechRecognition | null = null;
  private isListening = false;

  constructor() {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = 
        window.SpeechRecognition || window.webkitSpeechRecognition;
      
      if (SpeechRecognition) {
        this.recognition = new SpeechRecognition();
        this.recognition.continuous = false; // Stop after one result
        this.recognition.interimResults = true; // Get partial results
        this.recognition.lang = 'en-US';
        this.recognition.maxAlternatives = 1;
      }
    }
  }

  /**
   * Check if voice search is supported in this browser
   */
  isSupported(): boolean {
    return this.recognition !== null;
  }

  /**
   * Start listening for voice input
   */
  start(callbacks: VoiceSearchCallbacks): void {
    if (!this.recognition) {
      callbacks.onError?.('Voice search not supported in this browser');
      return;
    }

    if (this.isListening) {
      return; // Already listening
    }

    // Set up event handlers
    this.recognition.onstart = () => {
      this.isListening = true;
      callbacks.onStart?.();
    };

    this.recognition.onresult = (event: SpeechRecognitionEvent) => {
      const results = event.results;
      const lastResult = results[results.length - 1];
      const transcript = lastResult[0].transcript;
      const isFinal = lastResult.isFinal;

      callbacks.onResult(transcript, isFinal);
    };

    this.recognition.onend = () => {
      this.isListening = false;
      callbacks.onEnd?.();
    };

    this.recognition.onerror = (event: any) => {
      this.isListening = false;
      
      let errorMessage = 'Voice recognition error';
      
      switch (event.error) {
        case 'no-speech':
          errorMessage = 'No speech detected. Please try again.';
          break;
        case 'audio-capture':
          errorMessage = 'No microphone found. Please check your device.';
          break;
        case 'not-allowed':
          errorMessage = 'Microphone permission denied. Please enable it in your browser settings.';
          break;
        case 'network':
          errorMessage = 'Network error. Please check your connection.';
          break;
        case 'aborted':
          errorMessage = 'Voice recognition aborted.';
          break;
        default:
          errorMessage = `Voice recognition error: ${event.error}`;
      }

      callbacks.onError?.(errorMessage);
    };

    // Start recognition
    try {
      this.recognition.start();
    } catch (error) {
      callbacks.onError?.('Failed to start voice recognition');
    }
  }

  /**
   * Stop listening
   */
  stop(): void {
    if (this.recognition && this.isListening) {
      this.recognition.stop();
    }
  }

  /**
   * Abort current recognition
   */
  abort(): void {
    if (this.recognition && this.isListening) {
      this.recognition.abort();
    }
  }

  /**
   * Check if currently listening
   */
  getIsListening(): boolean {
    return this.isListening;
  }
}

/**
 * Singleton instance for easy use
 */
let voiceSearchInstance: VoiceSearch | null = null;

export function getVoiceSearch(): VoiceSearch {
  if (!voiceSearchInstance) {
    voiceSearchInstance = new VoiceSearch();
  }
  return voiceSearchInstance;
}

/**
 * Helper hook for React components
 */
export function useVoiceSearch() {
  const voiceSearch = getVoiceSearch();
  
  return {
    isSupported: voiceSearch.isSupported(),
    start: (callbacks: VoiceSearchCallbacks) => voiceSearch.start(callbacks),
    stop: () => voiceSearch.stop(),
    abort: () => voiceSearch.abort(),
  };
}

