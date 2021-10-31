const addonStyles = {
  minHeight: "50px",
  borderColor: "brand.darkPink",
};

export default {
  ".chakra-input": {
    color: "brand.dark",
    borderColor: "brand.darkPink",
    borderRadius: "xl",
    minHeight: 50,
    _hover: {
      color: "brand.dark",
      borderColor: "brand.darkPink",
    },
    _focus: {
      boxShadow: "none",
      color: "brand.dark",
      borderColor: "brand.darkPink",
      borderWidth: "2px",
    },
  },
  ".chakra-input__left-element": {
    ...addonStyles,
  },
  ".chakra-input__left-addon": {
    ...addonStyles,
  },
  ".chakra-input__right-element": {
    ...addonStyles,
  },
  ".chakra-input__right-addon": {
    ...addonStyles,
  },
  ".chakra-input__group": {
    alignItems: "center",
  },
  ".chakra-input::placeholder": {
    color: "#BBCBD8",
  },
  ".chakra-textarea": {
    color: "brand.dark",
    borderColor: "brand.darkPink",
    borderRadius: "xl",
    _hover: {
      color: "brand.dark",
      borderColor: "brand.darkPink",
    },
    _focus: {
      boxShadow: "none",
      color: "brand.dark",
      borderColor: "brand.darkPink",
      borderWidth: "2px",
    },
  },
  ".chakra-textarea::placeholder": {
    color: "#BBCBD8",
  },
  ".chakra-select": {
    color: "brand.dark",
    borderColor: "brand.darkPink",
    borderRadius: "xl",
    minHeight: 50,
    _hover: {
      color: "brand.dark",
      borderColor: "brand.darkPink",
    },
    _focus: {
      boxShadow: "none",
      color: "brand.dark",
      borderColor: "brand.darkPink",
      borderWidth: "2px",
    },
  },
  ".chakra-select::placeholder": {
    color: "#BBCBD8",
  },
};
