interface Window {
  visitors?: {
    track: (event: string, properties?: Record<string, string>) => void
  }
}
