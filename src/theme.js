import { Platform } from 'react-native';

const theme = {
    colors: {
        primary: '#0366d6',
        white: '#FFFFFF',
        appBar: '#24292e',
        appBackground: '#e1e4e8',
        textPrimary: '#24292e',
        textSecondary: '#586069'
    },
    fontSizes: {
        body: 14,
        subheading: 16,
    },
    fonts: {
        main: Platform.select({
            default: 'System',
            android: 'Roboto',
            ios: 'Arial',
        }),
    },
    fontWeights: {
        normal: '400',
        bold: '700',
    },
};

export default theme;