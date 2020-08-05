import express from 'express';

const app = express();

app.use(express.json());

app.post('/users', (request, response) => {
    const { name } = request.body;
    const users = [
        { name: 'João Victor' },
        { name: 'Diego' },
        { name }
    ];

    console.log(name);

    return response.json(users);
})

app.listen(3333);
