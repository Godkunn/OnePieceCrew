import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#020617] flex items-center justify-center p-8 text-center">
          <div className="max-w-md">
            <h1 className="text-4xl font-black text-red-600 uppercase mb-4">System Failure</h1>
            <p className="text-white/60 font-mono text-sm mb-8">
              The Grand Line is currently experiencing a temporal disturbance. 
              Please try refreshing your Log Pose.
            </p>
            <pre className="bg-black/50 p-4 rounded-xl text-red-400 text-xs overflow-auto text-left mb-8">
              {this.state.error?.message}
            </pre>
            <button 
              onClick={() => window.location.reload()}
              className="px-8 py-3 bg-white text-black font-black uppercase tracking-widest rounded-full hover:bg-red-600 hover:text-white transition-all"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
