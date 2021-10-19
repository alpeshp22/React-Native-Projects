import React, { useState } from "react";
import { View, Image, TouchableOpacity, FlatList ,Alert, } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import styles from "./GalleryScreenStyle";
import { getGalleryImages, storeGalleryImages ,deleteGalleryImages } from '../../store/user';
import * as Organisms from '../../Components/organisms';
import * as Molecules from '../../Components/molecules';
import Swiper from 'react-native-swiper';
import Modal from 'react-native-modal';
import * as resources from 'resources';
import { getTranslatedValue } from '../../Constants/translation';
import ImagePicker from 'react-native-image-picker';
const GalleryScreen = ({ navigation }) => {
	const dispatch = useDispatch();
	const stateUser = useSelector((state) => state.user);
	const stateGlobal = useSelector((state) => state.global);
	const [modalVisible, setModalVisible] = useState(false)
	const [imageModalVisible, setImageModalVisible] = useState(false)
	const [images, setImages] = React.useState([]);
	const [slectedImages, setSlectedImages] = React.useState([]);
	const [imageFile, setImageFile] = useState(null);
	const [currentPage, setCurrentPage] = React.useState(0)
	const [initialpage, setInitialpage] = React.useState(0)
	const [imgIndex, setImgIndex] = React.useState('');
	const swiper = React.useRef('');
	const [imgData, setImgData] = React.useState([]);

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
	const chooseGalleryImage = () => {
		const options = {
			title: 'Pick issue image',
			storageOptions: {
				skipBackup: true,
				path: 'images',
				includeBase64: true,

			},
		};
		ImagePicker.launchImageLibrary(options, (response) => {
			console.log("response==", response)
			if (response.data != undefined) {
				setImageFile(response)
				let demo = []
				demo.push(response)
				let newA = slectedImages.concat(demo)
				console.log('newA', newA)
				validateImage(response.data)
			}
		});
	}
	const chooseCameraImage = () => {
		const options = {
			mediaType: 'photo',
			includeBase64: true,
			maxHeight: 200,
			maxWidth: 200,
		}
		ImagePicker.launchCamera(options, (response) => {
			console.log("response==", response)
			if (response.data != undefined) {
				setImageFile(response)
				let demo = []
				demo.push(response.data)
				validateImage(response.data)
			}
		})
	}


	const validateImage = (image) => {
		console.log('ImageFile', imageFile)
		console.log('image', image)
		let request = {}
		if (image !== undefined) {
			let multiImages = []
			for (let i = 0; i < slectedImages.length; i++) {
				multiImages.push(slectedImages[i].data.data)
			}
			let demo = []
			demo.push(image)
			request.images = demo
			dispatch(storeGalleryImages(request, navigation))
		}
	}

	const _onClick = (item, index) => {
		// navigation.navigate('GalleryDetail', { imageId: item.id, index: index })
		// setImgIndex(imgIndex);
		setInitialpage(index);
		// setImgData(item.images);
console.log('item+++',item)
setImageModalVisible(true);
	}

	const _renderFlatList = ({ item, index }) => {
		return (
			<TouchableOpacity onPress={() => { _onClick(item, index) }}
			>
				<View style={styles.flatListContainer}>
					<Image source={item.image != null ? { uri: item.image } : resources.USER_IMG} style={styles.img} />
				</View>
			</TouchableOpacity>

		)
	};

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
		<View style={[styles.container,]}>
			<Organisms.Header _onLeftAction={() => { navigation.goBack() }} title={translation('gallery_heading_text')}
				_onRightAction={() => { setModalVisible(true) }} rightIconName={'plus'} iconRightStyle={styles.iconRightStyle} iconStyle={styles.iconStyle}
			/>

			<FlatList
				data={images}
				renderItem={_renderFlatList}
				numColumns={3}
				columnWrapperStyle={styles.row}
				keyExtractor={(item, index) => item.id}
				style={styles.serviceFlatList}
			// refreshControl={
			//   <RefreshControl refreshing={false} onRefresh={doRefresh} />
			// }
			/>

			<Modal
				animationOutTiming={700}
				animationInTiming={700}
				animationIn='slideInUp'
				animationOut='slideOutDown'
				transparent={true}
				isVisible={imageModalVisible}
				style={{ margin: 0 }}
				// isVisible={true}
				onBackdropPress={() => { setImageModalVisible(false) }}
				onBackButtonPress={() => { setImageModalVisible(false) }}>
				<View style={[styles.bodyContainer]}>
				<Organisms.Header _onLeftAction={() => {  setImageModalVisible(false)}} title={translation('gallery_heading_text')}
				_onRightAction={() => { _delete() }} rightIconName={'delete-empty'} iconRightStyle={styles.iconRightStyle} iconStyle={styles.iconStyle}
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
							console.log('item++++', item);
							return (
								<View style={styles.flex1}>
									{/* <Image source={resources.USER_IMG} style={styles.bannerImg} /> */}
									<Image source={item.image != null ? { uri: item.image } : resources.USER_IMG} style={styles.bannerImg} />
								</View>
							)
						}
						)}
					</Swiper>


				</View>

			</Modal>

			<Molecules.ImagePicker isVisible={modalVisible} chooseCameraImage={() => { setModalVisible(false), chooseCameraImage() }} onRequestClose={() => { setModalVisible(false) }}
				chooseGalleryImage={() => { setModalVisible(false), chooseGalleryImage() }}
				onDelete={() => { setIsDelete(!isDelete), setModalVisible(false) }} />
		</View>
	);

}


export default GalleryScreen;

