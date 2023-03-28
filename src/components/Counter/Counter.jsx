import { Component, PureComponent } from 'react'

class Button extends PureComponent {
	shouldComponentUpdate(nextProps, nextState) {
		if (nextProps.handleClickIncrement !== this.props.handleClickIncrement)
			return true
		return false
	}
	render() {
		console.log(this.props)
		return (
			<button
				className='btn btn-outline-success me-5'
				onClick={this.props.handleClickIncrement}
			>
				<i className='bi bi-plus-circle fs-1'></i>
			</button>
		)
	}
}

class Counter extends Component {
	state = {
		total: 0,
		items: 10,
	}

	handleClickIncrement = () =>
		this.setState((prevState) => ({
			total: prevState.total + 1,
			items: 100,
			itemsTotal: 0,
		}))

	handleClickDecrement = () =>
		this.setState((prevState) => ({
			total: prevState.total - 1,
		}))

	render() {
		console.log('render ')
		return (
			<div className='position-absolute top-50 start-50 translate-middle'>
				<div
					className='card bg-dark text-white '
					style={{ width: '600px' }}
				>
					<div className='card-body'>
						<h5 className='card-title text-center fs-1'>Counter</h5>
						<p
							className='card-text  text-center'
							style={{ fontSize: '80px' }}
						>
							{this.state.total}
						</p>
						<div className='d-flex justify-content-center px-5'>
							{/* <button
								className='btn btn-outline-success me-5'
								onClick={this.handleClickIncrement}
							>
								<i className='bi bi-plus-circle fs-1'></i>
							</button> */}
							<Button
								obj={{ name: 'asd' }}
								obj2={{
									name: 'asd',
									address: { lat: 123, lang: 123 },
								}}
								handleClickIncrement={this.handleClickIncrement}
							/>
							<button
								className='btn  btn-outline-danger ms-5'
								onClick={this.handleClickDecrement}
							>
								<i className='bi bi-dash-circle fs-1'></i>
							</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default Counter

// const Counter = () => {

// 	return (
// 		<div className='position-absolute top-50 start-50 translate-middle'>
// 			<div
// 				className='card bg-dark text-white '
// 				style={{ width: '600px' }}
// 			>
// 				<div className='card-body'>
// 					<h5 className='card-title text-center fs-1'>Counter</h5>
// 					<p
// 						className='card-text  text-center'
// 						style={{ fontSize: '80px' }}
// 					>
// 						{/* {total} */}
// 					</p>
// 					<div className='d-flex justify-content-center px-5'>
// 						<button
// 							className='btn btn-outline-success me-5'
// 							// onClick={handleClick}
// 						>
// 							<i className='bi bi-plus-circle fs-1'></i>
// 						</button>
// 						<button className='btn  btn-outline-danger ms-5'>
// 							<i className='bi bi-dash-circle fs-1'></i>
// 						</button>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }
// export default Counter
