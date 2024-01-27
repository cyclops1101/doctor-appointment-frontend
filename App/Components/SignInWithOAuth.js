import React from "react";
import * as WebBrowser from "expo-web-browser";
import { Dimensions, Text, TouchableOpacity } from "react-native";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../../hooks/warmUpBrowser";
import Colors from "../../assets/Shared/Colors";

WebBrowser.maybeCompleteAuthSession();

export default function SignInWithOAuth({ setSignInProcessing }) {
  // Warm up the android browser to improve UX
  // https://docs.expo.dev/guides/authentication/#improving-user-experience
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      setSignInProcessing(true);
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        setSignInProcessing(false);
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
      setSignInProcessing(false);
    }
  }, []);

  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={{
        padding: 16,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 90,
        alignItems: "center",
        marginTop: 20,
        width: Dimensions.get("screen").width * 0.8,
      }}
    >
      <Text style={{ fontSize: 18, color: Colors.WHITE }}>
        Login with Google
      </Text>
    </TouchableOpacity>
  );
}
