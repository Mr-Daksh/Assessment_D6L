import React from 'react'
import Button1 from './Button1_Testing'
import renderer from 'react-test-renderer'

test('Button Snapshot' , ()=>{
    const component = renderer.create(<Button1 label="Click me"/>); 
    const tree = component.toJSON(); 
    expect(tree).toMatchSnapshot(); 
})