import { forwardRef } from 'react'

import {
  Div,
  type DivisionProps,
  type DivisionRef
} from '@guy-romelle-magayano/react-components/server'

import { cn } from '@guy-romelle-magayano/react-utils'

export type AvatarContainerRef = DivisionRef
export type AvatarContainerProps = DivisionProps

/**
 * Renders avatar container component
 * @param className - The class name of the component.
 * @param rest - Other props to pass down to the component.
 * @returns The avatar container component.
 */
const AvatarContainer = forwardRef<AvatarContainerRef, AvatarContainerProps>(
  ({ className, ...rest }, ref) => {
    return (
      <Div
        ref={ref}
        {...rest}
        className={cn(
          className,
          'h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10'
        )}
      />
    )
  }
)

AvatarContainer.displayName = 'AvatarContainer'

export default AvatarContainer
