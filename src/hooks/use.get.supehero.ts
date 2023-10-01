import { useState } from "react";
import { useQuery } from 'react-query';
import superheroService from '../services/superhero.service'
import Superhero from "../entities/superhero.entity";
import { INITIAL_VALUES } from "../modules/common/consts";

const useGetSuperhero = () => {
    const [superhero, setSuperhero] = useState<Superhero>(new Superhero(INITIAL_VALUES.VALUES_OBJECT));
    let id: number | null = null;
    const { isLoading: isLoadingSuperhero, refetch: getSuperhero } =
        useQuery<Superhero, Error>(
            "superhero",
            async () => {
                const superhero = await superheroService.getOne(id as number);
                return superhero;
            },
            {
                onSuccess: (res) => {
                    setSuperhero(res);
                },
                onError: (err: any) => {
                    setSuperhero(err.response?.data || err);
                }
            }
        );
    function getCurrentHero(currentId: number) {
        id = currentId;
        getSuperhero();
    }
    return { superhero, setSuperhero, getCurrentHero, isLoadingSuperhero };
}

export default useGetSuperhero;