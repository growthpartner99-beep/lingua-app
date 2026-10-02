import { useState } from "react";
import { StyleSheet, Text, TextInput, type TextInputProps, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";

type AuthTextInputProps = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  isPassword?: boolean;
  keyboardType?: TextInputProps["keyboardType"];
  autoCapitalize?: TextInputProps["autoCapitalize"];
};

export function AuthTextInput({
  label,
  value,
  onChangeText,
  placeholder,
  isPassword = false,
  keyboardType = "default",
  autoCapitalize = "none",
}: AuthTextInputProps) {
  const [hidden, setHidden] = useState(true);

  return (
    <View className="h-[82px] flex-row items-center rounded-[14px] border border-border-default px-[18px]">
      <View className="flex-1">
        <Text className="font-poppins-regular text-[14px] leading-[20px] text-[#9CA3AF]">
          {label}
        </Text>
        <TextInput
          className="mt-1 h-[26px] p-0 font-poppins-medium text-[16px] leading-[26px] text-text-primary"
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#0D132B"
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          autoCorrect={false}
          secureTextEntry={isPassword && hidden}
          style={isPassword && !value ? styles.dotsSpacing : undefined}
        />
      </View>

      {isPassword && (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setHidden((prev) => !prev)}
          className="ml-3 h-[32px] w-[22px] items-center justify-center"
        >
          <Feather name={hidden ? "eye" : "eye-off"} size={24} color="#6B7280" />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  dotsSpacing: {
    letterSpacing: 2.5,
  },
});
