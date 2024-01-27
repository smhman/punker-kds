import { type OrderInterface } from '../interfaces/orderInterface'

export const orders: OrderInterface[] = [
  {
    id: '1',
    table: '1',
    price: '2',
    products: [
      {
        id: '1',
        orderId: '1',
        itemId: '1',
        name: 'Product 1',
        quantity: 2,
        price: '2'
        // specialInstructions: {
        //   include: "Extra mayonese, Extra coke, Extra fries",
        //   exclude: "No ketchup"
        // },
        ,isCompleted: false
      },
      {
        id: '2',
        orderId: '1',
        itemId: '1',
        name: 'Product 2',
        quantity: 1,
        price: '4'
        // specialInstructions: {
        //   include: "Extra mayonese, Extra coke, Extra fries",
        //   exclude: ""
        // },
        ,isCompleted: false
      },
      {
        id: '3',
        orderId: '1',
        itemId: '1',
        name: 'Product 3',
        quantity: 1,
        price: '8'
        // specialInstructions: {
        //   include: "",
        //   exclude: "No ketchup"
        // },
        ,isCompleted: false
      }
    ],
    status: 'cancelled',
    timestamp: '2023-07-01T09:00:00.000-05:00'
  },
  {
    id: '2',
    table: '2',
    price: '21',
    products: [
      {
        id: '4',
        orderId: '2',
        itemId: '1',
        name: 'Product 4',
        quantity: 1,
        price: '4'
        // specialInstructions: {
        //   include: "",
        //   exclude: ""
        // },
        ,isCompleted: false
      },
      {
        id: '5',
        orderId: '2',
        itemId: '1',
        name: 'Product 5',
        quantity: 1,
        price: '1',
        
        // specialInstructions: {
        //   include: "",
        //   exclude: ""
        // },
        isCompleted: false
      }
    ],
    status: 'done',
    timestamp: '2023-07-01T22:00:00.000-05:00'
  },
  {
    id: '3',
    table: '3',
    price: '2',
    products: [
      {
        id: '6',
        orderId: '3',
        itemId: '1',
        name: 'Product 6',
        quantity: 1,
        price: '1'
        // specialInstructions: {
        //   include: "",
        //   exclude: ""
        // },
        ,isCompleted: false
      },
      {
        id: '7',
        orderId: '3',
        itemId: '1',
        name: 'Product 7',
        quantity: 1,
        price: '10'
        // specialInstructions: {
        //   include: "",
        //   exclude: ""
        // }
        ,
        isCompleted: true
      }
    ],
    status: 'inProgress',
    timestamp: '2023-07-08T22:50:35.000-05:00'
  },
  {
    id: '4',
    table: '4',
    price: '10',
    products: [
      {
        id: '8',
        orderId: '4',
        itemId: '1',
        name: 'Product 8',
        quantity: 1,
        price: '12',
        // specialInstructions: {
        //   include: "",
        //   exclude: ""
        // },
        isCompleted: false
      },
      {
        id: '9',
        orderId: '4',
        itemId: '1',
        name: 'Product 9',
        quantity: 1,
        price: '2',
        // specialInstructions: {
        //   include: "",
        //   exclude: ""
        // },
        isCompleted: false
      }
    ],
    status: 'pending',
    timestamp: '2023-07-08T22:53:00.000-05:00'
  }
]
