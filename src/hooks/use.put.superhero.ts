import { useState } from "react";
import { useMutation } from 'react-query';
import superheroService from '../services/superhero.service'
import Superhero from "../entities/superhero.entity";

const usePutSuperhero = () => {
    let superhero: Superhero | undefined = undefined;
    let id: number | null = null;
    const [putResult, setPutResult] = useState<string | null>(null);
    const { isLoading: isPostingSuperhero, mutate: sendSuperhero } =
    useMutation<any, Error>(
            async () => {
                return await superheroService.update(superhero as Superhero, id as number);
            },
            {
                onSuccess: (res) => {
                    setPutResult(res);
                    window.location.reload();
                },
                onError: (err: any) => {
                    setPutResult(err.response?.data || err);
                }
            }
        );
    function putSuperhero(newSuperhero: Superhero, newId: number) {
        superhero = newSuperhero;
        id = newId;
        sendSuperhero();
    }
    return {putSuperhero, putResult};
}

export default usePutSuperhero;