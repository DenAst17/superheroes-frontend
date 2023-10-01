/* eslint-disable */
import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive'
import Header from '../../common/components/main/superhero.header';
import SuperheroList from '../../common/components/main/superhero.list';
import Superhero from '../../../entities/superhero.entity';

import useCrudSuperhero from '../../../hooks/use.crud.superhero';

import './index.css'
import { useParams } from 'react-router-dom';
import { IHeroParams } from '../../common/types/form.types';
import SuperheroMainContent from '../../common/components/details/superhero.maincontent';

function HeroPageContainer() {
    const {superheroId} = useParams<IHeroParams>();
    const { superhero, getCurrentHero, isLoadingSuperheros, handleDeleteSuperhero, handleAddSuperhero, handleEditSuperhero } = useCrudSuperhero();

    useEffect(() => {
        try {
            getCurrentHero(parseInt(superheroId));
            // console.log(superhero);
        } catch (err) {
            console.log("error");
        }
    }, []);

    return (
        <div className="detailsContainer">
            <SuperheroMainContent
                superhero={superhero as Superhero}
                handleDeleteSuperhero={handleDeleteSuperhero}
                handleEditSuperhero={handleEditSuperhero}
            />
        </div>
        
    );
}

export default HeroPageContainer;
