const serviceLogin = (email, password) => {
	return new Promise((resolve, reject) => {
		const getData = {
			user: {
				name: "daniel",
				lastName: "vera",
				email: "daniel@gmail.com",
				password: "12345678"
			}
		};

		setInterval(() => {
			if (getData.user.email === email && getData.user.password === password) {
				delete getData.user.password;
				resolve(getData.user);
			}

			reject(false);

		}, 2000);
	});
};

export default serviceLogin;
