import Superhero from "../entities/superhero.entity";

const superheroForm = (superhero: Superhero) => {
    const form = new FormData();

    form.append("nickname", superhero.nickname as string);
    form.append("real_name", superhero.real_name as string);
    form.append("origin_description", superhero.origin_description as string);
    form.append("superpowers", superhero.superpowers as string);
    form.append("catch_phrase", superhero.catch_phrase as string);
    if(superhero.new_images !== undefined) {
        Array.from(superhero.new_images).forEach((image) => {  
            form.append("images", image);
        })
    }

    return form;
}

export default superheroForm;