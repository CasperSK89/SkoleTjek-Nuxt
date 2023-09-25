import { getServerSession } from '#auth'

export default eventHandler(async (event) => {


  const session = await getServerSession(event)


  // Protect all API endpoints inside protected
  if (!event.node.req.url?.startsWith('/api/protected')) {
    return
  }

  if (!session) {
    throw createError({ statusMessage: 'Unauthenticated', statusCode: 403 })
  }

})

