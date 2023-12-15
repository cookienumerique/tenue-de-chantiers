import { SlideFade, Stack } from '@chakra-ui/react';
import React, { ReactElement } from 'react';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { IoMdSearch } from 'react-icons/io';
import {
  IoAddSharp,
  IoMapOutline,
} from 'react-icons/io5';
import { TfiClose } from 'react-icons/tfi';

import IconButton from '@/components/button/IconButton';

export default function ButtonShortCut(): ReactElement {
  const gap = '2em';
  const [isOpenedMenu, setIsOpenedMenu] =
    React.useState<boolean>(false);

  /**
   * @description Handle click on menu button
   */
  const handleClickMenu = () => {
    setIsOpenedMenu((prev) => !prev);
  };

  const commonProps = {
    isRound: true,
    backgroundColor: 'primary.200',
    fontSize: '20px',
    color: 'gray.500',
    width: '2.5em',
    height: '2.5em',
  };

  return (
    <Stack
      position="fixed"
      alignItems="center"
      bottom="2em"
      right="2em"
      gap={gap}
    >
      <SlideFade
        offsetY="2em"
        in={isOpenedMenu}
      >
        <Stack gap={gap}>
          <IconButton
            {...commonProps}
            aria-label="carte"
            label="Accéder à la carte"
            icon={<IoMapOutline />}
          />
          <IconButton
            {...commonProps}
            label="Rechercher"
            aria-label="search"
            icon={<IoMdSearch />}
          />
          <IconButton
            {...commonProps}
            label="Créer une infraction"
            aria-label="create"
            icon={<IoAddSharp />}
          />
        </Stack>
      </SlideFade>

      <IconButton
        {...commonProps}
        label={isOpenedMenu ? 'Fermer' : 'Menu rapide'}
        aria-label="create"
        icon={
          isOpenedMenu ? (
            <TfiClose />
          ) : (
            <HiOutlineDotsHorizontal />
          )
        }
        backgroundColor="primary.400"
        color="white"
        fontSize="24px"
        height="3em"
        width="3em"
        onClick={handleClickMenu}
      />
    </Stack>
  );
}
