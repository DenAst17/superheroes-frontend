import { useState } from "react";
import { useMutation } from 'react-query';
import superheroService from '../services/superhero.service'

const useDeleteSuperhero = () => {
    let id: number | null = null;
    const [deleteResult, setDeleteResult] = useState<string | null>(null);
    const { isLoading: isPostingSuperhero, mutate: deleteTd } =
    useMutation<any, Error>(
            async () => {
                return await superheroService.delete(id as number);
            },
            {
                onSuccess: (res) => {
                    setDeleteResult(res);
                },
                onError: (err: any) => {
                    setDeleteResult(err.response?.data || err);
                }
            }
        );
    function deleteSuperhero(deletedId: number) {
        id = deletedId;
        deleteTd();
    }
    return {deleteSuperhero, deleteResult};
}

export default useDeleteSuperhero;