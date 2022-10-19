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

2. **Application Layer (Use Cases)**: business logic in the application, we're working with the entities through the components applying different actions with the models. Then, we describe the user scenarios. They are responsible for what appens after some event occurs.

- After click the button send a request to the server
- Now perform this a domain transformation;
- redraw the UI with the new data (response)

Represented by the components ()

3. **Adapters layer**: Adapters are needed to implement the incompatible APIs of *external services* (we talk about this layer later) for what need our application. They are good to lower the [coupling](https://blog.ndepend.com/programming-coupling/) between our code and the code of third-party services. It allow us to avoid changing one module when another has changed. 
Example:
We have an API that calls a list of animals and we just need dogs, cats and birds. We won't want to send all the response, then we'll create an adapter to do compatible with our application rules.


4. **External services**: the outermost layer of the application. We have Frameworks and External Services here, they are dependent on the rest of layers, doesn't matter what external service implements the interface, the application of it is agnostic.



Clean Architecture has good points like: 

1. Independent of frameworks.
2. Independent of UI.
3. Independent of Database
4. The business rules can be tested without UI, DB, etc. 




## References

[The clean architecture by Robert C. Martin](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)

[Clean architecture on frontend](https://bespoyasov.me/blog/clean-architecture-on-frontend/)

[Why is software architecture important?](https://codecoach.co.nz/why-is-software-architecture-important/)

[The dependency rule](https://codecoach.co.nz/clean-architecture-the-dependency-rule/)

[The new way to apply Clean Architecture on frontend (spanish)](https://www.youtube.com/watch?v=MAL7a_aXhxE)