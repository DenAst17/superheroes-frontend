/* eslint-disable */
import { FC } from 'react';

import './superhero.maincontent.css';
import { ImageList, ImageListItem } from '@mui/material';
import FileImage from '../styled/file.image';

const SuperheroImageList: FC<{
    imageFiles: string[]
}> = ({ imageFiles }) => {
    return (
        <ImageList variant="masonry" cols={3} gap={10}>
            {imageFiles.map((file) => (
                <ImageListItem key={file}>
                    <FileImage
                        fileName={file}
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

export default SuperheroImageList;
