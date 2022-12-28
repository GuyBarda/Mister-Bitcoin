import { useEffect, useState } from 'react';

import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';

import { bitcoinService } from '../services/bitcoin.service';

export const Chart = () => {
    const [marketPrice, setMarketPrice] = useState(null);
    const [confirmedTransactions, setConfirmedTransactions] = useState(null);

    useEffect(() => getChartData(), []);

    const getChartData = async () => {
        try {
            let marketPrice = await bitcoinService.getMarketPrice();
            let confirmedTransactions =
                await bitcoinService.getConfirmedTransactions();

            setMarketPrice(marketPrice);
            setConfirmedTransactions(confirmedTransactions);
        } catch (err) {
            console.log('err', err);
        }
    };

    return (
        <div className="chart-container">
            {marketPrice && (
                <Sparklines data={marketPrice}>
                    <SparklinesLine style={{ fill: 'none' }} />
                    <SparklinesSpots />
                </Sparklines>
            )}

            {confirmedTransactions && (
                <Sparklines data={confirmedTransactions}>
                    <SparklinesLine style={{ fill: 'none' }} />
                    <SparklinesSpots />
                </Sparklines>
            )}
        </div>
    );
};
