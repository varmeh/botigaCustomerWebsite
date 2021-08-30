import './style.scss'
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { AppLayout , CartTotal, CartItems } from "../../components";
import { OrderShop, Query, DeliverTo , OrderStatus } from './Sections';
import { useHistory } from 'react-router-dom';

export const OrderDetail = () => {
    const history = useHistory()
    return (
        <AppLayout showNavigation={false} >
        
            <KeyboardBackspaceIcon onClick={() => history.push('/orders')} />
            <OrderShop />
            <Query/>
            <DeliverTo /> 
            <OrderStatus />
            <CartItems showButtons={false} />
            <CartTotal />

        </AppLayout>
    )
}

