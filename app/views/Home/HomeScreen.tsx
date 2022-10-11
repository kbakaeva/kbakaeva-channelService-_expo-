import * as React from 'react';
import { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native'
import { HeaderComponent } from '../../components/HeaderComponent';
import { PostItemsComponent } from '../../components/PostItemsComponent';

interface Props {
};

export const HomeScreen: FC<Props> = ({ }) => {
    const navigation = useNavigation();
    const [users, setUsers] = React.useState([]);
    const [posts, setPosts] = React.useState([]);
    const [photos, setPhotos] = React.useState([]);

    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(
                (result) => {
                    setUsers(result);
                },
                (error) => {
                    console.log(error);
                }
            )
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(
                (result) => {
                    setPosts(result);
                },
                (error) => {
                    console.log(error);
                }
            )

        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res => res.json())
            .then(
                (result) => {
                    setPhotos(result);
                },
                (error) => {
                    console.log(error);
                }
            )
    }, []);

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <HeaderComponent isShow={true} {...{ navigation }} />
            <View style={{ flex: 0.8 }}>
                <PostItemsComponent {...{ users, posts, photos }} />
            </View>
        </View>
    )
};