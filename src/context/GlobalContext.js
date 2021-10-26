import React, { useState } from "react";

const GlobalContext = React.createContext();
const themeConfigDefault = {
  headerDark: false,
  bodyDark: false,
  footerDark: false,
};



const GlobalProvider = ({ children }) => {
  const [theme, setTheme] = useState(themeConfigDefault);
  const [videoModalVisible, setVideoModalVisible] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);
  const [visibleOffCanvas, setVisibleOffCanvas] = useState(false);
  

  //////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////

  // manage the selected project data to send to the projectSpecificationModal
  const [selectedProjectSpecifications, setSelectedProjectSpecifications] = useState(null)
  const [selectedProjectTraductions, setSelectedProjectTranslations] = useState(null)
  const [projectSpecificationsVisible, setProjectSpecificationsVisible] = useState(false)
  const [aboutModalTraductions, setAboutModalTraductions] = useState(null)
  const [headerTraductions, setHeaderTraductions] = useState(null)
  const [categoriesTraductions, setCategoriesLinksTraductions] = useState(null)

  // set the selected project to show in the projectSpecificationModal
  const changeSelectedProjectSpecifications = (project) => {
    setSelectedProjectSpecifications(project)
  }

  // change projectSpecificationModal visibility
  const toggleProjectSpecifications = () => {
    setProjectSpecificationsVisible(!projectSpecificationsVisible)
  }
  const closeProjectSpecifications = () => {
    setProjectSpecificationsVisible(false)
  }
  const changeSelectedProjectTraductions = (data) => {
    setSelectedProjectTranslations(data)
  }



  // change the traductions for aboutModal
  const changeAboutModalTraductions = (data) => {
    setAboutModalTraductions(data)
  }

  const changeHeaderLinksTraductions = (data) => {
    setHeaderTraductions(data)
  }

  const changeCategoriesLinksTraductions = (data) => {
    setCategoriesLinksTraductions(data)
  }

  //////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////


  const changeTheme = (themeConfig = themeConfigDefault) => {
    setTheme({
      ...themeConfig,
    });
  };


  const toggleVideoModal = () => {
    setVideoModalVisible(!videoModalVisible);
  };

  const toggleAbout = () => {
    setAboutVisible(!aboutVisible);
  };

  const closeAbout = () => {
    setAboutVisible(false);
  };

  const toggleContact = () => {
    setContactVisible(!contactVisible);
  };

  const closeContact = () => {
    setContactVisible(false);
  };

  const toggleOffCanvas = () => {
    setVisibleOffCanvas(!visibleOffCanvas);
  };

  return (
    <GlobalContext.Provider
      value={{
        theme,
        changeTheme,
        videoModalVisible,
        toggleVideoModal,
        aboutVisible,
        toggleAbout,
        closeAbout,
        contactVisible,
        toggleContact,
        closeContact,
        visibleOffCanvas,
        toggleOffCanvas,

        changeSelectedProjectSpecifications,
        selectedProjectSpecifications,
        toggleProjectSpecifications,
        closeProjectSpecifications,
        projectSpecificationsVisible,
        selectedProjectTraductions,
        changeSelectedProjectTraductions,
        changeAboutModalTraductions,
        aboutModalTraductions,
        changeHeaderLinksTraductions,
        headerTraductions,
        categoriesTraductions,
        changeCategoriesLinksTraductions
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
export { GlobalProvider };
