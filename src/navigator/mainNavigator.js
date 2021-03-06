import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile39945Navigator from '../features/UserProfile39945/navigator';
import Tutorial39944Navigator from '../features/Tutorial39944/navigator';
import NotificationList39916Navigator from '../features/NotificationList39916/navigator';
import Settings39915Navigator from '../features/Settings39915/navigator';
import Settings39907Navigator from '../features/Settings39907/navigator';
import UserProfile39905Navigator from '../features/UserProfile39905/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile39945: { screen: UserProfile39945Navigator },
Tutorial39944: { screen: Tutorial39944Navigator },
NotificationList39916: { screen: NotificationList39916Navigator },
Settings39915: { screen: Settings39915Navigator },
Settings39907: { screen: Settings39907Navigator },
UserProfile39905: { screen: UserProfile39905Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
