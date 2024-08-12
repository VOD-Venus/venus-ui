import { StateCreator } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export type MenuType = 'global' | 'node' | 'routing';
export type NodeDrawerType = 'editor' | 'share';
export type RoutingDrawerType = 'editor' | 'add';

export interface UI {
  // content menu on right click
  showMenu: string | null;
}
export interface UIAction {}

export type UISlice = UI & UIAction;

const createUISlice: StateCreator<
  UISlice,
  [],
  [['zustand/immer', never]],
  UISlice
> = immer<UISlice>((/* set */) => ({
  showMenu: null,
}));

export default createUISlice;
