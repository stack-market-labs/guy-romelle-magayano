import React from 'react'

export type BiDirectionalIsolationRef = HTMLElement
export type BiDirectionalIsolationProps =
  React.HTMLAttributes<BiDirectionalIsolationRef>

/**
 * Render the bi-directional isolation component.
 * @param {BiDirectionalIsolationProps} props - The bi-directional isolation component properties
 * @param {BiDirectionalIsolationRef} ref - The bi-directional isolation component reference
 * @returns The rendered bi-directional isolation component
 */
const BiDirectionalIsolation = React.forwardRef<
  BiDirectionalIsolationRef,
  BiDirectionalIsolationProps
>(({ children, ...rest }, ref) => {
  return (
    <bdi ref={ref} {...rest}>
      {children}
    </bdi>
  )
})

BiDirectionalIsolation.displayName = 'BiDirectionalIsolation'

export default BiDirectionalIsolation
