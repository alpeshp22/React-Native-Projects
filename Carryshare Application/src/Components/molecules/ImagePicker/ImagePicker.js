import React  from 'react';
import { useDispatch, useSelector } from "react-redux";
import { View, Text, TouchableOpacity, } from 'react-native';
import styles from './ImagePickerStyle';
import Icon from 'react-native-vector-icons/Feather';
import Modal from 'react-native-modal';
import { getTranslatedValue } from '../../../Constants/translation';


export const ImagePicker = (props) => {
	const [modalVisible, setModalVisible] = React.useState(false);
	const stateUser = useSelector((state) => state.user);
	const stateGlobal = useSelector((state) => state.global);


	const { isVisible, onRequestClose, chooseGalleryImage, chooseCameraImage,
		customeStyle, translationKeys, contentText, tiltleText, isTrashVisible, onDelete, onRef,
	} = props;

	React.useEffect(() => {
		setModalVisible(isVisible)

	}, [isVisible]);

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

	const _openClosModal = (isVisible,) => {
		setModalVisible(isVisible)
	};




	return (
		<View>
			<Modal
				// isVisible={true}
				ref={onRef != undefined?onRef:null}
				isVisible={modalVisible}
				onBackButtonPress={() => { onRequestClose(); }}
				onBackdropPress={() => { onRequestClose(); }}
				animationIn='slideInUp'
				animationOut='slideOutDown'
				style={{}}
			// coverScreen={false}
			>
				<View style={styles.addressModalContainer}>
					<View style={styles.addressModalbody}>
						<View style={styles.addressModalCard}>
							<View style={styles.addressModalCardHeader}>
								<Text style={styles.addressModalCardHeaderTxt}>{translation('upload_profile_photo_heading_text')}</Text>
							</View>
							<TouchableOpacity style={[styles.btn1, styles.middleBtn]} onPress={() => { chooseCameraImage() }}>
								<Icon name="camera" style={styles.camaraIcon} />
								<Text style={styles.btn1Txt}>{translation('open_camera_label_text')}</Text>
							</TouchableOpacity>
							<TouchableOpacity style={styles.btn1} onPress={() => { chooseGalleryImage() }}>
								<Icon name="image" style={styles.imageIcon} />
								<Text style={styles.btn1Txt}>{translation('gallery_photo_label_text')}</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</Modal>


		</View >
	);
}

export default ImagePicker;

