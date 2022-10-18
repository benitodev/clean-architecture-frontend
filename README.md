# Clean architecture on frontend

Is a software architecture with the objective separation of concerns. Separate by layers the system. 

> "The clean architecture is a way of separating responsibilities and parts of functionality according to their proximity to the application **domain**" -Alex Bespoyasov


**What is software architecture?**

Refers to the fundamental structures of a software system.  Each structure comprises software elements, relations among them, and properties of both elements and relations. This allow us anticipate expensive choices, focus on structure, core decisions to have high quality. 

**What should the system do?**

First you need to know the context (*requirements*) of your software architecture before starting to work, we can achieve this by applying priorities, for example: 
e-commerce need -->
- Buy Products
- Review past orders
- Search inventory 
- Check reviews

Before we need *prioritize*

**Back to the main topic**

> [!IMPORTANT]
> Remember that i base on the frontend clean architecture

Each layer should not know about its outer layer, being agnostic and only dependent on the domain (Domain Driven Design):

1. **Entities**: the core logic of business domain (doesn't depend to layers), for example: 
- Shopping cart (entity) : what can we do (business logic)?
  - Add element
  - Delete element
  - Clean inventory

represented by the folder **"models"** as you can see [here](https://github.com/benitodev/clean-architecture-frontend/tree/main/src/models), you have the entities in typescript files and state/store wich we need to save the previous entities at different times of the lifecycle of our application (like redux, veux, mobx, context, etc).

2. **Use Cases**: business logic in the application, we're working with the entities through the components applying different actions with the models.

Represented by the components ()

It has good points like: 

1. Independent of frameworks.
2. Independent of UI.
3. Independent of Database
4. The business rules can be tested without UI, DB, etc. 
