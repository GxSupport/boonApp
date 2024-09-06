export const formatSum = (sum) => {
    if (sum)
        return sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};