import React from 'react';
import { mount } from 'enzyme';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import { ProductCard } from './index';

import { products } from '../../config/data.json';

const setup = (partialProps) => {
    const props = {
        id: "1",
        title: "Card Title",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        price: 99.99,
        date: "2020-04-20",
        ...partialProps,
      }
    const wrapper = mount(
        <Router>
            <Switch>
                <Route>
                    <ProductCard { ...props } />
                </Route>
            </Switch>  
        </Router>
       );
    return {
        wrapper,
        props,
    }
}

describe('Card component', () => {
    it('component renders correctly', () => {
        const { wrapper } = setup();
        expect(wrapper).toMatchSnapshot();
    }),
    it('List Card components renders correctly', () => {
        const wrapperListSetup = () => {
            const CardList = products.map(({
                id,
                name,
                description,
                price,
                inventoryDate
              }) => {
                return <ProductCard 
                        key={id} 
                        id={id} 
                        title={name} 
                        desc={description} 
                        price={price} 
                        date={inventoryDate} 
                        />
              })
            const wrapper = mount(
                <Router>
                    <Switch>
                        <Route>
                            <CardList />
                        </Route>
                    </Switch>  
                </Router>
               );
            return {
                wrapper
            }
        }
        const { wrapper } = setup();
        expect(wrapper).toMatchSnapshot();
    })
})