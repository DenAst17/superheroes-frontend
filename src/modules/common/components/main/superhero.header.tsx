/* eslint-disable */
import { FC, useState } from 'react';
import SuperheroTabs from './superhero.tabs';
import SuperheroSearchField from '../styled/superhero.search.field';
import BaseButton from '../styled/base.button';
import AddForm from '../forms/add.form';
import Modal from '../universal/modal';

import './superhero.header.css'
import Superhero from '../../../../entities/superhero.entity';

const Header: FC<{ superheros: Superhero[], handleAdd: (values: {}) => void }> = ({ superheros, handleAdd }) => {
  const [isAddForm, setIsAddForm] = useState(false);

  function setAddFormVisible() {
    setIsAddForm(true);
  }
  function setFormsInvisible() {
    setIsAddForm(false);
  }
  const addForm = AddForm({ closeForm: setFormsInvisible, handleSubmit: handleAdd }) as React.ReactElement<any, any>;
  return (
    <div className='headerContainer'>
      <header className="bottomHeader">
        <div className="buttonAndSearch">
          <BaseButton variant="outlined" onClick={setAddFormVisible}>
            Add new superhero
          </BaseButton>
        </div>
      </header>
      <Modal
        isModalOpen={isAddForm}
      >
        <AddForm
          closeForm={setFormsInvisible}
          handleSubmit={(values) => { handleAdd(values); setFormsInvisible() }}
        />
      </Modal>
    </div>
  );
}

export default Header;
