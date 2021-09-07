import React, { useState } from 'react'
import { Text, Image, View } from 'react-native'
import styles from './styles'

function ImageComponent({src}) {
    const [isLoading, setLoading] = useState(false);
    const [hasError, setHasError] = useState(false);

    const onLoadStart = () => {
        setLoading(true);
    };

    const onLoadEnd = () => {
        setLoading(false);
    }

    const onError = () => {
        setLoading(false);
        setHasError(true);
    }



    return (
        <View style={styles.imageContainer}>
            {isLoading && (<Text style={styles.loading}>Loading image</Text>)}
            {hasError && (<Text style={styles.error}>Something went wrong</Text>)}
            <View>
                <Image
                onLoadStart={onLoadStart} 
                onLoadEnd={onLoadEnd} 
                onError={onError} 
                style={styles.detailPhoto} 
                source={{uri: src}} 
                />
            </View>
        </View>
    )
}

export default ImageComponent
