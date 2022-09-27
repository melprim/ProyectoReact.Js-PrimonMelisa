import { collection, getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc, setDoc, where } from "firebase/firestore";
import { db } from './firebase';

// CREATE - crear un objeto
export const createItem = async(obj) => {
    const colRef = collection(db, 'Cortinas');
    const data = await addDoc(colRef, obj);
    return data.id;
}

// UPDATE - actualizar un objeto
export const updateItem = async (id, obj) => {
    const colRef = collection(db, 'Cortinas'); //accedo a la coleccion que quiero consultar
    await updateDoc(doc(colRef, id), obj) // paso coleccion if y el valor del nuevo objeto
}

// READ - consulta
export const getItems= async ()  => {
    const colRef = collection(db, 'Cortinas'); //accedo a la coleccion que quiero consultar
    const result = await getDocs(query(colRef));
    return getArrayFromCollection(result);// de la coleccion que me devuelve firebase,lo extraigo y refromateo en un array de objetos 
}

// READ WITH WHERE
// Tener en cuenta que el tipo de dato de la condición debe coincidir con el tipo de dato que hay en Firebase o no obtendré un dato de respuesta
export const getItemsByCondition = async (value) => {
    const colRef = collection(db, 'Cortinas');
    const result = await getDocs(query(colRef, where('age', '==', value)));
    return getArrayFromCollection(result);
}

export const getItemById = async (id) => {
    const colRef = collection(db, 'Cortinas');
    const result = await getDoc(doc(colRef, id));
    return result.data();
}

// DELETE - borra un item
export const deleteItem = async (id) => {
    const colRef = collection(db, 'Cortinas');
    await deleteDoc(doc(colRef, id));
}

//metodo que transforma el valor que me devuelve firebase en un array de objetos - lo uso en READ por ejemplo
const getArrayFromCollection = (collection) => {
    return collection.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
    });
}