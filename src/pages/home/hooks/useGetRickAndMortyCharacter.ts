import { initialUser } from "@/models";
import { useEffect, useState } from "react";
import { getCharacter, rickAndMortyUrl } from "../services";

export const useGetRickAndMortyCharacter = () => {
    const [character, setCharacter] = useState(initialUser);
    const getMorty = async () => {
      const result = await getCharacter(rickAndMortyUrl);
      setCharacter(result);
    };
  
    useEffect(() => {
      getMorty();
    }, []);
    return character
}