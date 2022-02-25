import bcrypt from 'bcryptjs'

const users = [
	// Admin user
	{
		name: 'Dhia boumiza',
		email: 'dhiaboumiza@gmail.com',
		password: bcrypt.hashSync('12345', 10), //  10 = num rounds
		isAdmin: true,
	},
	// Standard users
	{
		name: 'Belle Doe',
		email: 'belle@gmail.com',
		password: bcrypt.hashSync('12345', 10), //  10 = num rounds
	},
	{
		name: 'Mike Doe',
		email: 'mike@gmail.com',
		password: bcrypt.hashSync('12345', 10), //  10 = num rounds
	},
]

export default users
