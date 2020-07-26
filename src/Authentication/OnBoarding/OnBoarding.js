import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native';
import Animated from 'react-native-reanimated';
import Slide, { SLIDE_HEIGHT } from './Slide';
import { useValue, onScrollEvent, interpolateColor } from 'react-native-redash';

const { width, height } = Dimensions.get("window");

export default function OnBoarding() {

    const x = useValue(0);
    // TODO: useScrollEvent
    const onScroll = onScrollEvent({ x });
    const backgroundColor = interpolateColor(x, {
        inputRange: [0, width, width * 2, width * 3],
        outputRange: ['#bfeaf5', '#beecc4', '#ffe4d9', '#ffdddd']
    })
    return (
        <View style={styles.container}>
            <Animated.View style={[styles.slider, { backgroundColor }]}>
                <Animated.ScrollView
                    horizontal
                    snapToInterval={width}
                    decelerationRate="fast"
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    scrollEventThrottle={1}
                    {...{ onScroll }}
                >
                    <Slide label="Ceramica" />
                    <Slide label="Escultural" right />
                    <Slide label="Colonial" />
                    <Slide label="Orfebreria" right />
                </Animated.ScrollView>
            </Animated.View>
            <View style={styles.footer}>
                <Animated.View style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}>

                </Animated.View>

                <View style={{ flex: 1, backgroundColor: "white", borderTopLeftRadius: 75 }}>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    slider: {
        height: SLIDE_HEIGHT,
        borderBottomRightRadius: 75
    },
    footer: {
        flex: 1
    }
})
