import React from 'react';
import { shallow } from 'enzyme';

import ProductDetails from './index';

import { products } from '../../config/data.json';
import { ProductContextProvider } from '../../config/productContext';

const setup = (partialProps) => {
    const props = {
        ...partialProps,
      }
    const wrapper = shallow(
        <ProductContextProvider>
            <ProductDetails { ...props } />
        </ProductContextProvider>);
    return {
        wrapper,
        props,
    }
}

describe('Product List component', () => {
    it('component renders correctly', () => {
        const { wrapper } = setup();
        expect(wrapper).toMatchSnapshot();
    })
})