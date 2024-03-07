import { StyleSheet, View, Text } from "react-native";
import { PokemonObj } from "../../../utils";
import { Button, Meter, ModalComp } from "../../../components";

interface StatsModalProps {
  pokemon: PokemonObj;
  isModalOpen: boolean;
  openModal: (e: boolean) => void;
}

export const StatsModal = ({
  pokemon,
  isModalOpen,
  openModal,
}: StatsModalProps) => {
  return (
    <View>
      <ModalComp isVisible={isModalOpen}>
        <View style={styles.content}>
          <View>
            <Text style={styles.title}>{pokemon.name}</Text>
          </View>
          <View>
            {pokemon.stats.map((item) => {
              const pokemonStat =
                item.stat.name.charAt(0).toUpperCase() +
                item.stat.name.slice(1);

              return (
                <View style={styles.meterContainer} key={item.stat.name}>
                  <Text style={styles.text}>{pokemonStat}</Text>
                  <Text style={styles.text}>{item.base_stat}</Text>
                  <Meter value={item.base_stat} />
                </View>
              );
            })}
          </View>
          <Button onPress={() => openModal(false)}>
            <Text>Close</Text>
          </Button>
        </View>
      </ModalComp>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  meterContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    width: "100%",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  text: {
    color: "#fff",
  },
  title: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    textTransform: "capitalize",
  },
});
