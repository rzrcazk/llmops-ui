import { ssePost } from '@/utils/request'

export const debugApp = (
  app_id: string,
  query: string,
  onData: (event_response: { [key: string]: any }) => void,
) => {
  return ssePost(
    `/apps/${app_id}/debug`,
    {
      body: { query },
    },
    onData,
  )
}
