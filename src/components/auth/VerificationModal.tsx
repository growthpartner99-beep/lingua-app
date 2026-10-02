import { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

type VerificationModalProps = {
  visible: boolean;
  email: string;
  onClose: () => void;
  onVerified: () => void;
};

const CODE_LENGTH = 6;

export function VerificationModal({
  visible,
  email,
  onClose,
  onVerified,
}: VerificationModalProps) {
  const [code, setCode] = useState("");

  const handleClose = () => {
    setCode("");
    onClose();
  };

  useEffect(() => {
    if (code.length < CODE_LENGTH) return;
    const timer = setTimeout(onVerified, 250);
    return () => clearTimeout(timer);
  }, [code, onVerified]);

  const handleChange = (raw: string) => {
    setCode(raw.replace(/[^0-9]/g, "").slice(0, CODE_LENGTH));
  };

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={handleClose}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.backdrop}
      >
        <Pressable style={styles.backdropPress} onPress={handleClose} />

        <View className="relative w-full rounded-[24px] bg-white px-6 pb-6 pt-6">
          <View className="h-14 w-14 items-center justify-center self-center rounded-full bg-[#EDEAFE]">
            <FontAwesome5 name="envelope" size={20} color="#6C4EF5" />
          </View>

          <Text className="mt-5 text-center font-poppins-bold text-[22px] leading-[30px] text-text-primary">
            Check your email
          </Text>

          <Text className="mt-2 text-center font-poppins-regular text-[15px] leading-[22px] text-text-secondary">
            We&apos;ve sent a 6-digit verification code to{" "}
            <Text className="font-poppins-medium text-text-primary">
              {email || "your inbox"}
            </Text>
          </Text>

          <View className="relative mt-6 flex-row gap-2">
            {Array.from({ length: CODE_LENGTH }).map((_, index) => (
              <View
                key={index}
                className={`h-[52px] flex-1 items-center justify-center rounded-[12px] border ${
                  code[index] ? "border-primary-purple" : "border-border-default"
                }`}
              >
                <Text className="font-poppins-semibold text-[20px] text-text-primary">
                  {code[index] ?? ""}
                </Text>
              </View>
            ))}

            <TextInput
              value={code}
              onChangeText={handleChange}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              maxLength={CODE_LENGTH}
              autoFocus
              style={styles.codeInput}
            />
          </View>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={handleClose}
            className="mt-6 h-[52px] items-center justify-center rounded-[16px] border border-border-default"
          >
            <Text className="font-poppins-semibold text-[16px] text-text-primary">
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(13, 19, 43, 0.55)",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  backdropPress: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  codeInput: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0,
    fontSize: 16,
    color: "#0D132B",
  },
});
