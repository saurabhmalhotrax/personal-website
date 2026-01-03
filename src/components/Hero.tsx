'use client';

import { useState, useEffect, useRef } from 'react';

// Animated Counter Component
function AnimatedCounter({ end, suffix = '', duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// Typewriter Component
function Typewriter({ text, delay = 50 }: { text: string; delay?: number }) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, delay]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span>
      {displayText}
      <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} text-primary transition-opacity`}>|</span>
    </span>
  );
}

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 bg-gradient-glow relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 md:order-1">
            {/* Small badge */}
            <div className="animate-fade-in mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border text-sm">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-muted">The CPA Who Codes</span>
              </span>
            </div>

            {/* Main headline with typewriter */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-in-delay-1">
              <Typewriter text="Most audit leaders talk about AI." delay={40} />
              <span className="block mt-2 gradient-text text-glow">I ship it.</span>
            </h1>

            {/* Provocative subtext */}
            <p className="text-lg md:text-xl text-foreground-muted leading-relaxed mb-8 animate-fade-in-delay-2">
              I got tired of watching auditors waste 40 hours testing one control.
              So I built a tool that does it in 4.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-3">
              <a
                href="#contact"
                className="btn-primary text-center inline-flex items-center justify-center gap-2"
              >
                Let&apos;s Talk
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#projects"
                className="btn-secondary text-center inline-flex items-center justify-center gap-2"
              >
                See What I&apos;ve Built
              </a>
            </div>

            {/* Animated Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border animate-fade-in-delay-3">
              <div>
                <p className="text-3xl md:text-4xl font-bold gradient-text">
                  <AnimatedCounter end={14} suffix="+" />
                </p>
                <p className="text-sm text-muted mt-1">Years in Audit</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold gradient-text">
                  <AnimatedCounter end={100} suffix="x" />
                </p>
                <p className="text-sm text-muted mt-1">Efficiency Gains</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold gradient-text">
                  <AnimatedCounter end={40} suffix="→4" duration={1500} />
                </p>
                <p className="text-sm text-muted mt-1">Hours per Control</p>
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Video Container */}
              <div className="video-container aspect-video relative animate-float">
                {!isPlaying ? (
                  <>
                    {/* Video Thumbnail / Placeholder */}
                    <div className="absolute inset-0 bg-gradient-to-br from-surface to-background flex flex-col items-center justify-center p-6">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 animate-glow">
                        <span className="text-2xl font-bold text-white">SM</span>
                      </div>
                      <p className="text-foreground font-semibold text-center mb-2">
                        Hear My Story
                      </p>
                      <p className="text-muted text-sm text-center">
                        60-second interview
                      </p>
                    </div>

                    {/* Play Button */}
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="play-button"
                      aria-label="Play video"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </>
                ) : (
                  /* Video Player - Replace src with actual video URL */
                  <div className="absolute inset-0 flex items-center justify-center bg-surface">
                    <p className="text-muted text-center p-4">
                      Video coming soon.<br />
                      <span className="text-sm">NotebookLM interview in production</span>
                    </p>
                    <button
                      onClick={() => setIsPlaying(false)}
                      className="absolute top-2 right-2 w-8 h-8 rounded-full bg-surface-elevated flex items-center justify-center text-muted hover:text-foreground transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                )}
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary/10 rounded-full blur-2xl"></div>

              {/* Floating badges */}
              <div className="absolute -right-4 top-1/4 bg-surface border border-border rounded-lg px-3 py-2 shadow-lg animate-fade-in-delay-2">
                <p className="text-xs text-muted">CPA, CA</p>
                <p className="text-sm font-semibold text-primary">Dual Certified</p>
              </div>

              <div className="absolute -left-4 bottom-1/4 bg-surface border border-border rounded-lg px-3 py-2 shadow-lg animate-fade-in-delay-3">
                <p className="text-xs text-muted">Currently at</p>
                <p className="text-sm font-semibold text-foreground">Genpact</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <svg className="w-6 h-6 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
