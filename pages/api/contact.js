export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    res.status(201).json({
      status: 'success',
      body: {
        name, email, message
      }
    })
  }
  
}