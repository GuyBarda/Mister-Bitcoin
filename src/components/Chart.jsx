import { useEffect, useState } from 'react';

import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';

import { bitcoinService } from '../services/bitcoin.service';

export const Chart = () => {
    const [marketPrice, setMarketPrice] = useState(null);
    const [confirmedTransactions, setConfirmedTransactions] = useState(null);

    useEffect(() => {
        getChartData();
    }, []);

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
        <div className="chart-container secondary-container">
            <div className="flex ">
                {marketPrice && (
                    <Sparklines data={marketPrice}>
                        <SparklinesLine
                            style={{
                                fill: 'none',
                                stroke: '#3b5998',
                                'stroke-width': '2',
                            }}
                        />
                        <SparklinesSpots
                            style={{ fill: '#3b5998', stroke: 'white' }}
                        />
                    </Sparklines>
                )}

                {confirmedTransactions && (
                    <Sparklines data={confirmedTransactions}>
                        <SparklinesLine
                            style={{
                                fill: 'none',
                                stroke: '#3da96f',
                                'stroke-width': '2',
                            }}
                        />
                        <SparklinesSpots />
                    </Sparklines>
                )}
            </div>
        </div>
    );
};
