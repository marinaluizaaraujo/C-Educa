import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            background: string;
            backgroundNav: string;
            linha: string;
            textPrimary: string;
            textSecondary: string;
        };

        fontFamily: {
            primary: string;
        };

        fontSize: {
            title:{
                mobile: string;
                tablet: string;
                desktop: string;    
            }
            paragraph: {
                mobile: string;
                tablet: string;
                desktop: string;
            }
        };

        sizeFontes: Record<string, number>;
        radius: Record<string, number>;
    }
}