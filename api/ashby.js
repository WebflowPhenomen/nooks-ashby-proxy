export default async function handler(req, res) {
	const response = await fetch("https://api.ashbyhq.com/v1/job-postings", {
		headers: {
			"Authorization": `Bearer ${process.env.ASHBY_API_KEY}`
		}
	});

	if (!response.ok) {
		return res.status(response.status).json({ error: 'Ashby API error' });
	}

	const data = await response.json();
	res.status(200).json(data);
}
