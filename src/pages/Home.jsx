import React from 'react'
import {Categories, SortPopup, PizzaBlock} from '../components'

function Home({items}) {
	return (
		<div className='container'>
			<div className='content__top'>
				<Categories onClickItem items={['Комбо', 'Бургеры', 'Роллы', 'С курицей', 'Креветки']} />
				<SortPopup
					items={[
						{name: 'популярности', type: 'popular'},
						{name: 'цене', type: 'price'},
						{name: 'алфовиту', type: 'alphabet'},
					]}
				/>
			</div>
			<h2 className='content__title'>Все товары</h2>
			<div className='content__items'>
				{items.map((obj) => (
					<PizzaBlock key={obj.id} {...obj} />
				))}
			</div>
		</div>
	)
}

export default Home
