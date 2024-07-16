import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const code = query.code ?? null
  const next = query.next ?? '/dashboard'

  const host = getRequestHost(event)
  const protocol = getRequestProtocol(event)
  const origin = `${protocol}://${host}`

  if (code) {
    const supabase = await serverSupabaseClient(event)
    const { error } = await supabase.auth.exchangeCodeForSession(code as string)
    if (!error) {
      return sendRedirect(event, `${origin}${next}`)
    }
  }

  return sendRedirect(event, `${origin}/login`)
})