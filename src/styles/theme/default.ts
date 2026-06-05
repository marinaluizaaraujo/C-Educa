export const defaultTheme = {
    colors: {
        "background": "#EBEBEB",
        "backgroundNav": "#2F369C",
        "backgroundButton": "#F9862F",
        "backgroundInput": "#F0F0F0",
        "delete": "#c92216",
        "linha": "#000763",
        "textPrimary": "#FFFFFF",
        "textSecondary": "#000000",
        "textTertiary": "#020A6F",
        "textInput": "#AFAEAE",
    },
    fontFamily: {
        "primary": "Bpmf Huninn",
    },
    fontSize: {
        title: {
            mobile: "24px",
            tablet: "25px",
            desktop: "40px",
        },
        paragraph: {
            mobile: "16px",
            tablet: "18px",
            desktop: "30px",
        },
        button: {
            mobile: "14px",
            tablet: "16px",
            desktop: "15px",
        }
    },
    borderRadius: {
        button: "8px",
        card: "16px",
        nav: "0 10px 0 0",
        login: "50px",
    },
    widthButton: {
        small: "5.938rem",
        medium: "14.125rem",
        large: "20.063rem",
    },
    heightButton: {
        small: "2.063rem",
        medium: "2.75rem",
        large: "4.5rem",
    }

} as const