const express = require('express');
const app = express();
const user = require('./user.json');
const port = process.env.PUBLIC_PORT || 7000;

app.use(express.json())

app.get('/', (req, res) => {
    res.json(user)
});

app.post('/', (req, res) => {
    const updateData = req.body;
    user.push(updateData);
    res.json(user)
})

app.put('/:index', (req, res) => {
    const index = parseInt(req.params.index);
    const update = req.body;
    user[index] = update;
    res.json(user);
});

app.delete('/:index', (req, res) => {
    const index = parseInt(req.params.index);
    user.splice(index, 1);
    res.json(user);
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running on PORT: ${port}`);
  });
}

module.exports = app;