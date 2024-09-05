import React from 'react'

export type UnderlineRef = HTMLElement
export type UnderlineProps = React.HTMLAttributes<UnderlineRef>

/**
 * Render the underline component
 * @param {UnderlineProps} props - The underline component properties
 * @param {UnderlineRef} ref - The underline component reference
 * @returns The rendered underline component
 */
const Underline = React.forwardRef<UnderlineRef, UnderlineProps>(
  ({ children, ...rest }, ref) => {
    return (
      <u ref={ref} {...rest}>
        {children}
      </u>
    )
  }
)

Underline.displayName = 'Underline'

export default Underline
