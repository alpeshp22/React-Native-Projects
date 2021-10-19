import React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  ImageBackground,
} from 'react-native';
import styles from './BookingDetailScreenStyles';
import * as Organisms from '../../Components/organisms';
import { useSelector, useDispatch } from 'react-redux';
import { getTranslatedValue } from '../../Constants/translation';


const BookingDetailScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const productUser = useSelector((state) => state.product);
  const stateGlobal = useSelector((state) => state.global);

  const [scrollEnabled, setScrollEnabled] = React.useState(false);
  const [headerTitle, setHeaderTitle] = React.useState('Home');

  const translation = (placeholder) => {
    const translation = stateGlobal.translation;
    const currentLanguage = stateGlobal.currentLanguage;
    return getTranslatedValue(
      currentLanguage,
      translation,
      'app/booking_detail_page',
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
  return (
    <View style={styles.flex1}>
      {/* <TouchableWithoutFeedback onPress={() => { navigation.navigate('BookingDetail') }} > */}

      <Organisms.Header
        _onLeftAction={() => {
          navigation.goBack();
        }}
        title={translation('booking_detail_heading_text')}
      />
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.bodyContainer}>
            <View style={styles.header}>
              <View style={styles.title}>
                <Text style={styles.name}>{'Mr. Steave'}</Text>
              </View>
              <View style={styles.info}>
                <Text style={styles.price}>{'13.00 € '}</Text>
              </View>
            </View>
            <View style={styles.destination}>
              <Text style={styles.pickup}>{translation('pickup_label_text')}</Text>
              <Text style={styles.pickupPoint}>{'C.G.Road'}</Text>
              <View style={styles.discription}>
                <Text style={styles.date}>{'10.05.2021 '}</Text>
                <Text style={styles.date}>{'10.10AM'}</Text>
              </View>
            </View>
            <View style={styles.destination}>
              <Text style={styles.pickup}>{translation('drop_off_label_text')}</Text>
              <Text style={styles.pickupPoint}>{'Home'}</Text>
            </View>
            <View style={styles.detail}>
              <Text style={styles.pickup}>{translation('item_description_label_text')}</Text>
              <Text style={styles.pickupPoint}>
                {
                  'Furniture Shifting ,wrapping items in bubble wrap or stretch wrap, putting loose items in boxes and sealed bags, and using straps and cardboard sheets on large items. '
                }
              </Text>
            </View>
            <View style={styles.detail}>
              <Text style={styles.pickup}>{translation('note_label_text')}</Text>
              <Text style={styles.pickupPoint}>
                {
                  'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used infiller text can be very useful when the focus is meant to be on design, not content.'
                }
              </Text>
            </View>
            <View style={styles.destination}>
              <Text style={styles.pickup}>{translation('price_label_text')}</Text>
              <Text style={styles.pickupPoint}>{'13.00 €'}</Text>
            </View>
            <View style={styles.paymentDetail}>
              <Text style={styles.pickup}>{translation('payment_details_label_text')}</Text>
              <View style={styles.status}>
                <Text style={styles.statusTxt}>{translation('status_label_text')}</Text>
                <Text style={styles.status1}>
                  {translation2('complete_status_label_text')}
                  <Text style={styles.line}>{' / '}</Text>
                  <Text style={styles.status2}>{translation2('pending_status_label_text')}</Text>
                </Text>
              </View>
              <View style={styles.status}>
                <Text style={styles.statusTxt}>{translation('payment_mode_label_text')}</Text>
                <Text style={styles.pickupPoint}>{'Online'}</Text>
              </View>
              <View style={styles.status}>
                <Text style={styles.statusTxt}>{translation('transaction_id_label_text')}</Text>
                <Text style={styles.pickupPoint}>{'VADE0B248932'}</Text>
              </View>
            </View>

            {/* <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.text1}>ACCEPT</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.text2}>CANCEL</Text>
            </TouchableOpacity> */}
          </View>
        </ScrollView>
        <View style={styles.bottomBox} >
          <TouchableOpacity style={styles.btnItem} onPress={() => { }} >
            <Text style={styles.btnTxt}>{translation('accept_button_text')}</Text>
            {/* <Text style={styles.btnTxt} >{'Item'}</Text> */}
            {/* {stateCart.items !== undefined &&
							<>
								{stateCart.items.length > 0 && (
									<Text style={styles.badge} >{stateCart.items.length}</Text>
								)}
							</>} */}
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnBox} onPress={() => { }} >
            <Text style={styles.btnTxt} >{translation('cancel_button_text')}</Text>
          </TouchableOpacity>
          {/* <Atoms.Button title={'Next'} style={styles.btnBox} onPress={() => { }} /> */}
        </View>
      </View>
    </View>
  );
};

export default BookingDetailScreen;
