import {css} from "styled-components";

const sizes={
    mobile: '500px',
    tablet: '769px',
    desktop: '1200px'
};

export const media={
    mobile: (styles: ReturnType<typeof css>)=>css`
    @media (max-width: ${sizes.mobile}){
        ${styles}
    }
    `,
    tablet: (styles:ReturnType<typeof css>)=>css`
    @media(min-width:${sizes.tablet}){
        ${styles}
    }
    `,

    desktop: (styles:ReturnType<typeof css>)=>css`
    @media(min-width:${sizes.desktop}){
        ${styles}
    }
    `,
}