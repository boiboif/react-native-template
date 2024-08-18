import {Box, Text} from '@/components';
import {useNavigation} from '@react-navigation/native';
import React, {ComponentProps, useState} from 'react';
import {ScrollView} from 'react-native';
import {Button, Modal, Portal} from 'react-native-paper';
import ReactSvg from '@/assets/svg/react.svg';
import {disableKioskMode} from 'kiosk-react-native';

const containerStyle = {
  backgroundColor: 'white',
  width: '80%',
  maxHeight: '80%',
} as ComponentProps<typeof Modal>['contentContainerStyle'];

const Dashboard = () => {
  const [visible, setVisible] = useState(false);
  const navitaion = useNavigation<any>();

  return (
    <Box>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={() => setVisible(false)}
          contentContainerStyle={containerStyle}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ScrollView>
            <Box padding="m">
              {Array(100)
                .fill(null)
                .map((_, index) => (
                  <Text key={index}>haha</Text>
                ))}
            </Box>
          </ScrollView>
        </Modal>
      </Portal>

      <Button
        mode="contained"
        onPress={() => {
          setVisible(true);
        }}>
        App
      </Button>

      <Button mode="contained" onPress={disableKioskMode}>
        取消kiosk
      </Button>

      <ReactSvg />

      <Box padding="m" borderRadius={20}>
        <Text onPress={() => navitaion.navigate('Test')}>1234</Text>
      </Box>
    </Box>
  );
};

export default Dashboard;
