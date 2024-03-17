declare module '*.png'

type CardProps = {
    area: number;
    price: number;
    location: string;
    image: string;
}

declare module "*.svg" {
    import React from 'react'
    import { SvgProps } from 'react-native-svg'
    const content: React.FC<SvgProps>
    export default content
}