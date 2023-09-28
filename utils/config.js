var domain;

if (process.env.NODE_ENV === 'production') {
    domain= 'https://montagabalhamawy.github.io/Next-Blog/'
} else {
    domain= 'http://localhost:3000/'
}

export default domain