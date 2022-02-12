import React from 'react'
import { Link } from 'react-router-dom'

const CityBlock = ({location}) => {
	const {id, name, code_name, mapPhoto} = location
	return (
		<div class='col-lg-3'>
			<div class='location-based-jobs' style={{backgroundImage: `url(${mapPhoto})`}}>
				<div class='location-name'>
					<p>Find hourly jobs on</p>
					<h4>
						<Link to={`/location/${code_name}`}>{name}</Link>
					</h4>
				</div>
			</div>
		</div>
	)
}

export default CityBlock
