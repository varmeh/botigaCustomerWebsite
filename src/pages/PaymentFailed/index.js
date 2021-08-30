import './style.scss'
import { useHistory } from 'react-router'
import failed from '../../assets/order-failed.svg'
import { AppLayout } from '../../components'


export const PaymentFailed = () => {
    const history = useHistory()
    return (
        <AppLayout showNavigation={false}  >
        <div className='failed'>
            <img src={failed} alt='failed...' />
            <p>Payment Failed!</p>
            <span>Incase money is deducted, It will be refunded in 2 days.</span>
            
            <button onClick={() => {
                history.replace('/cart')

            }} >Go to Cart</button>
                
            </div>
        </AppLayout>
    )
}
