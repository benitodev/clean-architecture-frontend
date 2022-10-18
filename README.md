# Clean architecture on frontend

Is a software architecture with the objective separation of concerns. Separate by layers the system. 

> "The clean architecture is a way of separating responsibilities and parts of functionality according to their proximity to the application **domain**" -Alex Bespoyasov


**What is software architecture?**

Refers to the fundamental structures of a software system.  Each structure comprises software elements, relations among them, and properties of both elements and relations. This allow us anticipate expensive choices, focus on structure, core decisions to have high quality.

**What should the system do?**

You need to know the context of your software architecture before starting to work, we can achieve this by applying priorities, for example: 
e-commerce need -->
- Buy Products
- Review past orders
- Search inventory 
- Check reviews

**Back to the main topic**

Each layer should not know about its outer layer being agnostic and only dependent on the domain (Domain Driven Design):

1. **Domain**, 

2. Business

It has good points like: 

1. Independent of frameworks.
2. Independent of UI.
3. Independent of Database
4. The business rules can be tested without UI, DB, etc. 
