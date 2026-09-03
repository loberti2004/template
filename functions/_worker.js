import { onRequest as testDbApi } from './api/test-db'

export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    console.log('Request received:', request.method, url.pathname)

    if (url.pathname.startsWith('/api/test-db')) {
      console.log('Routing to test-db API')
      if (request.method === 'POST') {
        const response = await testDbApi({ env, request })
        if (response) return response
      }

      return new Response(
        JSON.stringify({
          success: false,
          error: 'Method not allowed. Use POST.',
        }),
        {
          status: 405,
          headers: { 'Content-Type': 'application/json' },
        },
      )
    }

    console.log('Returning default response')
    return new Response('Tabletop Worker is running!', {
      headers: { 'Content-Type': 'text/plain' },
    })
  },
}
