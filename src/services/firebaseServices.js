import {
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

import { db } from "../firebase/config";

export const createEntity = async (data) => {
  const docRef = await addDoc(
    collection(db, "entities"),
    data
  );

  return docRef.id;
};

export const getEntities = async (
  type = null
) => {
  const snapshot = await getDocs(
    collection(db, "entities")
  );

  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (type) {
    return data.filter(
      (item) => item.category  === type
    );
  }

  return data;
};

export const getEntity = async (id) => {
  const snap = await getDoc(
    doc(db, "entities", id)
  );

  if (!snap.exists()) return null;

  return {
    id: snap.id,
    ...snap.data(),
  };
};

export const updateEntity = async (
  id,
  data
) => {
  await updateDoc(
    doc(db, "entities", id),
    data
  );
};

export const removeEntity = async (id) => {
  await deleteDoc(
    doc(db, "entities", id)
  );
};