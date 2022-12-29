import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { bitcoinService } from '../services/bitcoin.service';

export const UserInfo = (props) => {
    const [userBtc, setUserBtc] = useState(null);

    const loggedInUser = useSelector((state) => state.userModule.loggedInUser);
    useEffect(() => {
        getRate();
    }, [loggedInUser]);

    const getRate = async () => {
        const userBtc = await bitcoinService.getRate(loggedInUser?.coins);
        setUserBtc(userBtc);
    };

    if (!loggedInUser) return <div className="">Please login first</div>;

    const { name, coins, moves } = loggedInUser;

    return (
        <div className="user-info secondary-container">
            <div className="user-details">
                <h1>hello {name}!</h1>
                <div className="">
                    <p>Coins: {coins}</p>
                    <p>BTC: {userBtc}</p>
                </div>
            </div>
            <ul>
                <li>{moves[0]}</li>
            </ul>
        </div>
    );
};

// const mapStateToProps = ({ userModule: { loggedInUser } }) => ({
//     loggedInUser,
// });

// const mapDispatchToProps = {
//     setLoggedInUser,
// };

// export const UserInfo = connect(mapStateToProps, mapDispatchToProps)(_UserInfo);
