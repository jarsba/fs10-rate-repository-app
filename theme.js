import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#586069",
    primary: "#0366d6",
    mainBackground: "#e1e5e8",
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      android: "Roboto",
      ios: "Arial",
      default: "System",
    }),
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
  input: {
    borderRadius: 3,
    marginHorizontal: 10,
    marginVertical: 10,
    marginTop: 10,
    marginBottom: 3,
    padding: 10,
    borderColor: "#d3d3d3",
    borderWidth: 1,
    color: "black",
    errorColor: "#d73a4a",
  },
  submitButton: {
    display: "flex",
    backgroundColor: "#0366d6",
    alignSelf: "center",
  },
  submitText: {
    color: "white",
  },
};

export default theme;
