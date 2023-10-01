import { useState } from "react";
import { useMutation } from 'react-query';
import superheroService from '../services/superhero.service'
import Superhero from "../entities/superhero.entity";

const usePostSuperhero = () => {
    let superhero: Superhero | undefined = undefined;
    const [postResult, setPostResult] = useState<string | null>(null);
    const { isLoading: isPostingSuperhero, mutate: sendSuperhero } =
    useMutation<any, Error>(
            async () => {
                return await superheroService.create(superhero as Superhero);
            },
            {
                onSuccess: (res) => {
                    setPostResult(res);
                    window.location.reload();
                },
                onError: (err: any) => {
                    setPostResult(err.response?.data || err);
                }
            }
        );
    function postSuperhero(newSuperhero: Superhero) {
        superhero = newSuperhero;
        sendSuperhero();
    }
    return {postSuperhero, postResult};
}

export default usePostSuperhero;
