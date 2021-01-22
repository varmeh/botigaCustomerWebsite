import React from 'react'
import botigaBackground from '../../assets/background.svg'
import { DownloadAppBtn } from '../download-app-btn/downloadAppBtn'
import { Carousel } from '../carousel/carousel'
import appScreen from '../../assets/app-screen.png'
import upiImage from '../../assets/upi.svg'
import privacyLogo from '../../assets/privacy.png'
import './body.css'

export function Body() {
	return (
		<div>
			<LeadingImageRow
				clName={'stepImageAppScreen'}
				image={appScreen}
				primary={'Buy daily needs to specialty items'}
				secondary={
					'You find merchants fulfilling your everyday groceries to occassional hand crafts.'
				}
			/>
			<TrailingImageRow
				clName={'stepImageUPI'}
				image={upiImage}
				primary={'Pay Online'}
				secondary={
					'No more hassle of keeping change! Pay online with Gpay, PhonePE, Paytm or any of your favorite UPI app.'
				}
			/>
			<Infocard />
			<Carousel />
			<DownloadAppCard />
		</div>
	)
}

function LeadingImageRow(props) {
	return (
		<div className='d-flex rowSpace'>
			<div className='d-flex flex-column justify-content-center col-lg-5 col-med-12 col-sm-12'>
				<img alt={props.primary} className={props.clName} src={props.image} />
			</div>
			<div className='col-lg-2 col-sm-12 col-med-12 mobile-row-space' />
			<div className='d-flex flex-column justify-content-center col-lg-4 col-med-12 col-sm-12'>
				<p
					dangerouslySetInnerHTML={{ __html: props.primary }}
					className='primaryText'
				/>
				<p
					dangerouslySetInnerHTML={{ __html: props.secondary }}
					className='secondaryText'
				/>
			</div>
			<div className='col-lg-1 col-sm-12 col-med-12 mobile-row-space' />
		</div>
	)
}

function TrailingImageRow(props) {
	return (
		<div className='d-flex rowSpace col-reverse'>
			<div className='col-lg-1 col-sm-12 col-med-12 mobile-row-space' />
			<div className='d-flex flex-column justify-content-center col-lg-4 col-med-12 col-sm-12'>
				<p
					dangerouslySetInnerHTML={{ __html: props.primary }}
					className='primaryText'
				/>
				<p
					dangerouslySetInnerHTML={{ __html: props.secondary }}
					className='secondaryText'
				/>
			</div>
			<div className='col-lg-2 col-sm-12 col-med-12 mobile-row-space' />
			<div className='d-flex flex-column justify-content-center col-lg-5 col-med-12 col-sm-12'>
				<img alt={props.primary} className={props.clName} src={props.image} />
			</div>
		</div>
	)
}

function Infocard() {
	const style = { height: '64px', width: '64px' }
	return (
		<div className='infoCard rowSpace'>
			<div className='d-flex infoCard-content'>
				<div className='d-flex flex-column justify-content-center align-item-center col-lg-5 col-sm-12 col-med-12'>
					<img alt='privacy-logo' style={style} src={privacyLogo} />
					<p className='primaryText mt-3'>Privacy focused.</p>
					<p className='secondaryText'>
						Just Name, phone number &amp; Delivery Address
					</p>
				</div>
				<div className='col-lg-1 col-sm-12 col-med-12 mobile-row-space' />
				<div className='d-flex flex-column justify-content-center col-lg-6 col-sm-12 col-med-12'>
					<div className='primaryText'>No permissions needed.</div>
					<div className='primaryText-subtext'>We don’t track you</div>
					<p className='secondaryText mt-3'>
						We respect your privacy. We are also humans on the other side and we
						seriosuly have no intention to know what are you doing. We are busy
						working to make your shopping experience better.
					</p>
				</div>
			</div>
		</div>
	)
}

function DownloadAppCard() {
	return (
		<div
			className='downloadAppCard largeRowSpace'
			style={{ backgroundImage: `url(${botigaBackground})` }}>
			<div className='d-flex flex-column justify-content-center downloadAppCard-content'>
				<div className='d-flex justify-content-center col-lg-12 col-sm-12 col-med-12'>
					<p className='downloadAppCard-primaryText'>Download Botiga app now</p>
				</div>
				<div className='d-flex justify-content-center col-lg-12 col-sm-12 col-med-12'>
					<DownloadAppBtn />
				</div>
			</div>
		</div>
	)
}
