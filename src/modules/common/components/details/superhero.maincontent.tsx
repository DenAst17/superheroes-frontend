/* eslint-disable */
import { FC, useState } from 'react';
import Superhero from '../../../../entities/superhero.entity';
import Card from '@mui/material/Card';
import SuperheroTitle from '../styled/superhero.title';
import ConfirmationDialog from '../universal/confirmation.dialog';
import BaseButton from '../styled/base.button';
import { Link } from 'react-router-dom';
import './superhero.maincontent.css';
import SuperheroImageList from './superhero.image.list';
import SuperheroInfo from './superhero.info';
import { Paper } from '@mui/material';
import EditForm from '../forms/edit.form';
import Modal from '../universal/modal';

const SuperheroMainContent: FC<{
    superhero: Superhero,
    handleDeleteSuperhero: (superhero: Superhero) => void,
    handleEditSuperhero: (values: Superhero) => void
}> = ({ superhero, handleDeleteSuperhero, handleEditSuperhero }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isEditForm, setIsEditForm] = useState(false);

    function setEditFormVisible() {
        setIsEditForm(true);
    }
    function setFormsInvisible() {
        setIsEditForm(false);
    }
    const handleClickOpen = () => {
        setIsOpen(true);
    };
    const handleClose = () => {
        setIsOpen(false);
    };
    return (
        <>
            <Paper className='superheroCard' variant="outlined">
                <div>
                    <SuperheroInfo
                        superhero={superhero}
                    />
                    <div className="buttonsWrapper">
                        <BaseButton variant="outlined">
                            <Link className="backLink" to={'/'}>Back</Link>
                        </BaseButton>
                        <BaseButton variant="outlined" onClick={setEditFormVisible}>
                            Edit
                        </BaseButton>
                        <BaseButton variant="outlined" onClick={handleClickOpen}>
                            Delete
                        </BaseButton>
                    </div>
                </div>
                <div className='imagesContainer'>
                    <SuperheroImageList
                        imageFiles={superhero.images as string[]}
                    />
                </div>
            </Paper>

            <Modal
                isModalOpen={isEditForm}
            >
                <EditForm
                    superhero={superhero}
                    closeForm={setFormsInvisible}
                    handleSubmit={(values) => { handleEditSuperhero(values); setFormsInvisible() }}
                />
            </Modal>

            <ConfirmationDialog
                isOpen={isOpen}
                confirm={() => { handleDeleteSuperhero(superhero) }}
                cancel={handleClose}
            />

        </>
    );
}

export default SuperheroMainContent;
