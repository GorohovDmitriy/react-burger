import React from 'react'
import ContentLoader from 'react-content-loader'

function LoadingBlock() {
	return (
		<ContentLoader
			speed={2}
			width={270}
			height={420}
			viewBox='0 0 270 420'
			backgroundColor='#ce4040'
			foregroundColor='#d11f1f'
		>
			<rect x='2' y='99' rx='0' ry='0' width='1' height='1' />
			<rect x='2' y='6' rx='12' ry='12' width='250' height='200' />
			<rect x='5' y='217' rx='5' ry='5' width='250' height='25' />
			<rect x='4' y='250' rx='10' ry='10' width='250' height='91' />
			<rect x='115' y='354' rx='10' ry='10' width='140' height='45' />
			<rect x='6' y='364' rx='6' ry='6' width='60' height='30' />
		</ContentLoader>
	)
}

export default LoadingBlock
