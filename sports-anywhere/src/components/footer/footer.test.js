import React from 'react';
import { mount } from 'enzyme'

import Footer from './index';


const setup = (partialProps) => {
    const props = {
        children: "Copyright © Fareez Ahmed 2014",
        ...partialProps,
      }
    const wrapper = mount(<Footer { ...props } />);
    return {
        wrapper,
        props,
    }
}

describe('Footer component', () => {
    it('Footer component renders correctly', () => {
        const { wrapper } = setup();
        expect(wrapper).toMatchSnapshot();
    })
})