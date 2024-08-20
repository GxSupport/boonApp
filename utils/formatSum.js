export const formatSum = (sum) => {
    return sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};