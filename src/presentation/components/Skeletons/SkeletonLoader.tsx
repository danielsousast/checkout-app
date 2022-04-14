import * as React from 'react';
import {View, StyleSheet, LayoutRectangle} from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import Reanimated, {
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

type SkeletonLoaderProps = {
  backgroundColor: string;
  highlightColor: string;
};

export const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  children,
  backgroundColor,
  highlightColor,
}) => {
  const [layout, setLayout] = React.useState<LayoutRectangle>();
  const shared = useSharedValue(0);

  React.useEffect(() => {
    shared.value = withRepeat(withTiming(1, {duration: 1000}), Infinity);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!layout) {
    return (
      <View onLayout={event => setLayout(event.nativeEvent.layout)}>
        {children}
      </View>
    );
  }

  return (
    <MaskedView
      maskElement={children as any}
      style={{
        width: layout.width,
        height: layout.height,
      }}>
      <View style={[styles.background, {backgroundColor}]} />
      <Reanimated.View style={[StyleSheet.absoluteFill]}>
        <MaskedView
          style={StyleSheet.absoluteFill}
          maskElement={
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={StyleSheet.absoluteFill}
              colors={['transparent', 'black', 'transparent']}
            />
          }>
          <View
            style={[StyleSheet.absoluteFill, {backgroundColor: highlightColor}]}
          />
        </MaskedView>
      </Reanimated.View>
    </MaskedView>
  );
};

const styles = StyleSheet.create({
  background: {
    flexGrow: 1,
    overflow: 'hidden',
  },
});
