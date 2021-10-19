import React, { Component, useRef, useState } from "react";
import { View, Text, Image, TouchableOpacity, SectionList, Alert, RefreshControl, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import styles from "./DocumentDetailsScreenStyle";
import {getGalleryImages,storeGalleryImages ,deleteGalleryImages} from '../../store/user';
import * as Organisms from '../../Components/organisms';
import Swiper from 'react-native-swiper';
import * as Molecules from '../../Components/molecules';
import { getTranslatedValue } from '../../Constants/translation';
import * as resources from 'resources';

const DocumentDetailsScreen = ({ navigation ,route}) => {
	const dispatch = useDispatch();
	const stateUser = useSelector((state) => state.user);
	const stateGlobal = useSelector((state) => state.global);
	const swiper = React.useRef('');
	const [currentPage, setCurrentPage] = React.useState(0)
	const [initialpage, setInitialpage] = React.useState(0)
	const [images, setImages] = React.useState([]);

	const [data, setData] = React.useState([
		{ image: resources.PROFILE_IMG1 }, { image: resources.PROFILE_IMG1}, { image: resources.PROFILE_IMG1 }, { image: resources.PROFILE_IMG1 }, { image: resources.PROFILE_IMG1 },
	])
	const translation = (placeholder) => {
		const translation = stateGlobal.translation;
		const currentLanguage = stateGlobal.currentLanguage;
		return getTranslatedValue(
			currentLanguage,
			translation,
			'app/document_list_page',
			placeholder,
		);
	}
	React.useEffect(() => {
		const unsubscribe = navigation.addListener('focus', (e) => {
			let imageIndex=0;
			if(route.params!=undefined){
				imageIndex=route.params.index
				console.log('** route.params', route.params)
				setImages(route.params.images)
		}
		setTimeout(() => {
				
			swiper.current.scrollTo(imageIndex,true) }, 0.1);
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

	}

	return (
		<View style={[styles.container]}>
			<Organisms.Header _onLeftAction={() => { navigation.goBack() }} title={translation('document_detail_heading_text')} 
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
						<View style={styles.slide1}>
							<Image source={item.uri!=null?{uri:item.uri}:resources} style={styles.bannerImg} />
						</View>
					)}

				)}
			</Swiper>


		</View>
	);

}


export default DocumentDetailsScreen;

