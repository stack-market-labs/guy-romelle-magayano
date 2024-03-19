import { HTMLAttributes, forwardRef } from 'react'

import { customId } from '@guy-romelle-magayano/react-utils/server'

export type QuoteRef = HTMLQuoteElement
export type QuoteProps = HTMLAttributes<QuoteRef>

/**
 * Render the quote component.
 * @param children - The children of the quote.
 * @param rest - The rest of the props of the quote.
 * @returns The rendered quote component.
 */
const Quote = forwardRef<QuoteRef, QuoteProps>(({ children, ...rest }, ref) => {
  return (
    <q ref={ref} {...rest} id={rest.id ?? customId}>
      {children}
    </q>
  )
})

Quote.displayName = 'Quote'

export default Quote
