/* eslint-disable */
import { FC, useState } from 'react';
import Superhero from '../../../../entities/superhero.entity';
import './superhero.card.css'

import Card from '@mui/material/Card';
import SuperheroTitle from '../styled/superhero.title';
import FileImage from '../styled/file.image';
import BaseButton from '../styled/base.button';
import ConfirmationDialog from '../universal/confirmation.dialog';
import { Link } from 'react-router-dom';

const SuperheroCard: FC<{
    superhero: Superhero,
    handleDeleteSuperhero: (superhero: Superhero) => void
}> = ({ superhero, handleDeleteSuperhero }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClickOpen = () => {
        setIsOpen(true);
    };
    const handleClose = () => {
        setIsOpen(false);
    };
    return (
        <>
            <Card className='superheroCard' variant="outlined">
                <SuperheroTitle>
                    {superhero.nickname}
                </SuperheroTitle>
                <div className='descContainer'>
                    <FileImage
                        fileName={(superhero.images as string[])[0] as string}
                    />
                </div>
                <div className="buttonsWrapper">
                    <BaseButton variant="outlined">
                        <Link className="superheroLink" to={`/superheroes/${superhero.id}`}>Details</Link>
                    </BaseButton>
                    <BaseButton variant="outlined" onClick={handleClickOpen}>
                        Delete
                    </BaseButton>
                </div>
            </Card>

            <ConfirmationDialog
                isOpen={isOpen}
                confirm={() => { handleDeleteSuperhero(superhero) }}
                cancel={handleClose}
            />

        </>
    );
}

export default SuperheroCard;
