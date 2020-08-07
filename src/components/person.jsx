import React from 'react';

const imgSize = {
	width: '100%'
};

function Person(props) {
	return (
		<div className="App">
			<div className="card">
				<img src="img/img_avatar.png" alt="Avatar" style={imgSize} />
				<div className="container">
					<h4>
						<b>{props.name}</b>
					</h4>
					<p> Company:   {props.company}</p>
					<p>Email:  {props.email}</p>
				</div>
			</div>
			
		</div>
	);
}

export default Person;
