'use client'

import { createGlobalStyle } from 'styled-components'
import { GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle`
  pre[class*='language-'] {
    color: theme('colors.zinc.100');
  }

  .token.tag,
  .token.class-name,
  .token.selector,
  .token.selector .class,
  .token.selector.class,
  .token.function {
    color: theme('colors.pink.400');
  }

  .token.attr-name,
  .token.keyword,
  .token.rule,
  .token.pseudo-class,
  .token.important {
    color: theme('colors.zinc.300');
  }

  .token.module {
    color: theme('colors.pink.400');
  }

  .token.attr-value,
  .token.class,
  .token.string,
  .token.property {
    color: theme('colors.teal.300');
  }

  .token.punctuation,
  .token.attr-equals {
    color: theme('colors.zinc.500');
  }

  .token.unit,
  .language-css .token.function {
    color: theme('colors.sky.200');
  }

  .token.comment,
  .token.operator,
  .token.combinator {
    color: theme('colors.zinc.400');
  }
`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles
