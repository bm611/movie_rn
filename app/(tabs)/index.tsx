import { Text, View, Image, ScrollView, StatusBar } from "react-native";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import SearchBar from "@/components/SearchBar";
import { useRouter } from "expo-router";

const Index = () => {
  const router = useRouter();

  return (
    <View className="flex-1 bg-primary">
      <StatusBar
        backgroundColor="transparent" // Makes the status bar background transparent
        translucent={true} // Allows content to render behind the status bar
        barStyle="light-content" // Makes the status bar items (time, battery, etc.) white
      />
      <Image source={images.bg} className="absolute w-full z-0" />
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        <Image
          source={icons.go_pop}
          className="w-40 h-20 mt-20 mb-5 mx-auto"
          resizeMode="contain"
        />
        <SearchBar
          onPress={() => router.push("/search")}
          placeholder="Search for a movie"
        />
      </ScrollView>
    </View>
  );
};

export default Index;
