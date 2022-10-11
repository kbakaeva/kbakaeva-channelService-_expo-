import * as React from 'react';
import { FC } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import Utils from '../../services/utils';
import { getStyle } from './styles';

interface Props {
    users: Array<any>;
    posts: Array<any>;
    photos: Array<any>;
};

export const PostItemsComponent: FC<Props> = ({ users, posts, photos }) => {
    const styles = React.useMemo(() => getStyle(), []);
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
            {users.map((el: any, ind: number) => {
                return (<View key={ind} style={styles.postContainer}>
                    {Utils.isTablet.slice(0, 4) === 'iPad'
                        ? <Image source={{ uri: photos[el.id]?.thumbnailUrl }} style={styles.image} />
                        : null}
                    <Text numberOfLines={1} style={styles.text}>Autor: {el.name}</Text>
                    <Text numberOfLines={1} style={styles.text}>Company: {el.company.name}</Text>
                    <Text style={styles.text}>Title:{posts[el.id]?.title}</Text>
                </View>)
            }
            )}
        </ScrollView>
    )
};