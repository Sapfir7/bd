import { create } from 'zustand';

export type FriendStatus = 'online' | 'idle' | 'offline';

export interface FriendPosition {
  coords: [number, number];
  ts: number;
}

export interface Friend {
  id: string;
  name: string;
  avatar: string;
  status: FriendStatus;
  trail: FriendPosition[]; // newest first
}

interface FriendsState {
  friends: Friend[];
  setFriends: (friends: Friend[]) => void;
  updateFriend: (id: string, updater: (friend: Friend) => Friend) => void;
}

export const useFriendsStore = create<FriendsState>((set) => ({
  friends: [],
  setFriends: (friends) => set({ friends }),
  updateFriend: (id, updater) =>
    set((state) => ({
      friends: state.friends.map((friend) => (friend.id === id ? updater(friend) : friend)),
    })),
}));
