import useGetSuperheros from './use.get.superheros';
import useDeleteSuperhero from './use.delete.superhero';
import usePostSuperhero from './use.post.superhero';
import usePutSuperhero from './use.put.superhero';
import Superhero from '../entities/superhero.entity';
import useGetSuperhero from './use.get.supehero';
import { useHistory  } from "react-router-dom";
import { APP_KEYS } from '../modules/common/consts';

const useCrudSuperhero = () => {
    const history = useHistory();
    const {superheros, setSuperheros, getAllSuperheros, isLoadingSuperheros} = useGetSuperheros();
    const { superhero, setSuperhero, getCurrentHero, isLoadingSuperhero } = useGetSuperhero();
    const {deleteSuperhero, deleteResult} = useDeleteSuperhero();
    const {postSuperhero, postResult} = usePostSuperhero();
    const {putSuperhero, putResult} = usePutSuperhero();

    function handleDeleteSuperhero(delSuperhero: Superhero) {
        deleteSuperhero(delSuperhero.id as number);
        const changedSuperheros = superheros.filter(superhero => superhero.id !== delSuperhero.id);
        setSuperheros(changedSuperheros);
        history.push(APP_KEYS.ROUTER_KEYS.HOME);
    }
    function handleAddSuperhero(values: {}) {
        const newSuperhero = new Superhero(values);
        //console.log(newSuperhero);
        postSuperhero(newSuperhero)
        newSuperhero.id = superheros[superheros.length - 1].id as number + 1;
        Array.from(newSuperhero.new_images as File[]).forEach((image) => {  
            newSuperhero.images?.push(image.name);
        })
        superheros.push(newSuperhero)
        setSuperheros(superheros);
    }
    async function handleEditSuperhero(newSuperhero: Superhero) {
        putSuperhero(newSuperhero, newSuperhero.id as number);
        setSuperhero(newSuperhero);
        const index = superheros.findIndex(superhero => superhero.id == newSuperhero.id);
        superheros[index] = newSuperhero;
        setSuperheros(superheros);
    }

    return {
        superheros,
        setSuperheros,
        getAllSuperheros, 
        isLoadingSuperheros,
        superhero, 
        setSuperhero, 
        getCurrentHero, 
        isLoadingSuperhero, 
        deleteSuperhero, 
        deleteResult,
        postSuperhero, 
        postResult, 
        putSuperhero, 
        putResult, 
        handleDeleteSuperhero, 
        handleAddSuperhero, 
        handleEditSuperhero
    };
}

export default useCrudSuperhero;