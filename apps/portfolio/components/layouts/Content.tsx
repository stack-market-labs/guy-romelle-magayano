'use client'

import { Key, ReactNode } from 'react'

import { clsx } from 'clsx'
import { usePathname } from 'next/navigation'

import Container from '@/components/Container'

import { isArrayType } from '@/utils/checkTypes'

import type { TWithClassName, TWithIDAndClass } from '@/types/common'

export type TContentLayoutProps<T = object> = T &
  TWithClassName<T> &
  TWithIDAndClass<T> & {
    as?: React.ElementType
    title?: string | null
    intro?: string[] | string | null
    layout?: 'simple' | 'aside'
  }

/**
 * Rendersthe simple layout content.
 * @param props - The props object.
 * @param props.id - The id of the layout.
 * @param props.title - The title of the layout.
 * @param props.intro - The intro of the layout.
 * @param props.children - The children of the layout.
 * @returns The simple layout content component.
 */
const ContentSimple = (props: TContentLayoutProps): ReactNode => {
  const pathname = usePathname()

  return (
    <Container id="hero">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          {props?.title || ''}
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          {isArrayType(props?.intro) && props?.intro?.length > 0
            ? props.intro.map(
                (paragraph: string, index: Key | null | undefined) => {
                  return (
                    <span key={index} className="space-y-7">
                      {paragraph}
                    </span>
                  )
                }
              )
            : props.intro}
        </p>
      </div>
      <div
        className={clsx(
          props?.className || '',
          pathname !== '/' ? 'mt-16 sm:mt-20' : ''
        )}
      >
        {props?.children || ''}
      </div>
    </Container>
  )
}

/**
 * Rendersthe aside layout content.
 * @param {Object} props - The props object.
 * @param {String} props.id - The id of the layout.
 * @param {String} props.title - The title of the layout.
 * @param {String} props.intro - The intro of the layout.
 * @param {ReactNode} props.children - The children of the layout.
 * @returns The aside layout content component.
 */
const ContentAside = (props: TContentLayoutProps): JSX.Element => {
  return (
    <>
      <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
        {props?.title || ''}
      </h1>

      {isArrayType(props?.intro) && props?.intro?.length > 0
        ? props.intro.map(
            (paragraph: string, index: Key | null | undefined) => {
              return (
                <p
                  key={index}
                  className="mt-6 text-base text-zinc-600 dark:text-zinc-400"
                >
                  {paragraph}
                </p>
              )
            }
          )
        : props.intro}
      <div className={clsx('mt-16 sm:mt-20', props?.className || '')}>
        {props?.children || ''}
      </div>
    </>
  )
}

/**
 * Rendersthe content layout.
 * @param {Object} props - The props object.
 * @param {String} props.as - The HTML tag or React component to render as the layout.
 * @param {String} props.className - The class name of the layout.
 * @param {String} props.id - The id of the layout.
 * @param {ReactNode} props.children - The children of the layout.
 * @returns The content layout component.
 */
const ContentLayout = ({
  as: Component = 'div',
  className,
  children,
  layout = 'simple',
  ...rest
}: TContentLayoutProps): JSX.Element => {
  let render: JSX.Element | null = null

  if (layout === 'aside') {
    render = <ContentAside {...rest}>{children}</ContentAside>
  } else {
    render = <ContentSimple {...rest}>{children}</ContentSimple>
  }

  return <Component className={className}>{render}</Component>
}

export default ContentLayout
