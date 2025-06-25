export default async function handler(req, res) {
  const response = await fetch("https://api.ashbyhq.com/v1/job-postings", {
    headers: {
      "Authorization": `Bearer ${process.env.a45cfef17a96ebd8c0da266910131be656d46798b7dda8e8076d59ef5b3dbdc6}`
    }
  });

  if (!response.ok) {
    return res.status(response.status).json({ error: 'Ashby API error' });
  }

  const data = await response.json();
  res.status(200).json(data);
}
