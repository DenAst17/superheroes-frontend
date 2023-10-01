/* eslint-disable */
import { FC, useState } from 'react';
import './superhero.list.css'
import usePagination from "../../../../hooks/use.pagination";
import { Pagination } from "@mui/material";

import SuperheroCard from '../main/superhero.card';
import { ISuperheroList } from '../../types/form.types';
import Superhero from '../../../../entities/superhero.entity';

const SuperheroList: FC<ISuperheroList> = ({ superheros, handleDeleteSuperhero }) => {
    let [page, setPage] = useState(1);
    const PER_PAGE = 5;

    const count = Math.ceil(superheros.length / PER_PAGE);
    const _DATA = usePagination(superheros, PER_PAGE);

    const handleChange = (e: React.ChangeEvent<unknown>, p: number) => {
        setPage(p);
        _DATA.jump(p);
    };
    return (
        <>
            <div className='listWrapper'>
                {_DATA.currentData().map((superhero: Superhero, index: number) => (
                    <SuperheroCard
                        key={index}
                        superhero={superhero}
                        handleDeleteSuperhero={handleDeleteSuperhero}
                    />
                ))}
            </div>
            <Pagination
                className="superheroesPagination"
                count={count}
                size="large"
                page={page}
                variant="outlined"
                shape="rounded"
                onChange={handleChange}
            />
        </>
    );
}

export default SuperheroList;
