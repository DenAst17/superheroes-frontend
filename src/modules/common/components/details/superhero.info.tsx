/* eslint-disable */
import { FC } from 'react';
import Superhero from '../../../../entities/superhero.entity';
import SuperheroTitle from '../styled/superhero.title';
import SuperheroSubtitle from '../styled/superhero.subtitle';

const SuperheroInfo: FC<{
    superhero: Superhero
}> = ({ superhero }) => {
    return (
        <>
            <SuperheroTitle>
                Nickname: {superhero.nickname}
            </SuperheroTitle>
            <SuperheroSubtitle>
                Real name: {superhero.real_name}
            </SuperheroSubtitle>
            <SuperheroSubtitle>
                Origin description: {superhero.origin_description}
            </SuperheroSubtitle>
            <SuperheroSubtitle>
                Superpowers: {superhero.superpowers}
            </SuperheroSubtitle>
            <SuperheroSubtitle>
                Catch phrase: {superhero.catch_phrase}
            </SuperheroSubtitle>
        </>
    );
}

export default SuperheroInfo;
