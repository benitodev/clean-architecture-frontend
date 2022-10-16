import { ApiUser, User } from "@/models";

//transform the data that arrive from api to properties we need 
export const RickAndMortyAdapter = (user: ApiUser): User => {
    return {
        id: user.id,
        name: user.name,
        status: user.status,
        species: user.species
    }
}