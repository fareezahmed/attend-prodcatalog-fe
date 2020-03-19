import React from 'react';
import { mount } from 'enzyme'

import Button from './index';


const setup = (partialProps) => {
    const props = {
        childern: "Facbook",
        ...partialProps,
      }
    const wrapper = mount(<Button { ...props } />);
    return {
        wrapper,
        props,
    }
}

describe('Button component', () => {
    it('Default button component renders correctly', () => {
        const { wrapper } = setup();
        expect(wrapper).toMatchSnapshot();
    })

    it('Primary button component renders correctly', () => {
        const variation = "primary";
        const { wrapper } = setup({variation});
        expect(wrapper).toMatchSnapshot();
    })

    it('Primary button component renders correctly', () => {
        const variation = "secondary";
        const { wrapper } = setup({variation});
        expect(wrapper).toMatchSnapshot();
    })

})