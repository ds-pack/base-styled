import React from 'react'
import { render } from '@testing-library/react'
import styled from 'styled-components'
import Base from '../index'

let Box = styled(Base)`
  color: red;
`
test('it renders', () => {
  // @ts-ignore
  let { getByTestId } = render(<Box data-testid="foo">Testing</Box>)

  expect(getByTestId('foo')).toBeDefined()
})
