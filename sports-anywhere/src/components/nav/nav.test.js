import React from 'react';
import { shallow } from 'enzyme';

import Nav from './index';

import logo from '../../assets/logo.svg';

const setup = (partialProps) => {
    const props = {
        id: 1,
        title: "App Title",
        logo: logo,
        ...partialProps,
      }
    const wrapper = shallow(<Nav { ...props } />);
    return {
        wrapper,
        props,
    }
}

describe('Nav component', () => {
    it('component renders correctly', () => {
        const { wrapper } = setup();
        expect(wrapper).toMatchSnapshot();
    })
})