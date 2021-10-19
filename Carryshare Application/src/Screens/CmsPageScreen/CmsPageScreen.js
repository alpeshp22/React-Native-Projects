import React, {useState} from 'react';
import {View, Text, Image, Dimensions, ScrollView} from 'react-native';
// import {MainHeader, Loader} from '@Component';
import {useSelector, useDispatch} from 'react-redux';
import styles from './CmsPageScreenStyle';
import * as resources from 'resources';
import * as Organisms from '../../Components/organisms';
import * as Atoms from '../../Components/atoms';
import {getCmsPageAction} from '../../store/content';
// import HTML from 'react-native-render-html';
import {WebView} from 'react-native-webview';

const CmsPageScreen = ({navigation, route}) => {
  const dispatch = useDispatch();
  const stateContent = useSelector((state) => state.content);
  const [title, setTitle] = React.useState('');
  const [contain, setContain] = React.useState(null);

  const stateGlobal = useSelector((state) => state.global);
  console.log('stateContent.cmsPage.content',stateContent.cmsPage)

  React.useEffect(() => {
	const unsubscribe = navigation.addListener('focus', (e) => {
		if (stateContent.cmsPage != {}) {
			_setUpdateValue(stateContent.cmsPage);
		}
	});
	return unsubscribe;
});
React.useEffect(() => {
	if (stateContent.cmsPage != {}) {
		_setUpdateValue(stateContent.cmsPage);
	}
}, [stateContent]);

const _setUpdateValue = (data) => {
	setContain(data)
}


  return (
    <View style={[styles.container, {}]}>
		 <Organisms.Header
        _onLeftAction={() => {
          navigation.goBack();
        }}
        title={contain!=null?contain.page_title:'CmsPage'}
      />
	  {stateGlobal.contantLoader===false&&contain!==null &&(
      <WebView source={{ uri: contain.front_url}} />
	  )}
    <Atoms.Loader loading={stateGlobal.contantLoader}/>
    </View>
  );
};

export default CmsPageScreen;
