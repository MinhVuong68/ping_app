import firestore from '@react-native-firebase/firestore'

export const addDocument = (collection: string, data: any) => {
    const query = firestore().collection(collection)
    query.add(data)
}   
