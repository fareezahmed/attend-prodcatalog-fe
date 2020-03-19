import React from 'react';
import { shallow } from 'enzyme';

import ProductList from './index';

import { products } from '../../config/data.json';
import { ProductContextProvider } from '../../config/productContext';

const setup = (partialProps) => {
    const props = {
        ...partialProps,
      }
    const wrapper = shallow(
        <ProductContextProvider>
            <ProductList { ...props } />
        </ProductContextProvider>);
    return {
        wrapper,
        props,
    }
}

describe('Product List component', () => {
    it('component renders correctly', () => {
        const localState = products;
        const { wrapper } = setup();
        expect(wrapper).toMatchSnapshot();
    })
})