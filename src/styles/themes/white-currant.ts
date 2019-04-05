import { getColors } from "../utilities";
import { ThemeInterface, colorsLuminosity } from "../";
import randomColor from "randomcolor";

const accentColors = {
  red: getColors(255, 25, 25),
  green: getColors(8, 191, 52),
  blue: getColors(0, 122, 255),
  orange: getColors(255, 149, 0)
};

const brand = {
  red: getColors(233, 39, 107),
  purple: getColors(96, 45, 144)
};

const randomColors = (luminosity: colorsLuminosity, count: number = 10) =>
  randomColor({
    hue: "purple",
    format: "hex",
    alpha: 1,
    luminosity,
    count
  });

export default {
  name: "whiteCurrant",
  background: getColors(255, 255, 255),
  background2: getColors(246, 245, 247),
  interface: getColors(255, 255, 255),
  pale: getColors(224, 223, 225),
  light: getColors(195, 192, 196),
  lowlight: getColors(144, 142, 145),
  text: getColors(0, 0, 0),
  textOnAccent: getColors(255, 255, 255),
  highlight: getColors(107, 54, 143),
  accents: accentColors,
  brand: brand,
  randomColors: randomColors,
  shadow: getColors(220, 220, 220),
  shadows: {
    button: "0px 2px 6px 0px " + getColors(0, 0, 0).rgba(0.2),
    table: "none",
    card: "0rem 8px 8px 0px " + getColors(0, 0, 0).rgba(0.14)
  },
  borders: {
    button: {
      width: "1px",
      style: "solid"
    },
    table: {
      width: "1px",
      style: "solid",
      color: getColors(217, 217, 217).hex
    },
    widget: {
      width: "1px",
      style: "solid",
      radius: "0.5rem",
      color: getColors(217, 217, 217).hex
    }
  },
  radius: {
    default: "2px",
    window: "0.25rem",
    button: "0.25rem",
    card: "0.5rem",
    table: "0.5rem"
  },
  gradient: {
    default: [
      getColors(127, 8, 191).rgba(1.0),
      getColors(127, 8, 191).rgba(0.8)
    ],
    buddy: ["#FFFFFF", getColors(127, 8, 191).hex],
    card: [getColors(127, 8, 191).hex, getColors(156, 58, 216).hex]
  },
  scrollbar: {
    thumb: {
      size: 8,
      color: getColors(127, 8, 191).rgba(0.7),
      borderWidth: 0,
      borderRadius: 8,
      borderColor: getColors(0, 0, 0).rgba(0)
    },
    backgroundColor: getColors(217, 217, 217).rgba(0.3),
    borderWidth: 0,
    borderRadius: 8,
    borderColor: getColors(217, 217, 217).rgba(0),
    offsetPosition: 2
  }
} as ThemeInterface;
