import { auth, provider, storage } from "../firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import db from "../firebase";
import { SET_USER } from "./actionType";

export const setUser = (payload) => ({
  type: SET_USER,
  user: payload,
});

export function getUserAuth() {
  return (dispatch) => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(setUser(user));
      }
    });
  };
}

export function signInAPI() {
  return (dispatch) => {
    signInWithPopup(auth, provider)
      .then((payload) => {
        dispatch(setUser(payload));
      })
      .catch((error) => alert(error.message));
  };
}

export function signOutAPI() {
  return (dispatch) => {
    signOut(auth)
      .then(() => {
        dispatch(setUser(null));
      })
      .catch((error) => console.log(error.message));
  };
}

export function postArticleAPI(payload) {
  return (dispatch) => {
    if (payload.image !== "") {
      const upload = storage
        .ref(`images/${payload.image.name}`)
        .put(payload.image);
      upload.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Progress: ${progress}%`);
          if (snapshot === "RUNNING") {
            console.log(`Progress: ${progress}%`);
          }
        },
        (error) => console.log(error.code),
        async () => {
          const downloadURL = await upload.snapshot.ref.getDownloadURL();
          db.collection("articles").add({
            actor: {
              description: payload.user.email,
              title: payload.user.displayName,
              date: payload.timestamp,
              image: payload.user.photoURL,
            },
            video: payload.video,
            sharedImage: downloadURL,
            comments: 0,
            description: payload.description,
          });
        }
      );
    } else if (payload.video) {
      db.collection("articles").add({
        actor: {
          description: payload.user.email,
          title: payload.user.displayName,
          date: payload.timestamp,
          image: payload.user.photoURL,
        },
        video: payload.video,
        sharedImage: "",
        comments: 0,
        description: payload.description,
      });
    }
  };
}
