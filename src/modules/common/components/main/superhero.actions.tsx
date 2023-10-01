/* eslint-disable */
import { FC, useState } from 'react';
import BaseButton from '../styled/base.button';
import Superhero from '../../../../entities/superhero.entity';
import EditForm from '../forms/edit.form';
import Modal from '../universal/modal';

const SuperheroActions: FC<{ superhero: Superhero, handleDeleteSuperhero: (superhero: Superhero) => void, handleEditSuperhero: (values: Superhero) => void }> = ({ superhero, handleDeleteSuperhero, handleEditSuperhero }) => {
  const [isEditForm, setIsEditForm] = useState(false);

  function setEditFormVisible() {
    setIsEditForm(true);
  }
  function setFormsInvisible() {
    setIsEditForm(false);
  }

  return (
    <div>
      <BaseButton variant="outlined" onClick={setEditFormVisible}>
        Edit
      </BaseButton>
      <BaseButton variant="outlined" onClick={() => { handleDeleteSuperhero(superhero) }}>
        Delete
      </BaseButton>
      <Modal
        isModalOpen={isEditForm}
      >
        <EditForm
          superhero={superhero}
          closeForm={setFormsInvisible}
          handleSubmit={(values) => { handleEditSuperhero(values); setFormsInvisible() }}
        />
      </Modal>
    </div>
  );
}

export default SuperheroActions;
