import { type Story } from '@ladle/react'
import React from 'react'

import MainHeading, { type MainHeadingProps } from './main-heading'

export const HelloWorld: Story<MainHeadingProps> = ({ children, className, size }) => (
  <MainHeading className={className} size={size}>
    {children}
  </MainHeading>
)

HelloWorld.args = {
  children: 'HelloWorld',
  size: 'xl',
  className: '',
} as MainHeadingProps

HelloWorld.argTypes = {
  size: {
    control: { type: 'radio' },
    defaultValue: 'base',
    options: ['sm', 'base', 'md', 'lg', 'xl'],
  },
}
