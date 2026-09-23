export function databaseNameForUser(userId: string): string {
  const normalized = userId.trim()
  if (!normalized) throw new Error('userId is required for local database isolation')
  return `zapan-v2:${normalized}`
}
