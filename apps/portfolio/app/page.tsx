import { Metadata } from 'next'

import HomeApp from '@/components/app/Home'

import HomeData from '@/data/home'

// import { getAllArticles } from '@/lib/articles'

const data = HomeData()

export const metadata: Metadata = {
  title: data?.meta?.title || '',
  description: data?.meta?.description || '',
  keywords: data?.meta?.keywords || ''
}

/**
 * Renders the home page.
 * @returns The home page component.
 */
const Page = async (): Promise<JSX.Element> => {
  return <HomeApp {...data} />
}

export default Page
