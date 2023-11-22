import express, { json } from 'express';

const app = express();
app.use(json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});

// Add a status endpoint
app.get('/status', (_req, res) => {
    res.status(200).send('Server is running');
});

owneremail = 'test@contoso.com';

const pets = [
    { id: '1', name: 'Fluffy', age: 2, type: 'cat', breed: 'Siamese', owneremail: owneremail, state: 'new' }
    // Create 5 more sample pets with a fake/test owneremail and different names, ages, type and breed. Name each pet afer the first name of a New Zealand prime ministers.
  ];

// Get a Find a Pet by ID
app.get('/pets/:id', (req, res) => {
    const id = req.params.id;
    const pet = pets.find((pet) => pet.id === id);
    if (!pet) {
        res.status(404).send('Pet not found');
    }
    res.status(200).send(pet);
});

// Get a list of all pets
app.get('/pets', (req, res) => {
    res.status(200).send(pets);
});

// Delete a pet
app.delete('/pets/:id', (req, res) => {
    const id = req.params.id;
    const pet = pets.find((pet) => pet.id === id);
    if (!pet) {
        res.status(404).send('Pet not found');
    }
    const index = pets.indexOf(pet);
    pets.splice(index, 1);
    res.status(200).send(pet);
});

// Update a pet
app.put('/pets/:id', (req, res) => {
    const id = req.params.id;
    const pet = pets.find((pet) => pet.id === id);
    if (!pet) {
        res.status(404).send('Pet not found');
    }
    pet.name = req.body.name;
    pet.age = req.body.age;
    res.status(200).send(pet);
});

// Get all pets by owneremail. If no pets found, return an empty array.
app.get('/pets/owneremail/:owneremail', (req, res) => {
    const owneremail = req.params.owneremail;
    const pets = pets.filter((pet) => pet.owneremail === owneremail);
    res.status(200).send(pets);
});

// Create a new pet with name, age, type breed and owneremail.


// Update a pet state


// Get all pets by name, but use a match that matches any part of the name.
// Ignore punctuation and special characters in match and use regex

