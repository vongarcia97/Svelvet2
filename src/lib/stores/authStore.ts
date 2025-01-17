import { writable } from 'svelte/store'
import type { Readable, Writable } from 'svelte/store';

export interface userInfoStore {
  user: Writable<{}>;
  logged_in: Writable<boolean>;
  user_avatar: Writable<string>; // url to avatar img is a string
  user_name: Writable<string>;
  user_email: Writable<string>;
  diagrams: Writable<[]>;
}
// create variable user projects that will be updated when we see that there is a user that's logged in
const userInfoStore: userInfoStore = {
  user: writable({}),
  logged_in: writable(false),
  user_avatar: writable(""), // url to avatar img is a string
  user_name: writable(""),
  user_email: writable(""),
  diagrams: writable([]),
}