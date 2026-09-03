export function checkOrigin(origin) {
  const allowedOrigins = ['http://localhost:5173', 'http://localhost:8788']
  return !!origin && allowedOrigins.includes(origin)
}

export function getUnauthorizedResponse(origin) {
  return new Response(`Forbidden origin: ${origin ?? 'unknown'}`, { status: 403 })
}

export function getErrorResponse(message) {
  return new Response(
    JSON.stringify({
      success: false,
      error: message,
    }),
    {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    },
  )
}

export function getCorrectResponse(data = {}) {
  return new Response(
    JSON.stringify({
      success: true,
      ...data,
    }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    },
  )
}
