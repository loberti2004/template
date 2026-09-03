export async function onRequest(context) {
  if (context.request.method !== 'POST') {
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

  try {
    const db = context.env.DB
    const result = await db.prepare('SELECT 1 as test').first()

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Database connected successfully!',
        result,
      }),
      {
        headers: { 'Content-Type': 'application/json' },
      },
    )
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      },
    )
  }
}
