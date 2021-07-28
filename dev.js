const serverUrl = 'https://web-manager-dev.herokuapp.com/check';

const checkSite = async () => {
	try {
		const res = await fetch(serverUrl, {
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			method: 'POST',
		});
		const { active } = await res.json();
		if (res.status !== 200) return;
		if (active) return;
		document.body.innerHTML = 'Error';
	} catch (e) {
		console.log('Error');
	}
};
checkSite();
