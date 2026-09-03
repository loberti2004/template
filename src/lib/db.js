export async function testD1Connection() {
  const res = await fetch('/api/test-db')
  return res.json()
}
