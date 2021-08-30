import "./style.scss";

import { AppLayout, OrderItem } from "../../components";


const orders = [
  {
    shop: 'Health & Hunger',
    info: 'Delivery by Tue, 4 Sep • 8 AM - 12 PM',
    status: 'Order Placed',
    amount: '240',
    code: '1'
    
  },
  {
    shop: 'The Beatel Leaf Co',
    info: '3 Sept • 10:20 AM',
    status: 'Delivered',
    amount:'300',
    code: '2'
  },
  {
    shop: 'Health & Hunger',
    info: 'Delivery by Tue, 4 Sep • 8 AM - 12 PM',
    status: 'Payment failed',
    amount:'460',
    code: '4'
  },
  {
    shop: 'Health & Hunger',
    info: 'Delivery by Tue, 4 Sep • 8 AM - 12 PM',
    status: 'Paid',
    amount:'330',
    code: '3'
  },
]

export const Orders = () => (
  <AppLayout>
    <div className="orders">
      <p>Orders</p>
      {
        orders.map((item, index) =>(
          <OrderItem 
            {...item}
            key={index}
           />
        ))
      }
      <p variant='outlined' className='pastOrder'>View Past Orders</p>
    </div>
  </AppLayout>
);
