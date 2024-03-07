import { StyleSheet, View } from "react-native";
import { Modal } from "react-native";

interface ModalCompProps {
  children: React.ReactElement;
  isVisible?: boolean;
}

export const ModalComp = ({ children, isVisible }: ModalCompProps) => {
  return (
    <Modal visible={isVisible} transparent>
      <View style={styles.container}>
        <View style={styles.modalView}>{children}</View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 10,
    backgroundColor: "rgba(0,0,0,0.5)",
    width: "80%",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    padding: 10,
    width: "60%",
    borderRadius: 10,
    color: "black",
  },
  loading: {
    justifyContent: "center",
    alignItems: "center",
  },
});
