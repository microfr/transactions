import React from 'react'
import { create } from 'react-test-renderer'
import Transactions from '.'

describe('Transactions component', () => {
  const NAME = 'Buckwheat'
  test('Has class \'hello-world\'', () => {
    const { root } = create(<Transactions name={NAME} />)
    expect(root.findByType('div').props.className).toEqual('hello-world')
  })

  test('Has name property', () => {
    const { root } = create(<Transactions name={NAME} />)
    expect(root.props.name).toEqual(NAME)
  })

  test('Matches Transactions innertext.', () => {
    const { root } = create(<Transactions name={NAME} />)
    expect(root.findByType('div').children.join('')).toEqual('Hello Buckwheat!')
  })
})
