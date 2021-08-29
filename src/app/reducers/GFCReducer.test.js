import GFCReducer from './GFCReducer'
import { SET_FAST_cheap, SET_GOOD_cheap, SET_GOOD_FAST, SET_TOGGLE } from 'app/constants';

test('should return the initial state', () => {
    expect(GFCReducer(undefined, { })).toEqual(
        {
            good: true,
            fast: true,
            cheap: false
        }
    )
})

test('if fast and cheap === true cheap should be made false', () => {
    expect(GFCReducer({
        good: false,
        fast: true,
        cheap: false
    }, { type: SET_FAST_cheap, payload: "good" })).toEqual(
        {
            good: true,
            fast: true,
            cheap: false
        }
    )
})

test('if fast and good === true fast should be made false', () => {
    expect(GFCReducer({
        good: true,
        fast: true,
        cheap: false
    }, { type: SET_GOOD_FAST, payload: "cheap" })).toEqual(
        {
            good: true,
            fast: false,
            cheap: true
        }
    )
})

test('if cheap and good === true good should be made false', () => {
    expect(GFCReducer({
        good: true,
        fast: false,
        cheap: true
    }, { type: SET_GOOD_cheap, payload: "fast" })).toEqual(
        {
            good: false,
            fast: true,
            cheap: true
        }
    )
})

test('if user should be able to toggle values if less than two truthy values exist', () => {
    expect(GFCReducer({
        good: false,
        fast: false,
        cheap: true
    }, { type: SET_TOGGLE, payload: "fast" })).toEqual(
        {
            good: false,
            fast: true,
            cheap: true
        }
    )
})
