import React from "react";
import { View, Image, Alert, Text, TouchableOpacity, } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import styles from "./WelcomeScreenStyle";
import { getTranslatedValue } from '../../Constants/translation';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import * as Atoms from '../../Components/atoms';
import * as resources from 'resources';

const GalleryScreen = ({ navigation, route }) => {
	const dispatch = useDispatch();
	const stateUser = useSelector((state) => state.user);
	const stateGlobal = useSelector((state) => state.global);
	const swiper = React.useRef('');
	const [currentPage, setCurrentPage] = React.useState(0)
	const [initialpage, setInitialpage] = React.useState(0)
	const [images, setImages] = React.useState([
		{ image: resources.LOGO, title: 'slide1_title', description: 'slide1_text' },
		{ image: resources.LOGO, title: 'slide2_title', description: 'slide2_text' },
		{ image: resources.WALKTROUGH3, title: 'slide3_title', description: 'slide3_text' },]);

		const translation = (placeholder) => {
			const translation = stateGlobal.translation;
			const currentLanguage = stateGlobal.currentLanguage;
			return getTranslatedValue(
				currentLanguage,
				translation,
				'app/welcome_page',
				placeholder,
			);
		}
	return (
		<View style={[styles.container]}>
			<View style={styles.btnBack} >

			<TouchableOpacity onPress={() => {
					if (currentPage < 3 && currentPage > 0) {
						swiper.current.scrollTo(currentPage - 1);
					} else {
						navigation.navigate('Home')

					}
				}}>
					<Icon2 name="arrowleft" style={styles.leftIcon} />
				</TouchableOpacity>
				<TouchableOpacity style={styles.btn} onPress={() => { navigation.navigate('Home') }}>

			
				<Text style={styles.text1}>{translation('skip_button_text')}
				<Icon name="arrow-forward-ios" style={styles.icon} />
				</Text>
			</TouchableOpacity>
			</View>

			<Swiper
				style={styles.wrapper}
				showsButtons={false}
				index={initialpage}
				onIndexChanged={index => setCurrentPage(index)}
				ref={swiper}
				loop={false}
				bounces={false}
				onScrollAnimationEnd={true}
				// scrollEnabled={false}
				alwaysBounceHorizontal={false}
				showsPagination={true}
			// autoplay={false}
			>

				{images.map((item, index) => {
					return (
						// <View style={styles.slide1}>
						// <View style={styles.imagBox}>

						// 	<Image style={styles.imageStyle} source={item.image != null ? item.image : resources.LOGO} resizeMode='cover' />

						// </View>
						// <View >
						// 	<Text style={styles.welcome}>{item.title}</Text>
						// 	<Text style={styles.description}>{item.description}</Text>
						// </View>
						// </View>

						<View style={styles.slide1}>
							<View style={styles.imgBox}>
								<Image style={styles.imageStyle} source={item.image != null ? item.image : resources.LOGO} resizeMode={'contain'} />
							</View>
							<View style={styles.subContainer} >
								<Text style={styles.headertext}>{translation(item.title)}</Text>
								<Text style={styles.paraTxt}>{translation(item.description)}</Text>
							</View>
						</View>
					)
				}
				)}
			</Swiper>
			
			<Atoms.Button
				title={currentPage < 2 ? translation('next_button_text'): translation('okay_button_text')}
				onPress={() => {

					if (currentPage < 2) {
						swiper.current.scrollTo(currentPage + 1);
					} else {
						navigation.navigate('Home')

					}
				}}
				style={styles.buttonUpload} textStyle={styles.buttonText} />
		

		</View>
	);

}


export default GalleryScreen;

