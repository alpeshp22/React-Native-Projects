import React, { useRef, useEffect } from "react";
import { View, Text, Image, TouchableNativeFeedback, Animated, StatusBar } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import styles from "./ServiceViewStyle";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const ServiceView =(props)=>  {
	const [rippleColor, setRippleColor] = React.useState(props.rippleColor?props.rippleColor:'rgba(21,117,255,0.2)');
	const [rippleOverflow, setRippleOverflow] = React.useState(false);
	const fadeAnim = useRef(new Animated.Value(1)).current  // Initial value for opacity: 0

//   useEffect(() => {
	
//     Animated.timing(
//       fadeAnim,
//       {
//         toValue: 1,
//         duration: 10000,
//       }
//     ).start();
//   }, [fadeAnim])
	const { containerStyle, iconStyle, titleStyle, onPress, title, iconName,imageName,type,iconType} = props;
	

	return (
		<Animated.View                 // Special animatable View
		style={{
		  ...props.style,
		  opacity: 1,         // Bind opacity to animated value
		}}
	  >
		{type===1?
		<TouchableNativeFeedback background={TouchableNativeFeedback.Ripple(rippleColor, rippleOverflow)} onPress={()=>onPress()}>
		<View style={[styles.cardSectionInner,containerStyle]}>
		<Text style={[styles.cardSectionTitle1,titleStyle]}>{title}</Text>
		<Icon name={iconName} style={[styles.cardSectionIcon1,iconStyle]} />
	</View>
</TouchableNativeFeedback>
		:type===2?
		<TouchableNativeFeedback background={TouchableNativeFeedback.Ripple(rippleColor, rippleOverflow)} onPress={()=>onPress()}>
		<View style={[styles.cardSectionInner2,containerStyle]}>
							<View style={styles.cardSection2Icon1Container}>
							<Icon name={iconName} style={[styles.cardSection2Icon1,iconStyle]} />
							</View>
							<View style={styles.cardSection2Title1Container}>
							<Text numberOfLines={2} style={[styles.cardSection2Title1,titleStyle]}>{title}</Text>
							</View>
						</View>
						</TouchableNativeFeedback>:
						<TouchableNativeFeedback background={TouchableNativeFeedback.Ripple(rippleColor, rippleOverflow)} onPress={()=>onPress()} style={{zIndex:9,}}>
						<View style={[styles.cardSectionInner3,containerStyle]}>
							<View style={styles.cardSection3Icon1Container}>
								<Image style={styles.walkThroughImg} source={imageName} resizeMode='contain' />
								{/* {iconType===1?<Icon2 name={iconName} style={[styles.cardSection3Icon1,iconStyle]} />:<Icon name={iconName} style={[styles.cardSection3Icon1,iconStyle]} />} */}
							</View>
							<View style={styles.cardSection3Title1Container}>
							<Text numberOfLines={2} style={[styles.cardSection3Title1,titleStyle]}>{title}</Text>
							</View>
						</View>
</TouchableNativeFeedback>
		}
		</Animated.View>
	);
}

export default ServiceView;

