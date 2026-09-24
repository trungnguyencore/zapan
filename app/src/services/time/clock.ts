export function epochNowMs(): number {
  return Date.now()
}

export function monotonicNowMs(): number {
  return performance.now()
}
