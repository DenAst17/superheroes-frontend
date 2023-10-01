import styled from 'styled-components'

const Image = styled.img`
`

import { APP_KEYS } from "../../consts";
import { FC } from 'react';

const FileImage: FC<{fileName: string}> = ({ fileName }) => {
  function getImageURL() {
    const url = APP_KEYS.QUERY_KEYS.BASE_URL + APP_KEYS.QUERY_KEYS.IMAGES_URL + fileName;
    return url;
  }
  return (
      <Image
        src={getImageURL()}
        alt="Superhero image"
      />
  );
}

export default FileImage;