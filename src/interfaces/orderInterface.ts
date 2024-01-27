export type OrderStatus = 'pending' | 'inProgress' | 'done' | 'cancelled'
export type OrderStatusFilter = 'all' | OrderStatus
export type FilterValue = 'all' | OrderStatus
export type Price = '1' | '2'

export interface SpecialInstructions {
  include: string
  exclude: string
}

export interface OrderInterface {
  id: string
  table: string
  products: OrderItemInterface[]
  status: OrderStatus
  timestamp: string
  price: string
}

export interface OrderItemInterface {
  id: string
  itemId: string
  orderId: OrderInterface['id']
  name: string
  quantity: number
  price: string
  // specialInstructions: SpecialInstructions;
  isCompleted: boolean
}
