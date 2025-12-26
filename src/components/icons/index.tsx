// Custom SVG Icons for Unison Valves
// Product-specific icons and illustrations

// Ball Valve Icon
export const BallValveIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="32" cy="32" r="12" fill="currentColor" opacity="0.2"/>
    <circle cx="32" cy="32" r="6" fill="currentColor"/>
    <rect x="28" y="4" width="8" height="12" fill="currentColor" rx="1"/>
    <rect x="4" y="28" width="12" height="8" fill="currentColor" rx="1"/>
    <rect x="48" y="28" width="12" height="8" fill="currentColor" rx="1"/>
  </svg>
);

// Butterfly Valve Icon
export const ButterflyValveIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="26" stroke="currentColor" strokeWidth="2" fill="none"/>
    <ellipse cx="32" cy="32" rx="4" ry="22" fill="currentColor" opacity="0.3" transform="rotate(45 32 32)"/>
    <circle cx="32" cy="32" r="4" fill="currentColor"/>
    <rect x="28" y="2" width="8" height="10" fill="currentColor" rx="1"/>
  </svg>
);

// Gate Valve Icon
export const GateValveIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="24" width="48" height="16" stroke="currentColor" strokeWidth="2" fill="none" rx="2"/>
    <rect x="26" y="8" width="12" height="20" fill="currentColor" opacity="0.3"/>
    <rect x="28" y="2" width="8" height="8" fill="currentColor" rx="1"/>
    <rect x="30" y="10" width="4" height="16" fill="currentColor"/>
    <circle cx="32" cy="6" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
  </svg>
);

// Globe Valve Icon
export const GlobeValveIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="32" cy="36" rx="24" ry="20" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M8 36 L24 36 L24 28 L40 28 L40 36 L56 36" stroke="currentColor" strokeWidth="2" fill="none"/>
    <rect x="28" y="4" width="8" height="16" fill="currentColor" rx="1"/>
    <circle cx="32" cy="8" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
  </svg>
);

// Check Valve Icon
export const CheckValveIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="20" width="56" height="24" stroke="currentColor" strokeWidth="2" fill="none" rx="2"/>
    <path d="M20 32 L32 20 L32 44 Z" fill="currentColor" opacity="0.3"/>
    <path d="M44 24 L44 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M16 32 L24 32" stroke="currentColor" strokeWidth="2"/>
    <path d="M40 32 L52 32" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

// Steam Trap Icon
export const SteamTrapIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="16" y="24" width="32" height="24" stroke="currentColor" strokeWidth="2" fill="none" rx="4"/>
    <circle cx="32" cy="36" r="8" fill="currentColor" opacity="0.2"/>
    <path d="M24 12 Q24 20 28 20 Q32 20 32 12 Q32 20 36 20 Q40 20 40 12" stroke="currentColor" strokeWidth="2" fill="none"/>
    <rect x="4" y="32" width="12" height="8" fill="currentColor" rx="1"/>
    <rect x="48" y="32" width="12" height="8" fill="currentColor" rx="1"/>
  </svg>
);

// Limit Switch Icon
export const LimitSwitchIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="16" width="40" height="32" stroke="currentColor" strokeWidth="2" fill="none" rx="4"/>
    <circle cx="24" cy="32" r="4" fill="currentColor"/>
    <circle cx="40" cy="32" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
    <rect x="20" y="52" width="8" height="8" fill="currentColor" rx="1"/>
    <rect x="36" y="52" width="8" height="8" fill="currentColor" rx="1"/>
    <rect x="28" y="8" width="8" height="8" fill="currentColor" rx="1"/>
  </svg>
);

// Industry Icons
export const OilGasIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 8 L32 20 M24 16 L40 16" stroke="currentColor" strokeWidth="2"/>
    <rect x="20" y="20" width="24" height="36" stroke="currentColor" strokeWidth="2" fill="none" rx="2"/>
    <rect x="24" y="28" width="16" height="4" fill="currentColor" opacity="0.3"/>
    <rect x="24" y="36" width="16" height="4" fill="currentColor" opacity="0.3"/>
    <rect x="24" y="44" width="16" height="4" fill="currentColor" opacity="0.3"/>
  </svg>
);

export const ChemicalIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 8 L24 24 L12 48 L12 56 L52 56 L52 48 L40 24 L40 8" stroke="currentColor" strokeWidth="2" fill="none"/>
    <rect x="24" y="4" width="16" height="8" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M16 44 L48 44 L48 52 L16 52 Z" fill="currentColor" opacity="0.2"/>
    <circle cx="28" cy="48" r="2" fill="currentColor"/>
    <circle cx="36" cy="46" r="3" fill="currentColor"/>
  </svg>
);

export const PharmaIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="8" width="24" height="48" rx="12" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M20 32 L44 32" stroke="currentColor" strokeWidth="2"/>
    <rect x="24" y="36" width="16" height="16" fill="currentColor" opacity="0.2"/>
    <path d="M28 20 L36 20 M32 16 L32 24" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

export const WaterIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 8 C32 8 16 28 16 40 C16 52 24 56 32 56 C40 56 48 52 48 40 C48 28 32 8 32 8Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M24 40 Q32 48 40 40" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="28" cy="44" r="2" fill="currentColor"/>
  </svg>
);

export const PowerIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M36 8 L24 32 L32 32 L28 56 L44 28 L36 28 Z" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

export const FoodIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="36" r="20" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M20 36 Q26 28 32 36 Q38 44 44 36" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M32 16 L32 8 M24 18 L20 12 M40 18 L44 12" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

// Certification Icons
export const ISOIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M20 24 L20 40 M24 24 L24 40 M28 24 L28 40 L36 24 L36 40 M40 24 L48 24 M44 24 L44 40 M40 40 L48 40" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

export const CertificateIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="8" width="48" height="36" stroke="currentColor" strokeWidth="2" fill="none" rx="2"/>
    <path d="M16 20 L48 20 M16 28 L40 28 M16 36 L32 36" stroke="currentColor" strokeWidth="2"/>
    <circle cx="48" cy="48" r="12" fill="currentColor" opacity="0.2" stroke="currentColor" strokeWidth="2"/>
    <path d="M44 48 L47 51 L52 45" stroke="currentColor" strokeWidth="2" fill="none"/>
  </svg>
);

export const FireSafeIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 8 C32 8 20 24 20 40 C20 52 26 56 32 56 C38 56 44 52 44 40 C44 24 32 8 32 8Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M32 24 C32 24 26 32 26 40 C26 46 29 48 32 48 C35 48 38 46 38 40 C38 32 32 24 32 24Z" fill="currentColor" opacity="0.3"/>
  </svg>
);

// Generic UI Icons (using simple paths for consistency with Lucide)
export const DownloadIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7,10 12,15 17,10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

