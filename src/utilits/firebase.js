import firebase from 'firebase'
import constants from '../config/Constants'

firebase.initializeApp(constants.firebaseConfig)

const db=firebase.firestore();
export {db};
export default firebase