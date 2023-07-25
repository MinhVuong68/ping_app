import React, { useState } from 'react'
import firestore from '@react-native-firebase/firestore'

const useFirestore = (collection: string, condition: any) => {
  const [documents, setDocuments] = useState<any>([])

  React.useEffect(() => {
    let collectionRef = firestore().collection(collection).orderBy('desc')
    if (condition) {
      if (!condition.compareValue || !condition.compareValue.length) {
        // reset documents data
        setDocuments([])
        return
      }

      collectionRef = collectionRef.where(
        condition.fieldName,
        condition.operator,
        condition.compareValue,
      )
    }

    const unsubscribe = collectionRef.onSnapshot(snapshot => {
      const documents = snapshot.docs.map(doc => ({
        ...doc.data(),
      }))

      setDocuments(documents)
    })

    return unsubscribe
  }, [collection, condition])

  return documents
}

export default useFirestore
