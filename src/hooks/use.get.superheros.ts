import { useState } from "react";
import { useQuery } from 'react-query';
import superheroService from '../services/superhero.service'
import Superhero from "../entities/superhero.entity";
import { APP_KEYS } from "../modules/common/consts";

const useGetSuperheros = () => {
    const [superheros, setSuperheros] = useState<Superhero[]>([]);
    const { isLoading: isLoadingSuperheros, refetch: getAllSuperheros } =
        useQuery<Superhero[], Error>(
            APP_KEYS.QUERY_KEYS.SUPERHEROES_URL,
            async () => {
                const superheros = await superheroService.getAll();
                return superheros;
            },
            {
                onSuccess: (res) => {
                    setSuperheros(res);
                },
                onError: (err: any) => {
                    setSuperheros(err.response?.data || err);
                }
            }
        );
    return {superheros, setSuperheros, getAllSuperheros, isLoadingSuperheros};
}

export default useGetSuperheros;