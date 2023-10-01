import Superhero from "../../../../../entities/superhero.entity";

const submitSuperhero = (values: Superhero, { setSubmitting }: {setSubmitting: (isSubmitting: boolean) => void}, handleSubmit: (values: Superhero) => void) => {
    //console.log(values);
    setSubmitting(false);
    handleSubmit(values);
};

export default submitSuperhero;