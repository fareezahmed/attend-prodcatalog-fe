import * as Types from '../constants/actionTypes'
import ProductReducer from './productReducer';


const state = Object.assign({},[
    {
        id: 1,
        name:"Wedge Hit Shield",
        description:"The Club Double Wedge Hit Shield is a good addition to your training sessions for a variety of drills which involves breakdown and tackling technique.",
        price: 115,
        inventoryDate:"2020-03-20"
    },
    {
        id: 2,
        name: "Blitz Mouthguard",
        description:"The Blitz Mouthguards are designed for protection",
        price: 5,
        inventoryDate:"2020-03-20"
    },
]);



describe('ProductReducer', () => {
  it('Testing when dispatch on Reset Action', () => {
    const expectedResult = {}
    const action = {
      type: Types.RESET,
    }
    const state = {}
    expect(ProductReducer(state, action)).toEqual(expectedResult)
  })

  it('Testing when dispatch on List Action', () => {
    const expectedResult = state;
    const action = {
      type: Types.LIST_ALL,
    }
    expect(ProductReducer(state, action)).toEqual(expectedResult)
  })

  it('Testing when dispatch on Search Action', () => {
    const expectedResult = Object.assign({},[
        {
            id: 2,
            name: "Blitz Mouthguard",
            description:"The Blitz Mouthguards are designed for protection",
            price: 5,
            inventoryDate:"2020-03-20"
        },
    ]);
    const action = {
      type: Types.SEARCH_PRODUCT,
      payload: "Blitz"
    }
    expect(ProductReducer(state, action)).toEqual(expectedResult)
  })

  it('Testing when dispatch on Update Action', () => {
    const expectedResult = Object.assign({},[
        {
            id: 1,
            name:"Wedge Hit Shield",
            description:"The Club Double Wedge Hit Shield is a good addition to your training sessions for a variety of drills which involves breakdown and tackling technique.",
            price: 5,
            inventoryDate:"2020-03-20"
        },
        {
            id: 2,
            name: "Blitz Mouthguard",
            description:"The Blitz Mouthguards are designed for protection",
            price: 5,
            inventoryDate:"2020-03-20"
        },
    ]);
    const action = {
      type: Types.UPDATE_PRODUCT,
      payload: {
        id: 1,
        name:"Wedge Hit Shield",
        description:"The Club Double Wedge Hit Shield is a good addition to your training sessions for a variety of drills which involves breakdown and tackling technique.",
        price: 5,
        inventoryDate:"2020-03-20"
      }
    }
    expect(ProductReducer(state, action)).toEqual(expectedResult)
  })
  
  it('Testing when dispatch on Add Action', () => {
    const expectedResult = Object.assign({},[
        {
            id: 1,
            name:"Wedge Hit Shield",
            description:"The Club Double Wedge Hit Shield is a good addition to your training sessions for a variety of drills which involves breakdown and tackling technique.",
            price: 5,
            inventoryDate:"2020-03-20"
        },
        {
            id: 2,
            name: "Blitz Mouthguard",
            description:"The Blitz Mouthguards are designed for protection",
            price: 5,
            inventoryDate:"2020-03-20"
        },
        {
            id: 3,
            name: "Action Ball",
            description:"The Action Balls are designed for play",
            price: 9.99,
            inventoryDate:"2020-03-20"
        },
    ]);
    const action = {
      type: Types.ADD_PRODUCT,
      payload: {
        id: 3,
        name: "Action Ball",
        description:"The Action Balls are designed for play",
        price: 9.99,
        inventoryDate:"2020-03-20"
      }
    }
    expect(ProductReducer(state, action)).toEqual(expectedResult)
  })
})