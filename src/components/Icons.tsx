export type IconName = 'shield' | 'cube' | 'cap' | 'cloud' | 'users';

interface IconProps {
  name: IconName;
  className?: string;
}

export function FeatureIcon({ name, className }: IconProps) {
  const common = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  if (name === 'shield') {
    return (
      <svg className={className} viewBox="0 0 48 48" aria-hidden="true" {...common}>
        <path d="M24 4 39 10v11c0 10.6-6.1 18.3-15 23-8.9-4.7-15-12.4-15-23V10Z" />
        <path d="m17.5 24 4.2 4.2 9.3-10" />
      </svg>
    );
  }
  if (name === 'cube') {
    return (
      <svg className={className} viewBox="0 0 48 48" aria-hidden="true" {...common}>
        <path d="m24 4 17 9.5v20L24 44 7 34V13.5Z" />
        <path d="m7 13.5 17 9.7 17-9.7M24 23.2V44" />
      </svg>
    );
  }
  if (name === 'cap') {
    return (
      <svg className={className} viewBox="0 0 48 48" aria-hidden="true" {...common}>
        <path d="M4 17 24 7l20 10-20 10Z" />
        <path d="M12 21.5v12c7.2 5.4 16.8 5.4 24 0v-12M44 17v15" />
      </svg>
    );
  }
  if (name === 'cloud') {
    return (
      <svg className={className} viewBox="0 0 48 48" aria-hidden="true" {...common}>
        <path d="M13 38h24a8 8 0 0 0 1.3-15.9A14.5 14.5 0 0 0 10.7 19 9.6 9.6 0 0 0 13 38Z" />
        <path d="M24 33V18m-6 6 6-6 6 6" />
      </svg>
    );
  }
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true" {...common}>
      <circle cx="18" cy="15" r="7" />
      <circle cx="34" cy="18" r="5.5" />
      <path d="M4 39v-4c0-6.4 5.2-11.5 11.5-11.5h5C26.8 23.5 32 28.6 32 35v4Zm28-12.5c6.6 0 12 4.2 12 9.5v3h-7" />
    </svg>
  );
}

export function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="m16.2 16.2 4 4" />
    </svg>
  );
}

export function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="8" r="4" />
      <path d="M4.8 21a7.2 7.2 0 0 1 14.4 0" />
    </svg>
  );
}
