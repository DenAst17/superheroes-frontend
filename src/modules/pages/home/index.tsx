/* eslint-disable */
import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive'
import Header from '../../common/components/main/superhero.header';
import SuperheroList from '../../common/components/main/superhero.list';
import Superhero from '../../../entities/superhero.entity';

import useCrudSuperhero from '../../../hooks/use.crud.superhero';

import './index.css'

function HomePageContainer() {
    const { superheros, getAllSuperheros, isLoadingSuperheros, handleDeleteSuperhero, handleAddSuperhero, handleEditSuperhero } = useCrudSuperhero();

    useEffect(() => {
        try {
            getAllSuperheros();
        } catch (err) {
            console.log("error");
        }
    }, []);

    const isBigScreen = useMediaQuery({ query: '(min-width: 769px)' })
    const isTablet = useMediaQuery({ query: '(max-width: 768px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 426px)' })

    return (
        <div className="container">
            <Header superheros={superheros as Superhero[]} handleAdd={(values) => handleAddSuperhero(values)} />
            <SuperheroList superheros={superheros as Superhero[]} handleDeleteSuperhero={(superhero) => handleDeleteSuperhero(superhero)} handleEditSuperhero={(values) => handleEditSuperhero(values)} />
        </div>
    );
}

export default HomePageContainer;
