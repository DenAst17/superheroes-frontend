import Superhero from "../../../entities/superhero.entity"

export interface IAddForm {
    closeForm: () => void,
    handleSubmit: (values: {}) => void
}

export interface IEditForm {
    superhero: Superhero,
    closeForm: () => void,
    handleSubmit: (values: Superhero) => void
}

export interface IModal {
    isModalOpen: boolean,
}

export interface ITabletSuperheroList{
    isLoading: boolean,
    superheros: Superhero[],
    handleDeleteSuperhero: (superhero: Superhero) => void,
    handleEditSuperhero: (values: Superhero) => void
}

export interface ISuperheroList{
    superheros: Superhero[],
    handleDeleteSuperhero: (superhero: Superhero) => void,
    handleEditSuperhero: (values: Superhero) => void
}

export interface IHeroParams {
    superheroId: string
}