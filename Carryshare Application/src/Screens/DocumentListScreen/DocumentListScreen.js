import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import styles from './DocumentListScreenStyle';
import * as Organisms from '../../Components/organisms';
import * as Atoms from '../../Components/atoms';
import * as resources from 'resources';
import { useSelector, useDispatch } from 'react-redux';
import {getDocumentAction} from '../../store/user/actions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { getTranslatedValue } from '../../Constants/translation';


const DocumentScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const stateUser = useSelector((state) => state.user); 
	const stateGlobal = useSelector((state) => state.global);
	const [refreshing, setRefreshing] = React.useState(false);
  const [documantList, setDocumantList] = React.useState([]);
  const [headerTitle, setHeaderTitle] = React.useState('');
  const [section, setSection] = React.useState([{data:[{image:null},{image:null}],id:1,document_id:'41AS4578S5',Documant_type:'Driving License',Expire_Date:'12.05.2021',natiality:'India'},{data:[{image:null},{image:null}],id:1,document_id:'41AS4578S5',Documant_type:'Driving License',Expire_Date:'12.05.2021',natiality:'India'}]);
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

  
  dispatch(getDocumentAction())
		if (stateUser.documentData != null) {
			_setUpdateValue(stateUser.documentData);
		}


	});
	return unsubscribe;
});
React.useEffect(() => {
	if (stateUser.documentData != null) {
		_setUpdateValue(stateUser.documentData);
	}
}, [stateUser.documentData]);

const _setUpdateValue = (data) => {
	setDocumantList(data)
	setRefreshing(!refreshing)
}




  const _onClick=(i, j)=>{
	console.log("item,index",i, j)
	console.log("documantList"	 ,documantList)
const filteredResult = documantList.filter((item) => {
    return (item.image.indexOf(i) >= 0);
});
let filteredData=filteredResult[0].image
console.log('___ filteredResult', filteredData)
let images = []
	for (let i = 0; i < filteredData.length; i++) {
		let obj={}
		obj.uri=filteredData[i]
		images.push(obj)
	}
	console.log('images==',images)
	  navigation.navigate('DocumentDetail',{images:images,index:j})

  }

  

  const _renderFlatList = ({item, index}) => {
	return(
		<>
		<TouchableOpacity onPress={()=>{ _onClick(item, index)}}
		>
		<View  style={styles.flatListContainer}>
		<Image source={item!=null?{uri:item}:resources.USER_IMG} style={styles.img} />
		</View>
		</TouchableOpacity>
	</>
	)
};
const _renderCard = ({item, index}) => {
	return(
		<View style={item.status===1?styles.vrifiedCard:styles.cardView}>
	
		<View style={styles.headeRow}>
			<Text style={styles.title}>{item.type.title}</Text>
			{item.status === 1 ? <Icon style={styles.dayChecked} name='check-decagram' /> : <></>}</View >

		<View style={styles.topRow}>
			<Text style={styles.title}>{translation('document_id_label_text')}</Text>
			<Text style={styles.text}>{': '+ item.doc_number}</Text>
		</View>
		<View style={styles.row}>
			<Text style={styles.title}>{translation('nationality_label_text')}</Text>
			<Text style={styles.text}>{': '+ item.country.country_name}</Text>
		</View>
		<View style={styles.row}>
			<Text style={styles.title}>{translation('expiry_label_text')}</Text>
			<Text style={styles.text}>{': '+ item.expiry_date}</Text>
		</View>
		<View style={styles.flatList}> 
		<FlatList 
		 data={item.image}
		 renderItem={_renderFlatList}
		 horizontal={true}
		 refreshing={refreshing}

	   />
	   </View>
	   </View>
	)
}


  return (
    <View style={styles.flex1}>
   <Organisms.Header   _onLeftAction={() => { navigation.goBack() }}  title={translation('document_list_heading_text')} />
   {(documantList!=null&&documantList.length>0) ?
   <FlatList 
	//   numColumns={3}
		// columnWrapperStyle={styles.row}
		data={documantList}
		renderItem={_renderCard}
		refreshing={refreshing}
		// keyExtractor={keyExtractor}
	  />:
	  <Atoms.EmptyRecord />}
    </View>
  );
};

export default DocumentScreen;
