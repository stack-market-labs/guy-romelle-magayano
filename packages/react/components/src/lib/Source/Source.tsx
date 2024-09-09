import React from 'react'

export type SourceRef = HTMLSourceElement
export type SourceProps = React.SourceHTMLAttributes<SourceRef>

/**
 * Render the source component.
 * @param {SourceProps} props - The source component properties
 * @param {SourceRef} ref - The source component reference
 * @returns The rendered source component
 */
const Source = React.forwardRef<SourceRef, SourceProps>(
  ({ children, ...rest }, ref) => {
    return (
      <source ref={ref} {...rest}>
        {children}
      </source>
    )
  }
)

Source.displayName = 'Source'

export default Source
