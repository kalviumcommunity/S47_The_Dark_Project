const express = require('express');
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(cookieParser());

const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' }
];

const authenticateUser = (req, res, next) => {
  const { username } = req.cookies;
  if (!username) {
    return res.status(401).json({ error: 'Not authenticated' });
  }
  next();
};

// app.post('/login', (req, res) => {
//   const { username, password } = req.body;
//   if (!username || !password) {
//     return res.status(400).json({ error: 'Username and password are required' });
//   }

//   const user = users.find(user => user.username === username && user.password === password);
//   if (!user) {
//     return res.status(401).json({ error: 'Invalid username or password' });
//   }

//   res.cookie('username', username);
//   console.log('Username cookie set:', username);
//   return res.json({ message: 'Login successful', username });
// });

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const token = jwt.sign({ email }, JWT_SECRET_KEY, { expiresIn: '1h' });
  res.cookie('token', token, { httpOnly: true });
  res.json({ success: true });
});

function authenticateToken(req, res, next) {
const token = req.cookies.token;

if (!token) {
    return res.status(401).json({ error: 'Unauthorized: Missing token' });
}

jwt.verify(token, JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
        return res.status(403).json({ error: 'Forbidden: Invalid token' });
    }
    req.user = decoded;
    next();
})}


app.get('/logout', (req, res) => {
  res.clearCookie('username');
  console.log('Username cookie cleared');
  return res.json({ message: 'Logout successful' });
});


app.get('/protected', authenticateUser, (req, res) => {
  console.log('Authenticated user:', req.cookies.username);
  return res.json({ message: 'Protected endpoint', username: req.cookies.username });
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
