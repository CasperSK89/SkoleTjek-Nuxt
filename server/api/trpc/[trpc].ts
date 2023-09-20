import { createNuxtApiHandler } from 'trpc-nuxt'
import { appRouter } from '../../trpc/routers'
import { createContext } from '../../trpc/context'

// export API handler
export default createNuxtApiHandler({
  onError(opts) {
    const { error, type, path, input, ctx, req } = opts;
    console.error('Error:', error);
    // if (error.code === 'INTERNAL_SERVER_ERROR') {
    //   // send to bug reporting
    // }
  },


  router: appRouter,
  createContext,
})