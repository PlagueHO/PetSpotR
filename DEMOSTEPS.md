# Steps for GitHub Copilot demos

## GitHub Copilot

### Code Creation (HTML + Blazor)

1. Open `./src/frontend/PetSpotR/Pages/LostPet.razor`
1. Add `<!-- Add a new field for pet age that should not allow value higher than 30 -->` under.

### Code Creation (JS)

1. Open `./src/api/PetSpotR/app.js`
1. Add a new API request `// Create a new pet with name, age, type breed and owneremail.`
1. Update to include field validation `// Create a new pet with name, age, type breed and owneremail. Include validation to ensure that all fields are present and sanitised.`
1. Add a new API request `// Get all pets by owneremail`
1. Change API to `// Get all pets by owneremail. If there are no pets found, return an empty array.`
1. Add comment to pets object `// Create 5 more sample pets with a fake/test owneremail and different names, ages, type and breed`
1. Extend this with `// Create 5 more sample pets with a fake/test owneremail and different names, ages, type and breed. Name each pet afer the first name of a New Zealand prime ministers.`
1. Add comment

```Javascript
// Get all pets by name, but use a match that matches any part of the name.
// Ignore punctuation and special characters in match
```

### Code creation (C#)

1. Open `./src/frontend/PetSpotR/Data/PetModel.cs`
1. Add a new method `public async Task GetLostPetAsync(DaprClient daprClient, string `
1. Add a new method by creating a comment `// Delete a Lost Pet`
1. Add a new method by adding `// Get all pets from an owner e-mail`
1. Add a new class `// Address class for storing owner details`
1. Add new properties to the `PetModel.cs` class with `// The postal address and the physical address of the owner`
1. Change to `// A list of addresses for the owner`

## GitHub Copilot Chat

### Code creation and improvement (C#)

1. Demonstrate creating code with Chat by entering `Create a sample C# .NET class called MyApiClient for an API that calls HTTP rest methods. It should create an HTTPClient in the Constructor and store it in a property of the class. Include some common scafoloding code for Get, Post, Put and Delete.`
1. Improve code `How could we make this code more testable?`
1. Explain `Why should I use dependency injection?`
1. Guide `Should I use a singleton when creating the HttpClient?`
1. Guide `What are some common security vulnerabilities that can occur when using HTTPClient in .NET?`
1. Guide `What are some best practices for using HTTPS with HttpClient in .NET?`

### Test creation (C#)

1. Open `./src/frontend/PetSpotR/Data/PetModel.cs`
1. Select all code and open chat `/tests`
1. Change to `/tests using FluentAssertions`
1. Select all code and use `/fix`

### Code debug and tests (C#)

1. Open `./src/frontend/PetSpotR/Data/PetModel.cs`
1. Is there a bug in this code?
1. Write some unit tests for this code that validate the intention of the code, not the behavior.
1. Will these tests currently pass?
1. How could I change this code to make it more testable?