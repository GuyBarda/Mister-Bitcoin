import { setLoggedInUser } from '../store/actions/user.actions';

export const UserInfo = (props) => {
    const {
        loggedInUser: { name, coins, moves },
    } = props;

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
