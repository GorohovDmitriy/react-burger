import React from 'react'

function Categories({items}) {
	const [activeItem, setActiveItem] = React.useState(null)

	const onSelectItem = (index) => {
		setActiveItem(index)
	}
	return (
		<div className='categories'>
			<ul>
				<li className={activeItem === null ? 'active' : ''} onClick={() => setActiveItem(null)}>
					Все
				</li>
				{items &&
					items.map((name, index) => {
						return (
							<li
								className={activeItem === index ? 'active' : ''}
								onClick={() => onSelectItem(index)}
								key={index}
							>
								{name}
							</li>
						)
					})}
			</ul>
		</div>
	)
}

export default Categories
