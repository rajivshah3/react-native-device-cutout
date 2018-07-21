/* eslint-disable import/no-unresolved */
import { NativeModules } from 'react-native';
/* eslint-enable import/no-unresolved */

const { RNDeviceCutout } = NativeModules;

export const getBoundingRects = () => RNDeviceCutout.getBoundingRects();

export const getSafeInsetBottom = () => RNDeviceCutout.getSafeInsetBottom();

export const getSafeInsetLeft = () => RNDeviceCutout.getSafeInsetLeft();

export const getSafeInsetRight = () => RNDeviceCutout.getSafeInsetRight();

export const getSafeInsetTop = () => RNDeviceCutout.getSafeInsetTop();
