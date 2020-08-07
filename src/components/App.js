import React from 'react';
import Person from '../components/person';
import Footer from '../components/footer';
import Header from './Header';
import User from '../User';







function App() {
	console.log(User);
	return (
		<div>
			<Header />
			{User.map(user => 
				<Person 
					key = {user._id}
					name={user.name}
					company={user.company}
					email={user.email}
				/>
			)}
			<Footer />
		</div>
	);
}

export default App;
