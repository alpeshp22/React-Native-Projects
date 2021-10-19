import * as React from 'react';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import { theme } from '../Constants/Theme';
import { color } from '../Constants/Color';
import { Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import SplashScreen from '../Screens/SplashScreen';
import LoginScreen from '../Screens/LoginScreen';
import HomeScreen from '../Screens/HomeScreen';
import PaymentScreen from '../Screens/PaymentScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import AddressEditScreen from '../Screens/AddressEditScreen';
import NotificationListScreen from '../Screens/NotificationListScreen';
import SettingsScreen from '../Screens/SettingsScreen';
import BidScreen from '../Screens/BidScreen';
import TripPlaneScreen from '../Screens/TripPlaneScreen';
import BookingDetailScreen from '../Screens/BookingDetailScreen';
import RegistrationScreen from '../Screens/RegistrationScreen';
import ProfileCompleteScreen from '../Screens/ProfileCompleteScreen';
import ChangePasswordScreen from '../Screens/ChangePasswordScreen';
import IdVerificationScreen from '../Screens/IdVerificationScreen';
import SecurityScreen from '../Screens/SecurityScreen';
import NotificationSettingScreen from '../Screens/NotificationSettingScreen';
import GalleryScreen from '../Screens/GalleryScreen';
import GalleryDetailScreen from '../Screens/GalleryDetailScreen';
import DocumentDetailsScreen from '../Screens/DocumentDetailsScreen';
import DocumentListScreen from '../Screens/DocumentListScreen';
import WelcomeScreen from '../Screens/WelcomeScreen';
import CmsPageScreen from '../Screens/CmsPageScreen';
import EditProfileScreen from '../Screens/EditProfileScreen';


const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const platform = Platform.OS;

function MyTab({ navigation }) {
	const stateUser = useSelector((state) => state.user);
	const iconColor = theme.Profile_BG;
	return (
		<Tab.Navigator
			headerMode={'none'}
			initialRouteName="Login"
			activeColor={theme.THEME_COLOR}
			inactiveColor={theme.Disabled_TabColor}
			barStyle={{
				backgroundColor: theme.Bottom_Tab_BG,
				borderTopColor: theme.PRIMARY_BORDER_COLOR,
				borderTopWidth: 0.5,
			}}>
			<Tab.Screen
				name="Home"
				component={HomeScreen}
				options={{
					tabBarLabel: '',
					tabBarIcon: ({ color, size }) => (
						<Icon name={'layers'} size={25} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="Bid"
				component={BidScreen}
				options={{
					tabBarLabel: '',
					tabBarIcon: ({ color, size }) => (
						<Icon2 name={'offer'} size={25} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="Payment"
				component={PaymentScreen}
				options={{
					tabBarLabel: '',
					tabBarIcon: ({ color, size }) => (
						<Icon name={'dollar-sign'} size={25} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="Settings"
				component={SettingsScreen}
				options={{
					tabBarLabel: '',
					tabBarIcon: ({ color, size }) => (
						<Icon name={'settings'} size={24} color={color}  />
					),
				}}
			/>
		</Tab.Navigator>
	);
}

export const navigationRef = React.createRef();
export const navigate = (name, params) => {
	//navigationRef.current?.navigate(name, params);

	navigationRef.current?.dispatch(
		CommonActions.reset({
			index: 0,
			routes: [{ name: 'Login' }],
		}),
	);

	// navigationRef.current?.dispatch(
	// 	CommonActions.reset({
	// 		index: 0,
	// 		routes: [{ name: 'Login' }],
	// 	}),
	// );
};

export default function Navigation(props) {
	const routeNameRef = React.useRef();
	return (
		<NavigationContainer
			ref={navigationRef}
			onReady={() =>
				(routeNameRef.current = navigationRef.current.getCurrentRoute().name)
			}
			onStateChange={() => {
				const previousRouteName = routeNameRef.current;
				const currentRouteName = navigationRef.current.getCurrentRoute().name;
				props.setCurrentRouteName(currentRouteName);
			}}>
			<Stack.Navigator>
				<Stack.Screen options={{ headerShown: false }} name="Splash" component={SplashScreen} />
				<Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
				<Stack.Screen options={{ headerShown: false }} name="NotificationList" component={NotificationListScreen} />
				<Stack.Screen options={{ headerShown: false }} name="Profile" component={ProfileScreen} />
				<Stack.Screen options={{ headerShown: false }} name="EditProfile" component={EditProfileScreen} />
				<Stack.Screen options={{ headerShown: false }} name="AddressEdit" component={AddressEditScreen} />
				<Stack.Screen options={{ headerShown: false }} name="TripPlane" component={TripPlaneScreen} />
				<Stack.Screen options={{ headerShown: false }} name="MyTab" component={MyTab} /> 
				<Stack.Screen options={{ headerShown: false }} name="DocumentDetail" component={DocumentDetailsScreen} />
				<Stack.Screen options={{ headerShown: false }} name="BookingDetail" component={BookingDetailScreen} />
				<Stack.Screen options={{ headerShown: false }} name="Registration" component={RegistrationScreen}/>
				<Stack.Screen options={{ headerShown: false }} name="ProfileComplete" component={ProfileCompleteScreen}/>
				<Stack.Screen options={{ headerShown: false }} name="ChangePassword" component={ChangePasswordScreen}	/>
				<Stack.Screen options={{ headerShown: false }} name="IdVerification" component={IdVerificationScreen}/>
				<Stack.Screen options={{ headerShown: false }} name="NotificationSetting" component={NotificationSettingScreen}/>
				<Stack.Screen options={{ headerShown: false }} name="Security" component={SecurityScreen} />
				<Stack.Screen options={{ headerShown: false }} name="Gallery" component={GalleryScreen} />
				<Stack.Screen options={{ headerShown: false }} name="GalleryDetail" component={GalleryDetailScreen} />
				<Stack.Screen options={{ headerShown: false }} name="DocumentList" component={DocumentListScreen} />
				<Stack.Screen options={{ headerShown: false }} name="Welcome" component={WelcomeScreen} />
				<Stack.Screen options={{ headerShown: false }} name="CmsPage" component={CmsPageScreen} />


			</Stack.Navigator>
		</NavigationContainer>
	);
}
