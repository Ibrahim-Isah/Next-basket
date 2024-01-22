const baseUrl = 'https://dummyjson.com/';

const fetchApi = async (path: string, options: RequestInit = {}) => {
	const response = await fetch(`${baseUrl}${path}`, {
		...options,
		headers: {
			'Content-Type': 'application/json',
			...options.headers,
		},
	});
	if (!response.ok) {
		throw new Error(
			`Fetch request failed: ${response.status} ${response.statusText}`
		);
	}

	return response.json();
};

export { fetchApi };
