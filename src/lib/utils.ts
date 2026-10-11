// cn() — className merger utility
// Merges Tailwind classes, resolves conflicts, handles conditional classes
// Usage: cn('base-class', isActive && 'active-class', className)

type ClassValue = string | undefined | null | false | ClassValue[]

export function cn(...inputs: ClassValue[]): string {
  return inputs
    .flat(Infinity as 0)
    .filter(Boolean)
    .join(' ')
    .trim()
}
