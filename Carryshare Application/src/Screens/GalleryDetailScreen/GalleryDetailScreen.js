import React from "react";
import { View,Image,  Alert, } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import styles from "./GalleryDetailScreenStyle";
import {deleteGalleryImages} from '../../store/user';
import * as Organisms from '../../Components/organisms';
import Swiper from 'react-native-swiper';
import { getTranslatedValue } from '../../Constants/translation';
import * as resources from 'resources';

const GalleryScreen = ({ navigation ,route}) => {
	const dispatch = useDispatch();
	const stateUser = useSelector((state) => state.user);
	const stateGlobal = useSelector((state) => state.global);
	const swiper = React.useRef('');
	const [currentPage, setCurrentPage] = React.useState(0)
	const [initialpage, setInitialpage] = React.useState(0)
	const [images, setImages] = React.useState([]);
	const translation = (placeholder) => {
		const translation = stateGlobal.translation;
		const currentLanguage = stateGlobal.currentLanguage;
		return getTranslatedValue(
			currentLanguage,
			translation,
			'app/gallery_page',
			placeholder,
		);
	}
	const translation2 = (placeholder) => {
		const translation = stateGlobal.translation;
		const currentLanguage = stateGlobal.currentLanguage;
		return getTranslatedValue(
			currentLanguage,
			translation,
			'app/global',
			placeholder,
		);
	}
	React.useEffect(() => {
		const unsubscribe = navigation.addListener('focus', (e) => {
			let imageIndex=0;
			if(route.params!=undefined){
				imageIndex=route.params.index
		}
			// setTimeout(() => {	
			// 	swiper.current.scrollTo(imageIndex,true) }, 0.1);
				setInitialpage(imageIndex);
			if (stateUser.galleryData != null) {
				_setUpdateValue(stateUser.galleryData);
			}
		});
		return unsubscribe;
	});

	React.useEffect(() => {
		if (stateUser.galleryData != null) {
			_setUpdateValue(stateUser.galleryData);
		}
	}, [stateUser]);

	const _setUpdateValue = (galleryData) => {
		setImages(galleryData)
	}
	const _delete = params => {
		Alert.alert(translation2('delete_title_text'),
		translation2('logout_modal_description_text'),
			[ { text:translation2('exit_app_modal_cancel_button_text'), onPress: () => {}, style: "cancel" },
			  { text: translation2('exit_app_modal_ok_button_text'), onPress: () => {
				  let request={}
				  request.id = images[currentPage].id
				   dispatch(deleteGalleryImages(request, navigation))
					   
				}
			}],
			{ cancelable: false }
		  );
	  };
	return (
		<View style={[styles.container]}>
			<Organisms.Header _onLeftAction={() => { navigation.goBack() }} title={translation('gallery_heading_text')} 
			_onRightAction={()=> {_delete()}} rightIconName={'delete-empty'} iconRightStyle={styles.iconRightStyle} iconStyle={styles.iconStyle}
			/>
			<Swiper
				style={styles.wrapper}
				showsButtons={false}
				index={initialpage}
				onIndexChanged={index => setCurrentPage(index)}
				ref={swiper}
				loop={false}
				bounces={false}
				onScrollAnimationEnd={false}
				// scrollEnabled={false}
				alwaysBounceHorizontal={false}
				showsPagination={false}
			>
				{images.map((item, index) => {
					return (
						<View style={styles.flex1}>
							<Image source={item.image!=null?{uri:item.image}:resources.USER_IMG} style={styles.bannerImg} />
						</View>
					)}
				)}
			</Swiper>


		</View>
	);

}


export default GalleryScreen;

