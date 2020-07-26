import React, { useRef } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native';
import Animated, { multiply } from 'react-native-reanimated';
import Slide, { SLIDE_HEIGHT } from './Slide';
import { useValue, onScrollEvent, interpolateColor } from 'react-native-redash';
import Subslide from './Subslide';

const { width, height } = Dimensions.get("window");

const BORDER_RADIUS = 75;

const slides = [
    { label: "Ceramica", sublabel: 'La cerámica', description: ' La que se hacía en los pueblos para uso popular. Después vino la cerámica.', color: '#bfeaf5' },
    { label: "Hispanico", sublabel: 'Arte Hispanico', description: 'Todo aquello que es decorado, con carácter suntuario, artístico de la cultura hispanica', color: '#beecc4' },
    { label: "Colonial", sublabel: 'Arte de la colonia', description: 'En las distintas colonizaciones se produce la introducción de las formas artísticas del colonizador.', color: '#ffe4d9' },
    { label: "Orfebreria", sublabel: 'Decoración incisa', description: 'Esta técnica decorativa se realiza con un cincel desde el reverso de la pieza.', color: '#ffdddd' },

]

export default function OnBoarding() {

    const scroll = useRef(null);

    const x = useValue(0);
    // TODO: useScrollEvent
    const onScroll = onScrollEvent({ x });
    const backgroundColor = interpolateColor(x, {
        inputRange: slides.map((_, i) => i * width),
        outputRange: slides.map(slide => slide.color)
    })
    return (
        <View style={styles.container}>
            <Animated.View style={[styles.slider, { backgroundColor }]}>
                <Animated.ScrollView
                    ref={scroll}
                    horizontal
                    snapToInterval={width}
                    decelerationRate="fast"
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                    scrollEventThrottle={1}
                    {...{ onScroll }}
                >
                    {slides.map(({ label }, index) => (
                        <Slide key={index} right={!!(index % 2)} {...{ label }} />
                    ))}
                </Animated.ScrollView>
            </Animated.View>
            <View style={styles.footer}>
                <Animated.View style={{ ...StyleSheet.absoluteFillObject, backgroundColor }}>

                </Animated.View>

                <Animated.View style={[styles.footerContent, { width: width * slides.length, flex: 1, transform: [{ translateX: multiply(x, -1) }] }]}>
                    {slides.map(({ sublabel, description }, index) => (
                        <Subslide
                            onPress={() => {
                                if (scroll.current) {
                                    scroll.current.getNode().scrollTo({ x: width * (index + 1), animated: true })
                                }

                            }}
                            key={index}
                            last={index === slides.length - 1}
                            {...{ sublabel, description }} />
                    ))}
                </Animated.View>
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
        borderBottomRightRadius: BORDER_RADIUS
    },
    footer: {
        flex: 1
    },
    footerContent: {
        flexDirection: 'row',
        backgroundColor: "white",
        borderTopLeftRadius: BORDER_RADIUS
    }
})
