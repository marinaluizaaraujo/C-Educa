import { css, type Interpolation } from "styled-components";

const sizes = {
    mobile: '500px',
    tablet: '769px',
    desktop: '1200px'
};

export const media = {
    mobile: <T extends object>(...styles: Interpolation<T>[]) => css<T>`
    @media (max-width: ${sizes.mobile}){
        ${styles}
    }
    `,
    tablet: <T extends object>(...styles: Interpolation<T>[]) => css<T>`
    @media(min-width:${sizes.tablet})and (max-width: 1199px){
        ${styles}
    }
    `,

    desktop: <T extends object>(...styles: Interpolation<T>[]) => css<T>`
    @media(min-width:${sizes.desktop}){
        ${styles}
    }
    `,
}