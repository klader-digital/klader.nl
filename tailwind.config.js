import tailwindAspect from '@tailwindcss/aspect-ratio'
import tailwindForms from '@tailwindcss/forms'
import tailwindTypgraphy from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        container: {
            center: true,
            padding: '1rem',
        },
        extend: {
            container: {
                screens: {
                    '2xl': '1440px',
                }
            },
            colors: {
                'dark': '#131516',
                'brand': {
                    100: '#A0A991',
                    DEFAULT: '#9EFF00',
                    900: '#284000',
                },
            },
            fontSize: {
                '2-5xl': '1.75rem',
            },
            fontFamily: {
                display: ['var(--font-syne)'],
                sans: ['var(--font-geist-sans)'],
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        'font-family': theme('fontFamily.sans'),
                        'font-weight': theme('fontWeight.light'),
                        'font-size': theme('fontSize.sm'),
                        'line-height': theme('lineHeight.relaxed'),
                        'color': theme('colors.zinc.400'),
                        'margin-top': theme('margin.2'),
                        h1: {
                            'font-family': 'var(--font-syne)',
                            'font-weight': theme('fontWeight.normal'),
                            'font-size': theme('fontSize.4xl'),
                            'line-height': theme('lineHeight.tight'),
                            'margin-bottom': theme('margin.2'),
                        },
                        h2: {
                            'font-family': theme('fontFamily.display'),
                            'font-weight': theme('fontWeight.normal'),
                            'font-size': theme('fontSize.2-5xl'),
                            'line-height': theme('lineHeight.tight'),
                            'margin-bottom': theme('margin.2'),
                        },
                        h3: {
                            'font-family': theme('fontFamily.display'),
                            'font-weight': theme('fontWeight.normal'),
                            'font-size': theme('fontSize.xl'),
                            'line-height': theme('lineHeight.tight'),
                            'margin-bottom': theme('margin.2'),
                        },
                        dt: {
                            'font-family': theme('fontFamily.sans'),
                            'font-weight': theme('fontWeight.normal'),
                            'font-size': theme('fontSize.lg'),
                            'line-height': theme('lineHeight.none'),
                            'color': theme('colors.zinc.300'),
                            'margin-top': theme('margin.0'),
                            'margin-bottom': theme('margin.2'),
                        },
                        dd: {
                            'padding-left': theme('padding.0'),
                            'margin-bottom': theme('margin.14'),
                        },
                        a: {
                            'font-family': theme('fontFamily.sans'),
                            'font-weight': theme('fontWeight.normal'),
                            'font-size': theme('fontSize.base'),
                            'line-height': theme('lineHeight.relaxed'),
                            'margin-top': theme('margin.8'),
                            'text-underline-offset': theme('spacing.2'),
                            'text-decoration-thickness': '0.5px',
                        },
                    },
                },
                sm: {
                    css: {
                        'font-size': theme('fontSize.lg'),
                        h1: {
                            'font-size': theme('fontSize.5xl'),
                            'margin-bottom': theme('margin.3'),
                        },
                        h2: {
                            'font-size': theme('fontSize.3xl'),
                            'margin-bottom': theme('margin.3'),
                        },
                        h3: {
                            'font-size': theme('fontSize.3xl'),
                            'margin-bottom': theme('margin.3'),
                        },
                        dt: {
                            'font-size': theme('fontSize.xl'),
                            'margin-bottom': theme('margin.3'),
                        },
                        a: {
                            'font-size': theme('fontSize.xl'),
                        }
                    }
                },
                md: {
                    css: {
                        'font-size': theme('fontSize.lg'),
                        h1: {
                            'font-size': theme('fontSize.6xl'),
                            'margin-bottom': theme('margin.3'),
                        },
                        h2: {
                            'font-size': theme('fontSize.4xl'),
                            'margin-bottom': theme('margin.3'),
                        },
                        h3: {
                            'font-size': theme('fontSize.3xl'),
                            'margin-bottom': theme('margin.3'),
                        },
                        dt: {
                            'font-size': theme('fontSize.xl'),
                            'margin-bottom': theme('margin.3'),
                        },
                        a: {
                            'font-size': theme('fontSize.xl'),
                        }
                    }
                },
                lg: {
                    css: {
                        'font-size': theme('fontSize.lg'),
                        h1: {
                            'font-family': theme('fontFamily.display'),
                            'font-size': theme('fontSize.7xl'),
                            'margin-bottom': theme('margin.3'),
                        },
                        h2: {
                            'font-size': theme('fontSize.5xl'),
                            'margin-bottom': theme('margin.3'),
                        },
                        h3: {
                            'font-size': theme('fontSize.3xl'),
                            'margin-bottom': theme('margin.3'),
                        },
                        dt: {
                            'font-size': theme('fontSize.xl'),
                            'margin-bottom': theme('margin.3'),
                        },
                        a: {
                            'font-size': theme('fontSize.xl'),
                        }
                    }
                }
            })
        }
    },
    plugins: [
        tailwindAspect,
        tailwindForms,
        tailwindTypgraphy,
    ],
}
