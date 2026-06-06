import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            background: string;
            backgroundNav: string;
            backgroundButton: string;
            backgroundInput: string;
            delete: string;
            linha: string;
            textPrimary: string;
            textSecondary: string;
            textTertiary: string;
            textInput: string;
        };

        fontFamily: {
            primary: string;
        };

        fontSize: {

            title: {
                mobile: string;
                tablet: string;
                desktop: string;
            }
            paragraph: {
                mobile: string;
                tablet: string;
                desktop: string;
            }

            button: {
                mobile: string;
                tablet: string;
                desktop: string;
            }
        };

        borderRadius: {
            button: string;
            card: string;
            nav: string;
            login: string;
        }
        widthButton: {
            small: string;
            medium: string;
            large: string;
        },
        heightButton: {
            small: string;
            medium: string;
            large: string;
        }
    }
}