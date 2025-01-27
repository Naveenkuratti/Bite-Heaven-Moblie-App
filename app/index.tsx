

import Header from "@/components/Header";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native";
import AddRestratant from './Button/AddRestratant';
import Registernow from './Button/Registernow';

export default function index() {
  const router = useRouter();

  const navigateToAddRestaurant = () => {
    router.navigate("./Button/AddRestratant"); // Correct navigation for Add Restaurant
  };

  const navigateToLogin = () => {
    router.navigate("./Button/Login"); // Correct navigation for LoginIn
  };
  
  return (
    <SafeAreaView>

      
      <Header
        title="Add Restaurant"
        onPress={navigateToAddRestaurant}
        navigation={{ navigateToLogin }}

      />

    </SafeAreaView>
  );
}
