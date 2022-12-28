import axios from 'axios';

const getRate = async (coins) => {
    let res = await axios.get(
        `https://blockchain.info/tobtc?currency=USD&value=${coins}`
    );
    return res.data;
};

const getMarketPrice = async () => {
    let res = await axios.get(
        `https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true`
    );
    return res.data.values.map((item) => item.y);
};

const getConfirmedTransactions = async () => {
    let res = await axios.get(
        `https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true`
    );
    return res.data.values.map((item) => item.y);
};

export const bitcoinService = {
    getRate,
    getMarketPrice,
    getConfirmedTransactions,
};
