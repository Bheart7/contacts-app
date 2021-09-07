import storage from '@react-native-firebase/storage';

export default (file) => (onSuccess) => (onError) => {

    const path = `contact-pictures/user/777/${file.filename || new Date()}`; 
    const ref = storage().ref(path);

    const task = ref.putFile(file.path);

    task.then(async () => {
        const url = await ref.getDownloadURL();
        onSuccess(url);
    }).catch(error => {
        onError(error);
    });
};