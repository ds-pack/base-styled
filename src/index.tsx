import React from 'react'
import { omit } from '@styled-system/props'
import styled from 'styled-components'
let { forwardRef } = React

let Primitive = styled('div')``

let filter = /(fontSize)/

function enhancedOmit(props) {
  let next = {}
  for (let prop in props) {
    if (filter.test(prop)) {
      continue
    }
    next[prop] = props[prop]
  }
  return omit(next)
}

export default forwardRef(function Base(props, ref) {
  return <Primitive {...enhancedOmit(props)} ref={ref} />
})
