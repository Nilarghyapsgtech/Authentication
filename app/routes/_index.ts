import { LoaderFunction } from '@remix-run/node'
import { redirect } from 'react-router-dom'
import { requireUserId } from '~/utils/auth.server'

export const loader: LoaderFunction = async ({ request }) => {
  await requireUserId(request)
  return redirect("/home")
}