import React from 'react'
import {Categories, SortPopup} from '../components'

function Home() {
	return (
		<div className='container'>
			<div className='content__top'>
				<Categories onClickItem items={['Комбо', 'Бургеры', 'Роллы', 'С курицей', 'Креветки']} />
				<SortPopup items={['популярности', 'цене', 'алфовиту']} />
			</div>
			<h2 className='content__title'>Все товары</h2>
			<div className='content__items'>
				<div className='pizza-block'>
					<img
						className='pizza-block__image'
						src='https://burger-king.by/upload/iblock/ad6/ad697f243e27204a18139f92a7c2a9bb.png'
						alt='Pizza'
					/>
					<h4 className='pizza-block__title'>БИГ КИНГ САЛЬСА</h4>
					<div className='pizza-block__selector'>
						<ul>
							<li className='active'>тонкое</li>
							<li>традиционное</li>
						</ul>
						<ul>
							<li className='active'>Сыр</li>
							<li>Бекон</li>
							<li>Перец</li>
						</ul>
					</div>
					<div className='pizza-block__bottom'>
						<div className='pizza-block__price'>от 395 ₽</div>
						<div className='button button--outline button--add'>
							<svg
								width='12'
								height='12'
								viewBox='0 0 12 12'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
									fill='white'
								/>
							</svg>
							<span>Добавить</span>
							<i>2</i>
						</div>
					</div>
				</div>{' '}
				<div className='pizza-block'>
					<img
						className='pizza-block__image'
						src='https://burger-king.by/upload/iblock/db8/db8e1a2b5acaad151f97e0e5a67d6aac.png'
						alt='Pizza'
					/>
					<h4 className='pizza-block__title'>Чизбургер-пицца</h4>
					<div className='pizza-block__selector'>
						<ul>
							<li className='active'>тонкое</li>
							<li>традиционное</li>
						</ul>
						<ul>
							<li className='active'>26 см.</li>

							<li>30 см.</li>
							<li>40 см.</li>
						</ul>
					</div>
					<div className='pizza-block__bottom'>
						<div className='pizza-block__price'>от 395 ₽</div>
						<div className='button button--outline button--add'>
							<svg
								width='12'
								height='12'
								viewBox='0 0 12 12'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
									fill='white'
								/>
							</svg>
							<span>Добавить</span>
							<i>2</i>
						</div>
					</div>
				</div>{' '}
				<div className='pizza-block'>
					<img
						className='pizza-block__image'
						src='https://burger-king.by/upload/iblock/bd2/5d8644op8b0n7euwgrmdq5ta3o05li8h.png'
						alt='Pizza'
					/>
					<h4 className='pizza-block__title'>Чизбургер-пицца</h4>
					<div className='pizza-block__selector'>
						<ul>
							<li className='active'>тонкое</li>
							<li>традиционное</li>
						</ul>
						<ul>
							<li className='active'>26 см.</li>

							<li>30 см.</li>
							<li>40 см.</li>
						</ul>
					</div>
					<div className='pizza-block__bottom'>
						<div className='pizza-block__price'>от 395 ₽</div>
						<div className='button button--outline button--add'>
							<svg
								width='12'
								height='12'
								viewBox='0 0 12 12'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
									fill='white'
								/>
							</svg>
							<span>Добавить</span>
							<i>2</i>
						</div>
					</div>
				</div>{' '}
				<div className='pizza-block'>
					<img
						className='pizza-block__image'
						src='https://burger-king.by/upload/iblock/21e/vyhsttgg8aqclwzd5nmozqtcuq6o42yg.png'
						alt='Pizza'
					/>
					<h4 className='pizza-block__title'>Чизбургер-пицца</h4>
					<div className='pizza-block__selector'>
						<ul>
							<li className='active'>тонкое</li>
							<li>традиционное</li>
						</ul>
						<ul>
							<li className='active'>26 см.</li>

							<li>30 см.</li>
							<li>40 см.</li>
						</ul>
					</div>
					<div className='pizza-block__bottom'>
						<div className='pizza-block__price'>от 395 ₽</div>
						<div className='button button--outline button--add'>
							<svg
								width='12'
								height='12'
								viewBox='0 0 12 12'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
									fill='white'
								/>
							</svg>
							<span>Добавить</span>
							<i>2</i>
						</div>
					</div>
				</div>{' '}
				<div className='pizza-block'>
					<img
						className='pizza-block__image'
						src='https://burger-king.by/upload/iblock/6e2/6e27e552a23d026be34cfd694e1175bc.png'
						alt='Pizza'
					/>
					<h4 className='pizza-block__title'>Чизбургер-пицца</h4>
					<div className='pizza-block__selector'>
						<ul>
							<li className='active'>тонкое</li>
							<li>традиционное</li>
						</ul>
						<ul>
							<li className='active'>26 см.</li>

							<li>30 см.</li>
							<li>40 см.</li>
						</ul>
					</div>
					<div className='pizza-block__bottom'>
						<div className='pizza-block__price'>от 395 ₽</div>
						<div className='button button--outline button--add'>
							<svg
								width='12'
								height='12'
								viewBox='0 0 12 12'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
									fill='white'
								/>
							</svg>
							<span>Добавить</span>
							<i>2</i>
						</div>
					</div>
				</div>{' '}
				<div className='pizza-block'>
					<img
						className='pizza-block__image'
						src='https://burger-king.by/upload/iblock/a10/a1086c19c57ed18e807129d02eaa35af.png'
						alt='Pizza'
					/>
					<h4 className='pizza-block__title'>Чизбургер-пицца</h4>
					<div className='pizza-block__selector'>
						<ul>
							<li className='active'>тонкое</li>
							<li>традиционное</li>
						</ul>
						<ul>
							<li className='active'>26 см.</li>

							<li>30 см.</li>
							<li>40 см.</li>
						</ul>
					</div>
					<div className='pizza-block__bottom'>
						<div className='pizza-block__price'>от 395 ₽</div>
						<div className='button button--outline button--add'>
							<svg
								width='12'
								height='12'
								viewBox='0 0 12 12'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
									fill='white'
								/>
							</svg>
							<span>Добавить</span>
							<i>2</i>
						</div>
					</div>
				</div>{' '}
				<div className='pizza-block'>
					<img
						className='pizza-block__image'
						src='https://burger-king.by/upload/iblock/b10/b1042194d97bbb4188ae8ba75aad0c04.png'
						alt='Pizza'
					/>
					<h4 className='pizza-block__title'>Чизбургер-пицца</h4>
					<div className='pizza-block__selector'>
						<ul>
							<li className='active'>тонкое</li>
							<li>традиционное</li>
						</ul>
						<ul>
							<li className='active'>26 см.</li>

							<li>30 см.</li>
							<li>40 см.</li>
						</ul>
					</div>
					<div className='pizza-block__bottom'>
						<div className='pizza-block__price'>от 395 ₽</div>
						<div className='button button--outline button--add'>
							<svg
								width='12'
								height='12'
								viewBox='0 0 12 12'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
									fill='white'
								/>
							</svg>
							<span>Добавить</span>
							<i>2</i>
						</div>
					</div>
				</div>{' '}
				<div className='pizza-block'>
					<img
						className='pizza-block__image'
						src='https://burger-king.by/upload/iblock/03e/bklgpmc0v1988sac0xkeb91oy7s6h0kv.png'
						alt='Pizza'
					/>
					<h4 className='pizza-block__title'>Чизбургер-пицца</h4>
					<div className='pizza-block__selector'>
						<ul>
							<li className='active'>тонкое</li>
							<li>традиционное</li>
						</ul>
						<ul>
							<li className='active'>26 см.</li>

							<li>30 см.</li>
							<li>40 см.</li>
						</ul>
					</div>
					<div className='pizza-block__bottom'>
						<div className='pizza-block__price'>от 395 ₽</div>
						<div className='button button--outline button--add'>
							<svg
								width='12'
								height='12'
								viewBox='0 0 12 12'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
									fill='white'
								/>
							</svg>
							<span>Добавить</span>
							<i>2</i>
						</div>
					</div>
				</div>{' '}
				<div className='pizza-block'>
					<img
						className='pizza-block__image'
						src='https://burger-king.by/upload/iblock/fbf/fbf3e250e537ea7b5ae8834a611afe1f.png'
						alt='Pizza'
					/>
					<h4 className='pizza-block__title'>Чизбургер-пицца</h4>
					<div className='pizza-block__selector'>
						<ul>
							<li className='active'>тонкое</li>
							<li>традиционное</li>
						</ul>
						<ul>
							<li className='active'>26 см.</li>

							<li>30 см.</li>
							<li>40 см.</li>
						</ul>
					</div>
					<div className='pizza-block__bottom'>
						<div className='pizza-block__price'>от 395 ₽</div>
						<div className='button button--outline button--add'>
							<svg
								width='12'
								height='12'
								viewBox='0 0 12 12'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
									fill='white'
								/>
							</svg>
							<span>Добавить</span>
							<i>2</i>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
