import { SET_FAST_cheap, SET_GOOD_cheap, SET_GOOD_FAST, SET_TOGGLE } from "app/constants"

export const returnCorrectConstant = (optionState, gfc) => {
    const { good, fast, cheap } = gfc
    if ((good === true && fast === true) && (optionState !== "good" && optionState !== "fast")) {
        return SET_GOOD_FAST
    }
    else if (fast === true && cheap === true && (optionState !== "cheap" && optionState !== "fast")) {
        return SET_FAST_cheap
    }
    else if (good === true && cheap === true && (optionState !== "cheap" && optionState !== "good")) {
        return SET_GOOD_cheap
    } else {
        return SET_TOGGLE
    }
}
