export const getFrontendURL = () => {
    return process.env.FRONT_END_URL || 'http://localhost:3000';
}