import React from 'react';
import LeftSideLayout from "components/LeftSideLayout";
import MainContentLayout from "components/MainContentLayout";
import Logo from 'components/Logo';
import NavMenu from 'components/LeftMenu';

const HelpPage = () => {
  return (
    <React.Fragment>
       <LeftSideLayout>
        <Logo />
        
        <NavMenu />
      </LeftSideLayout>
      <MainContentLayout>Тут будет HelpPage</MainContentLayout>
    </React.Fragment>
  )
};

export default HelpPage;
